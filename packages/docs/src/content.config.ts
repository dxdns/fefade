import { defineCollection, z } from "astro:content"
import { docsLoader } from "@astrojs/starlight/loaders"
import { docsSchema } from "@astrojs/starlight/schema"

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				categories: z
					.enum(["tutorial", "guide", "reference", "react", "vue", "svelte"])
					.array()
					.optional()
			})
		})
	})
}
