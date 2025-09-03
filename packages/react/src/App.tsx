import AvatarExample from "./examples/AvatarExample"
import { Button, useToast } from "./lib"

function App() {
	const toast = useToast()

	return (
		<div
			style={{
				minHeight: "80vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				gap: "1rem"
			}}
		>
			<AvatarExample />
			<Button
				onClick={() => {
					toast.add({ message: "test" })
				}}
			>
				toast
			</Button>
		</div>
	)
}

export default App
