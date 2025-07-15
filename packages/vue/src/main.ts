import { createApp, h } from "vue"
import App from "./App.vue"
import { FeflowProvider } from "./lib"

const app = createApp({
	render() {
		return h(FeflowProvider, null, {
			default: () => h(App)
		})
	}
})

app.mount("#app")
