import TabComponent from "./Tab.svelte"
import TabListComponent from "./TabList.svelte"
import TabPanelComponent from "./TabPanel.svelte"

type TabComponentType = typeof TabComponent & {
	List: typeof TabListComponent
	Panel: typeof TabPanelComponent
}

const Tab = TabComponent as any as TabComponentType
Tab.List = TabListComponent
Tab.Panel = TabPanelComponent

export { Tab as default }
