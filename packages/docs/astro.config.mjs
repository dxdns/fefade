// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import svelte from "@astrojs/svelte"
import path from "path"

import react from "@astrojs/react"

import vue from "@astrojs/vue"

// https://astro.build/config
export default defineConfig({
	site: "https://feflow.dxdns.dev",
	integrations: [
		starlight({
			title: "feflow",
			components: {
				PageFrame: "./src/lib/layouts/RootLayout.astro",
				Hero: "./src/lib/components/Hero.astro"
			},
			customCss: ["./src/styles/custom.css"],
			favicon: "/favicon.png",
			logo: {
				light: "./src/assets/logo_light.png",
				dark: "./src/assets/logo_dark.png",
				replacesTitle: true
			},
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/dxdns/feflow"
				}
			],
			sidebar: [
				{
					label: "Introduction",
					slug: "docs"
				},
				{
					label: "Installation",
					slug: "docs/installation"
				},
				{
					label: "Theming",
					slug: "docs/theming"
				},
				{
					label: "Components",
					slug: "docs/components"
				},
				{
					label: "Templates",
					slug: "docs/templates"
				},
				{
					label: "UI Frameworks",
					collapsed: false,
					items: [
						{
							label: "Svelte",
							collapsed: true,
							items: [
								{
									label: "Getting Started",
									autogenerate: {
										directory: "docs/ui-frameworks/svelte/getting-started"
									}
								},
								{
									label: "Components",
									autogenerate: {
										directory: "docs/ui-frameworks/svelte/components"
									}
								},
								{
									label: "Utils",
									autogenerate: {
										directory: "docs/ui-frameworks/svelte/utils"
									}
								}
							]
						},
						{
							label: "React",
							collapsed: true,
							badge: "beta",
							items: [
								{
									label: "Getting Started",
									autogenerate: {
										directory: "docs/ui-frameworks/react/getting-started"
									}
								},
								{
									label: "Components",
									autogenerate: {
										directory: "docs/ui-frameworks/react/components"
									}
								}
							]
						},
						{
							label: "Vue",
							collapsed: true,
							badge: "beta",
							items: [
								{
									label: "Getting Started",
									autogenerate: {
										directory: "docs/ui-frameworks/vue/getting-started"
									}
								},
								{
									label: "Components",
									autogenerate: {
										directory: "docs/ui-frameworks/vue/components"
									}
								}
							]
						}
					]
				}
			]
		}),
		svelte(),
		react(),
		vue()
	],
	vite: {
		resolve: {
			alias: {
				"@": path.resolve("./src/lib")
			}
		}
	}
})
