const { defineConfig, devices } = require( '@playwright/test' );

module.exports = defineConfig( {
	testDir: './test/e2e',
	fullyParallel: true,
	forbidOnly: !! process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: process.env.CI ? [ [ 'github' ], [ 'html' ] ] : 'list',
	use: {
		baseURL: 'http://localhost:3456',
		trace: 'on-first-retry',
	},
	webServer: {
		command: 'npx serve -s -l 3456',
		port: 3456,
		reuseExistingServer: ! process.env.CI,
		timeout: 30_000,
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices[ 'Desktop Chrome' ] },
		},
	],
} );
