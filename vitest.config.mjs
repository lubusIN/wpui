import { defineConfig } from 'vitest/config';
import { transformSync } from 'rolldown/utils';
import path from 'path';

function jsxInJsPlugin() {
	return {
		name: 'vite:jsx-in-js',
		enforce: 'pre',
		transform( code, id ) {
			if (
				( id.includes( '/src/' ) || id.includes( '/test/' ) ) &&
				id.endsWith( '.js' ) &&
				code.includes( '<' )
			) {
				const result = transformSync( id, code, {
					lang: 'jsx',
					sourcemap: true,
				} );
				return {
					code: result.code,
					map: result.map,
				};
			}
		},
	};
}

export default defineConfig( {
	plugins: [ jsxInJsPlugin() ],
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: [ './test/setup.js' ],
		include: [ 'test/**/*.test.js' ],
		exclude: [ 'test/e2e/**', '**/node_modules/**' ],
	},
	resolve: {
		alias: {
			'@wpui': path.resolve( import.meta.dirname, './src' ),
		},
	},
} );
