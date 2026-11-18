const { defineConfig, devices } = require( '@playwright/test' );

module.exports = defineConfig( {
	testDir: './test/visual',
	fullyParallel: true,
	forbidOnly: !! process.env.CI,
	retries: process.env.CI ? 1 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: process.env.CI ? [ [ 'github' ], [ 'html' ] ] : 'list',
	snapshotPathTemplate: '{testDir}/__snapshots__/{testFileDir}/{arg}{ext}',
	expect: {
		toHaveScreenshot: {
			maxDiffPixelRatio: 0.05,
			animations: 'disabled',
		},
	},
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
			name: 'desktop-chrome',
			use: {
				...devices[ 'Desktop Chrome' ],
				viewport: { width: 1200, height: 800 },
			},
		},
	],
} );
