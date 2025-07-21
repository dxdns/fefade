import { createApp, h } from "vue"
import App from "./App.vue"
import { createTheme, FeflowProvider } from "./lib"

const app = createApp({
	render() {
		return h(
			FeflowProvider,
			{ theme: createTheme({ colors: { light: { bg: "orange" } } }) },
			{
				default: () => h(App)
			}
		)
	}
})

app.mount("#app")
