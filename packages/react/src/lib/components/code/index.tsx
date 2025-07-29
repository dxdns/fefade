import CodeComponent from "./Code.js"
import CodeItemComponent from "./CodeItem.js"

type CodeComponentType = typeof CodeComponent & {
	Item: typeof CodeItemComponent
}

const Code = CodeComponent as any as CodeComponentType
Code.Item = CodeItemComponent

export { Code as default }
