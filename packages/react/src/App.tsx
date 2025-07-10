import styles from "@feflow/core/styles/Accordion.module.css"
import { useThemeConfig } from "@lib/components/feflow-provider"
import Button from "@lib/components/button"
import Avatar from "@lib/components/avatar"

function App() {
	const { toggle } = useThemeConfig()

	return (
		<>
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
			<div className={styles.accordion}>
				<input
					id="one"
					name="accordion"
					type="radio"
					className={styles.controller}
					hidden
				/>
				<label htmlFor={"one"} className={styles.header}>
					<label htmlFor={"one"}>label</label>
					<div className={styles.icon}>
						<span>icon</span>
					</div>
				</label>
				<div className={styles.content}>
					<span>content</span>
				</div>
			</div>
		</>
	)
}

export default App
