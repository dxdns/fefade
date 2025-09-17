// @ts-check
import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"
import svelte from "@astrojs/svelte"
import path from "path"
import react from "@astrojs/react"
import vue from "@astrojs/vue"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
	site: "https://fefade.dev",
	integrations: [
		sitemap(),
		starlight({
			title: "fefade",
			components: {
				PageFrame: "./src/lib/layouts/RootLayout.astro",
				Hero: "./src/lib/components/Hero.astro",
				PageTitle: "./src/lib/components/PageTitle.astro"
			},
			customCss: ["./src/styles/custom.css"],
			favicon: "/favicon.png",
			logo: {
				src: "./public/favicon.png",
				alt: "logo",
				replacesTitle: false
			},
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/dxdns/fefade"
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
								},
								{
									label: "Utils",
									autogenerate: {
										directory: "docs/ui-frameworks/react/utils"
									}
								}
							]
						},
						{
							label: "Vue",
							collapsed: true,
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
