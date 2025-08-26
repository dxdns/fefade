import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import NavnexProvider from "./lib/components/navnex-provider"
import { createTheme } from "./lib"

const theme = createTheme({
	colors: { light: { bg: "orange" } }
})

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NavnexProvider theme={theme}>
			<App />
		</NavnexProvider>
	</StrictMode>
)
