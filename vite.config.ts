import react from '@vitejs/plugin-react';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		cssMinify: 'lightningcss',
	},
	css: {
		lightningcss: {
			targets: browserslistToTargets(browserslist('defaults')),
		},
		transformer: 'lightningcss',
	},
	plugins: [react()],
});
