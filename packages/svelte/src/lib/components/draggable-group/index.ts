import DraggableGroupComponent from "./DraggableGroup.svelte"
import DraggableGroupItemComponent from "./DraggableGroupItem.svelte"

type DraggableGroupComponentType = typeof DraggableGroupComponent & {
	Item: typeof DraggableGroupItemComponent
}

const DraggableGroup =
	DraggableGroupComponent as any as DraggableGroupComponentType
DraggableGroup.Item = DraggableGroupItemComponent

export { DraggableGroup as default }
