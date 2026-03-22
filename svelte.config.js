import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			// base: process.env.NODE_ENV === 'production' ? '/svelte-teste' : '' // Para funcionar no Github Pages
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH // Para funcionar no Github Pages
		},
		appDir: 'app',
	},
	vitePlugin: {
		dynamicCompileOptions: ({ filename }) => filename.includes('node_modules') ? undefined : { runes: true }
	}
};

export default config;
