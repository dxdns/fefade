import {
	Accordion,
	Button,
	Avatar,
	Badge,
	Card,
	themeConfig,
	TextField,
	Window,
	ColorPicker,
	Status,
	Checkbox,
	Code
} from "./lib"

function App() {
	const { toggle, mode } = themeConfig()

	const data = `
        .card {
            width: 400px;
            padding: 20px;
            border: 1px solid #0d1117;
            border-radius: 10px;
            background-color: #000;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            cursor: pointer;
        }`

	return (
		<>
			<Window label="label">
				<Code>
					{data
						.split("\n")
						.filter((l) => l.trim() !== "")
						.map((text, i) => (
							<Code.Item key={text} lineNumber={i}>
								{text.trim()}
							</Code.Item>
						))}
				</Code>
			</Window>
			<Checkbox />
			<Status color="red" />
			<ColorPicker />
			<Window>test</Window>
			<TextField label="label" />
			<h2>{mode}</h2>
			<Card glowOnHover>
				<span>card</span>
			</Card>
			<br />
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
