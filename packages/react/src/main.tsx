import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import FeflowProvider from "./lib/components/feflow-provider"

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<FeflowProvider>
			<App />
		</FeflowProvider>
	</StrictMode>
)
