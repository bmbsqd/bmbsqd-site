import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import compress from 'astro-compress'
import react from '@astrojs/react'

const assetPrefix = 'lib/'

export default defineConfig({
	site: 'https://bmbsqd-site.pages.dev',
	output: 'static',
	outDir: 'dist',

	build: {
		inlineStylesheets: 'always',
	},

	experimental: {
		contentIntellisense: true,
	},

	integrations: [
		react(),
		sitemap(),
		compress({
			Image: false,
		}),
	],

	scopedStyleStrategy: 'class',

	markdown: {
		shikiConfig: {
			theme: 'github-dark',
			wrap: true,
			// wrapLines: true,
			// lineNumbers: true,
			// autoDetectLineBreaks: true,
		},
	},

	image: {
		responsiveStyles: true,
		layout: 'constrained',
	},

	prefetch: {
		defaultStrategy: 'tap',
		prefetchAll: true,
	},

	vite: {
		plugins: [tailwindcss()] as any,
		resolve: {
			alias: {
				'@': new URL('./src', import.meta.url).pathname,
			},
		},
		build: {
			rollupOptions: {
				output: {
					hashCharacters: 'base36',
					chunkFileNames: `${assetPrefix}/[hash].js`,
					entryFileNames: `${assetPrefix}/[hash].js`,
					assetFileNames(chunkInfo) {
						if (chunkInfo.names.some((x) => x.endsWith('.css'))) {
							return `${assetPrefix}/[hash].[ext]`
						}
						if (
							chunkInfo.names.some(
								(x) => x.endsWith('.jpg') || x.endsWith('.jpeg')
							)
						) {
							// rename jpeg files
							return `${assetPrefix}/[hash].jpeg`
						}
						return `${assetPrefix}/[hash].[ext]`
					},
					banner(chunk) {
						if (
							chunk.fileName.endsWith('.css') ||
							chunk.fileName.endsWith('.js')
						) {
							return `/* LABS ©️ ${new Date().getFullYear()} */\n`
						}
						return ''
					},
				},
			},
		},
	},
})