const defaultConfig = require( '@wordpress/scripts/config/eslint.config.cjs' );

module.exports = [
	...defaultConfig,
	{
		languageOptions: {
			globals: {
				IntersectionObserver: 'readonly',
				MutationObserver: 'readonly',
			},
		},
		rules: {
			// WPUI is a pattern library specifically showcasing WordPress components,
			// many of which are experimental/unstable in @wordpress/components (e.g. __experimentalHStack).
			'@wordpress/no-unsafe-wp-apis': 'off',
			// Relax JSDoc requirements for pattern showcase components.
			'jsdoc/require-param': 'off',
		},
	},
];
