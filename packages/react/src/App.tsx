import GalleryExample from "./examples/GalleryExample"

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
			<GalleryExample />
		</div>
	)
}

export default App
