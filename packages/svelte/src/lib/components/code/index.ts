import CodeComponent from "./Code.svelte"
import CodeItemComponent from "./CodeItem.svelte"

type CodeComponentType = typeof CodeComponent & {
	Item: typeof CodeItemComponent
}

const Code = CodeComponent as unknown as CodeComponentType
Code.Item = CodeItemComponent

export { Code as default }
