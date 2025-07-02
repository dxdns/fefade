import ModalComponent from "./Modal.svelte"
import ModalHeaderComponent from "./ModalHeader.svelte"
import ModalContentComponent from "./ModalContent.svelte"
import ModalActionsComponent from "./ModalActions.svelte"

type ModalComponentType = typeof ModalComponent & {
	Header: typeof ModalHeaderComponent
	Content: typeof ModalContentComponent
	Actions: typeof ModalActionsComponent
}

const Modal = ModalComponent as unknown as ModalComponentType
Modal.Header = ModalHeaderComponent
Modal.Content = ModalContentComponent
Modal.Actions = ModalActionsComponent

export { Modal as default }
