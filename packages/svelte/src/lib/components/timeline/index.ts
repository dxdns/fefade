import TimelineComponent from "./Timeline.svelte"
import TimelineItemComponent from "./TimelineItem.svelte"

type TimelineComponentType = typeof TimelineComponent & {
	Item: typeof TimelineItemComponent
}

const Timeline = TimelineComponent as any as TimelineComponentType
Timeline.Item = TimelineItemComponent

export { Timeline as default }
