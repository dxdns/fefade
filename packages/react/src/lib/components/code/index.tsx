import CodeComponent from "./Code"
import CodeItemComponent from "./CodeItem"

type CodeComponentType = typeof CodeComponent & {
	Item: typeof CodeItemComponent
}

const Code = CodeComponent as unknown as CodeComponentType
Code.Item = CodeItemComponent

export { Code as default }
