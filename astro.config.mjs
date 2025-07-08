// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
	site: 'https://bandafotografica.cl',
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		sitemap({
			customPages: [
				'https://bandafotografica.cl/',
				'https://bandafotografica.cl/quienes-somos',
				'https://bandafotografica.cl/contacto',
				'https://bandafotografica.cl/donde-encontrarnos',
				'https://bandafotografica.cl/horario',
				'https://bandafotografica.cl/about'
			],
			filter: (page) => !page.includes('/blog/'),
		})
	],
	compressHTML: true,
});
