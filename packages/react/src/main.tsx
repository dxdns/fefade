import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import Provider from "./lib/components/provider"
import { createTheme } from "./lib"

const theme = createTheme({
	colors: { light: { bg: "orange" } }
})

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider theme={theme}>
			<App />
		</Provider>
	</StrictMode>
)
