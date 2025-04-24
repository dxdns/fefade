type ValidationMessages = {
  [key: string]: string | ((el: ValidatableElement) => string)
}

type ValidatableElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement

type Params = {
  onErrors?: (errors: Error[]) => void
}

export default function validateFormAction(
  node: HTMLFormElement,
  params: Params,
) {
  let { onErrors } = params

  node.noValidate = true

  const defaultMessages: ValidationMessages = {
    valueMissing: "Este campo é obrigatório.",
    typeMismatch: (el) => {
      switch (el.type) {
        case "email":
          return "Digite um e-mail válido."
        case "url":
          return "Digite uma URL válida."
        default:
          return "O valor informado é inválido."
      }
    },
    tooShort: (el) => `Mínimo de ${el.getAttribute("minlength")} caracteres.`,
    tooLong: (el) => `Máximo de ${el.getAttribute("maxlength")} caracteres.`,
    patternMismatch: "O formato do valor está incorreto.",
    rangeUnderflow: (el) =>
      `O valor deve ser maior ou igual a ${el.getAttribute("min")}.`,
    rangeOverflow: (el) =>
      `O valor deve ser menor ou igual a ${el.getAttribute("max")}.`,
    stepMismatch: "Valor inválido para este campo.",
    default: "Campo inválido.",
  }

  function getValidationMessage(
    el: ValidatableElement,
    messages = defaultMessages,
  ): string {
    const { validity } = el

    for (const key in validity) {
      const valid = validity[key as keyof ValidityState]
      if (valid && key !== "valid") {
        const messageHandler = messages[key] ?? messages.default
        return typeof messageHandler === "function"
          ? messageHandler(el)
          : messageHandler
      }
    }

    return ""
  }

  function collectValidationErrors(form: HTMLFormElement): Error[] {
    const fields = Array.from(
      form.querySelectorAll<ValidatableElement>("input, select, textarea"),
    )

    return fields
      .filter((el) => el.willValidate)
      .map((el) => {
        const isValid = el.checkValidity()
        const errorMessage = isValid ? "" : getValidationMessage(el)

        el.setAttribute("data-error", errorMessage)

        return {
          name: el.name || el.id || "campo",
          message: errorMessage,
        }
      })
      .filter((error) => error.message)
  }

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault()

    const errors = collectValidationErrors(node)

    if (errors.length > 0) {
      onErrors?.(errors)
    } else {
      onErrors?.([])
    }
  }

  node.addEventListener("submit", handleSubmit)

  return {
    update(newParams: Params) {
      onErrors = newParams.onErrors
    },
    destroy() {
      node.removeEventListener("submit", handleSubmit)
    },
  }
}
