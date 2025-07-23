import { useState } from "react"
import { Button, Drawer, Window } from "@dxdns/feflow-react"

type PositionType = "top" | "left" | "right" | "bottom"

export default function () {
	const [drawerStates, setDrawerStates] = useState<
		Record<PositionType, boolean>
	>({
		top: false,
		left: false,
		right: false,
		bottom: false
	})

	const [isOpen, setIsOpen] = useState(false)
	const [isOpenFixed, setIsOpenFixed] = useState(false)

	function handleToggle(position: PositionType) {
		setDrawerStates((prev) => ({
			...prev,
			[position]: !prev[position]
		}))
	}

	function handleClose(position: PositionType) {
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
			<Window style={{ height: "500px", width: "500px", position: "relative" }}>
				{(["top", "left", "right", "bottom"] as PositionType[]).map((pos) => (
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
					<Button onClick={() => handleToggle("top")}>Top With Overlay</Button>
					<Button onClick={() => handleToggle("left")}>
						Left With Overlay
					</Button>
					<Button onClick={() => handleToggle("right")}>Right</Button>
					<Button onClick={() => handleToggle("bottom")}>Bottom</Button>
				</div>
			</Window>

			<Window style={{ height: "500px", width: "500px" }}>
				<div
					style={{
						["--size" as any]: isOpen ? "auto" : "0",
						overflow: "hidden",
						display: "grid",
						gridTemplateColumns: "var(--size) 1fr"
					}}
				>
					<Drawer isOpen={isOpen} variant="permanent">
						<Drawer.Header handleClose={() => setIsOpen(false)}>
							<span>header</span>
						</Drawer.Header>
						<Drawer.Content>
							<span>test</span>
						</Drawer.Content>
					</Drawer>

					<div
						style={{
							background: "var(--ff-surface)",
							height: "40px",
							padding: "1rem",
							display: "flex",
							alignItems: "center",
							gap: "1rem"
						}}
					>
						{!isOpen && <Button onClick={() => setIsOpen(true)}>Left</Button>}
						<span>Menu</span>
					</div>
				</div>
			</Window>
		</>
	)
}
