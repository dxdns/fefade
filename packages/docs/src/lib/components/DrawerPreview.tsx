import { useState } from "react"
import { Button, Drawer, Window } from "@fefade/react"

export default function () {
	const [drawerStates, setDrawerStates] = useState({
		top: false,
		left: false,
		right: false,
		bottom: false
	})

	type DrawerPosition = keyof typeof drawerStates

	const [isOpenFixed, setIsOpenFixed] = useState(false)

	function handleToggle(position: DrawerPosition) {
		setDrawerStates((prev) => ({
			...prev,
			[position]: !prev[position]
		}))
	}

	function handleClose(position: DrawerPosition) {
		setDrawerStates((prev) => ({
			...prev,
			[position]: false
		}))
	}

	const renderHeader = (handleClose?: () => void) => (
		<Drawer.Header handleClose={handleClose}>
			<span>logo</span>
		</Drawer.Header>
	)

	const renderContent = () => (
		<Drawer.Content>
			<a href="/">label</a>
		</Drawer.Content>
	)

	return (
		<>
			<Drawer.Overlay
				isOpen={isOpenFixed}
				onClick={() => {
					setIsOpenFixed(false)
				}}
			/>
			<Drawer isOpen={isOpenFixed} position="right">
				{renderHeader()}
				{renderContent()}
			</Drawer>
			<Button onClick={() => setIsOpenFixed((prev) => !prev)}>
				Right Fixed
			</Button>
			<br />
			<br />
			<Window style={{ minHeight: "500px", position: "relative" }}>
				{(["top", "left", "right", "bottom"] as DrawerPosition[]).map((pos) => (
					<div key={pos}>
						<Drawer.Overlay
							isOpen={drawerStates[pos]}
							onClick={() => handleClose(pos)}
							style={{ position: "absolute" }}
						/>
						<Drawer
							isOpen={drawerStates[pos]}
							position={pos}
							style={{ position: "absolute" }}
						>
							{renderHeader(() => handleClose(pos))}
							{renderContent()}
						</Drawer>
					</div>
				))}

				<div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
					<Button onClick={() => handleToggle("top")}>Top</Button>
					<Button onClick={() => handleToggle("left")}>
						Left
					</Button>
					<Button onClick={() => handleToggle("right")}>Right</Button>
					<Button onClick={() => handleToggle("bottom")}>Bottom</Button>
				</div>
			</Window>
		</>
	)
}
