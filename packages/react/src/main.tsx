import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import FeflowProvider from "./lib/components/feflow-provider"
import { createTheme } from "./lib"

const theme = createTheme({
	colors: { light: { bg: "orange" } }
})

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<FeflowProvider theme={theme}>
			<App />
		</FeflowProvider>
	</StrictMode>
)
