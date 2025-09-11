import { SearchInput } from "./lib"

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
			<SearchInput />
		</div>
	)
}

export default App
