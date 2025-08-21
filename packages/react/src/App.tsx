import AvatarExample from "./examples/AvatarExample"

function App() {
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
		</div>
	)
}

export default App
