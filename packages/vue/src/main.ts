import { createApp, h } from "vue"
import App from "./App.vue"
import { createTheme, Provider } from "./lib"

const app = createApp({
	render() {
		return h(
			Provider,
			{ theme: createTheme({ colors: { light: { bg: "orange" } } }) },
			{
				default: () => h(App)
			}
		)
	}
})

app.mount("#app")
