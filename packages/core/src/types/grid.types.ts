export type GridType = {
	/**
	 * Grid layout type.
	 * - "masonry": Uses a masonry-style layout.
	 * - If omitted, the default layout is applied.
	 */
	variant?: "masonry"

	/**
	 * Number of columns or auto-fit behavior.
	 * @default "auto-fit"
	 */
	columns?: number | string

	/**
	 * Space between grid items.
	 * @default "0.75rem"
	 */
	gap?: number | string

	/**
	 * Minimum width of each grid item.
	 * @default "12.5rem"
	 */
	minWidth?: number | string

	/**
	 * Maximum width of each grid item.
	 * @default "1fr"
	 */
	maxWidth?: number | string
}
