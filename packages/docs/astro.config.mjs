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
			defaultLocale: "root",
			locales: {
				root: {
					label: "English",
					lang: "en"
				},
				"pt-br": {
					label: "Português do Brasil",
					lang: "pt-BR"
				}
			},
			components: {
				PageFrame: "./src/lib/layouts/RootLayout.astro",
				Hero: "./src/lib/components/Hero.astro",
				PageTitle: "./src/lib/components/PageTitle.astro"
			},
			customCss: ["./src/styles/custom.css", "./src/fonts/font-face.css"],
			favicon: "/favicon.ico",
			logo: {
				src: "./public/logo.png",
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
					slug: "introduction",
					translations: {
						"pt-BR": "Introdução"
					}
				},
				{
					label: "Installation",
					slug: "installation"
				},
				{
					label: "Theming",
					slug: "theming"
				},
				{
					label: "Components",
					slug: "components"
				},
				{
					label: "Templates",
					slug: "templates"
				},
				{
					label: "Frameworks",
					collapsed: false,
					items: [
						{
							label: "Svelte",
							collapsed: true,
							items: [
								{
									label: "Getting Started",
									autogenerate: {
										directory: "frameworks/svelte/getting-started"
									}
								},
								{
									label: "Components",
									autogenerate: {
										directory: "frameworks/svelte/components"
									}
								},
								{
									label: "Utils",
									autogenerate: {
										directory: "frameworks/svelte/utils"
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
										directory: "frameworks/react/getting-started"
									}
								},
								{
									label: "Components",
									autogenerate: {
										directory: "frameworks/react/components"
									}
								},
								{
									label: "Utils",
									autogenerate: {
										directory: "frameworks/react/utils"
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
										directory: "frameworks/vue/getting-started"
									}
								},
								{
									label: "Components",
									autogenerate: {
										directory: "frameworks/vue/components"
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
