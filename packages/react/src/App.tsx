import styles from "@feflow/core/styles/Accordion.module.css"
import { useThemeConfig } from "./lib/components/feflow-provider"
import Button from "./lib/components/button"

function App() {
	const { toggle } = useThemeConfig()

	return (
		<>
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
