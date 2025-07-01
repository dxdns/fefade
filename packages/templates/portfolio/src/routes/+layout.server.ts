import type { LayoutServerLoad } from "./$types"

export const load = (async () => {
	return {
		title: "feflow"
	}
}) satisfies LayoutServerLoad
