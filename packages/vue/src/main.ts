import { createApp, h } from "vue"
import App from "./App.vue"
import { createTheme, NavnexProvider } from "./lib"

const app = createApp({
	render() {
		return h(
			NavnexProvider,
			{ theme: createTheme({ colors: { light: { bg: "orange" } } }) },
			{
				default: () => h(App)
			}
		)
	}
})

app.mount("#app")
