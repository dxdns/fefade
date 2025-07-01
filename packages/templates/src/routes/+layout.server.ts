import type { LayoutServerLoad } from "./$types"

export const load = (async () => {
	return {
		title: "feflow templates"
	}
}) satisfies LayoutServerLoad
