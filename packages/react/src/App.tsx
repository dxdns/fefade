import styles from "core/styles/Accordion.module.css"

function App() {
	return (
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
	)
}

export default App
