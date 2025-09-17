import { Constants } from "@fefade/core"
import { Button, Toaster, useToast } from "@fefade/react"

function ToastPreview() {
	const toast = useToast()

	const positions = [
		"top-left",
		"bottom-left",
		"top-right",
		"bottom-right",
		"bottom-center",
		"top-center"
	] as const

	return (
		<div
			style={{
				display: "flex",
				gap: "1rem",
				alignItems: "center",
				flexWrap: "wrap"
			}}
		>
			{Constants.statusColors.map((color) => (
				<Button
					key={color}
					onClick={() => {
						toast.add({
							message: color,
							color
						})
					}}
					className={`bg-${color} text-on-${color}`}
				>
					{color}
				</Button>
			))}

			{positions.map((position) => (
				<Button
					key={position}
					onClick={() => {
						toast.add({
							message: position,
							position
						})
					}}
				>
					{position}
				</Button>
			))}

			<Button
				onClick={() => {
					toast.add({
						message: "Duration: 50000",
						duration: 50000
					})
				}}
			>
				Duration: 50000
			</Button>

			<Button
				onClick={() => {
					toast.add({
						message: "closable",
						isClosable: true
					})
				}}
			>
				Closable
			</Button>

			<Button
				onClick={() => {
					toast.add({
						message: "with progress loader",
						withProgressLoader: true,
						duration: 15000
					})
				}}
			>
				With Progress Loader
			</Button>
		</div>
	)
}

export default function () {
	return (
		<Toaster>
			<ToastPreview />
		</Toaster>
	)
}
