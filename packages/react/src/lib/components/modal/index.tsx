import ModalComponent from "./Modal.js"
import ModalHeaderComponent from "./ModalHeader.js"
import ModalContentComponent from "./ModalContent.js"
import ModalActionsComponent from "./ModalActions.js"

type ModalComponentType = typeof ModalComponent & {
	Header: typeof ModalHeaderComponent
	Content: typeof ModalContentComponent
	Actions: typeof ModalActionsComponent
}

const Modal = ModalComponent as any as ModalComponentType
Modal.Header = ModalHeaderComponent
Modal.Content = ModalContentComponent
Modal.Actions = ModalActionsComponent

export { Modal as default }
