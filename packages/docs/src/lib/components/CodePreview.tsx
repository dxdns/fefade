import { Code, Window } from "@feflow-ui/react"

export default function () {
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
	)
}
