import DrawerDemo from "./DrawerDemo"
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
	Code,
	RangeInput,
	SearchInput,
	Switch,
	Link,
	Image
} from "./lib"
import { useState } from "react"

function App() {
	const [inputValue, setInputValue] = useState(0)
	const [width, setWidth] = useState(2)
	const [checked, setChecked] = useState(false)

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
			<Image
				dataSrc="https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2023/01/Avatar-Loak.jpg"
				fallback="https://avatars.githubusercontent.com/u/26321303?v=4"
				width={250}
				height={250}
			/>
			<Link href="/" hover="underlineNone">
				test
			</Link>
			<Switch
				id="test1"
				label={`test (${checked})`}
				checked={checked}
				onChange={(e) => {
					setChecked(e.currentTarget.checked)
				}}
				size="xl"
			/>
			<br />
			<Card animatedBorder>
				<h1>animated border</h1>
			</Card>
			<br />
			<Card
				animatedBorder={{
					width,
					primaryColor: "green",
					secondaryColor: "red"
				}}
			>
				<h1>animated border - custom colors</h1>
				<Button
					onClick={() => {
						setWidth((old) => (old += 5))
					}}
				>
					+ width
				</Button>
			</Card>
			<br />
			<DrawerDemo />
			<h2>{inputValue}</h2>
			<RangeInput
				step={10}
				value={inputValue}
				onChange={(value) => {
					setInputValue(value)
				}}
			/>
			<br />
			<br />
			<RangeInput step={10} value={inputValue} />
			<br />
			<br />
			<SearchInput placeholder="test..." />
			<br />
			<br />
			<Window label="label" animatedBorder>
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
			<Status color="red" />
			<br />
			<Checkbox />
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
