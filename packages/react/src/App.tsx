import { useThemeConfig } from "@lib/components/feflow-provider"
import { Accordion, Button, Avatar, Badge } from "./lib"

function App() {
	const { toggle } = useThemeConfig()

	return (
		<>
			<Badge className="bg-error text-on-error" size="lg">
				test
			</Badge>
			<br />
			<br />
			<Avatar textFallback="test" />
			<br />
			<Avatar
				src="https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2023/01/Avatar-Loak.jpg"
				textFallback="test"
			/>
			<br />
			<Avatar
				src="https://avatars.githubusercontent.com/u/26321303?v=4"
				textFallback="test"
				width="150px"
				height="150px"
			/>
			<br />
			<Button onClick={toggle}>toggle</Button>
			<br />
			<br />
			<Accordion label="test" id="test1">
				content
			</Accordion>
		</>
	)
}

export default App
