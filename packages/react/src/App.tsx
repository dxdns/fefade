import MediaQueryExample from "./examples/MediaQueryExample"

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
			<MediaQueryExample />
		</div>
	)
}

export default App
