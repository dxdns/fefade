import { Button, Modal } from "@dxdns/feflow-react"
import { useState } from "react"

export default function () {
	const [isOpen, setIsOpen] = useState(false)

	function handleClose() {
		setIsOpen(false)
	}

	return (
		<>
			<Modal isOpen={isOpen} handleClose={handleClose}>
				<Modal.Header handleClose={handleClose} align="center">
					<h2>test header</h2>
				</Modal.Header>
				<Modal.Content>
					<p>test content</p>
				</Modal.Content>
				<Modal.Actions className="border-0" align="center">
					<Button variant="outlined" onClick={handleClose}>
						Cancel
					</Button>
					<Button>Save</Button>
				</Modal.Actions>
			</Modal>
			<Button
				onClick={() => {
					setIsOpen(true)
				}}
			>
				Open modal
			</Button>
		</>
	)
}
