import { BottomSheet, Button } from "@dxdns/feflow-react"
import { useState } from "react"

export default function () {
	const [isOpen, setIsOpen] = useState(false)

	function handleOpen() {
		setIsOpen((old) => !old)
	}

	function handleClose() {
		setIsOpen(false)
	}

	return (
		<>
			<BottomSheet.Overlay
				isOpen={isOpen}
				onClick={handleClose}
				style={{ zIndex: 998 }}
			/>
			<BottomSheet isOpen={isOpen} handleClose={handleClose}>
				<h1>test</h1>
			</BottomSheet>

			<Button onClick={handleOpen}>Open</Button>
		</>
	)
}
