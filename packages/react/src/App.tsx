import styles from "core/styles/Accordion.module.css"
import { useThemeConfig } from "./lib/components/feflow-provider"

function App() {
	const { toggle } = useThemeConfig()

	return (
		<>
			<button onClick={toggle}>toggle</button>
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
