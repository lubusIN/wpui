const { test, expect } = require( '@playwright/test' );

const samplePatterns = [
	{ category: 'Cards', pattern: 'Card1' },
	{ category: 'Cards', pattern: 'Card6' },
	{ category: 'ActionPanels', pattern: 'Panel1' },
	{ category: 'Stats', pattern: 'Stats1' },
	{ category: 'Tables', pattern: 'Table1' },
	{ category: 'Feeds', pattern: 'Feed1' },
	{ category: 'BreadCrumbs', pattern: 'Breadcrumb1' },
	{ category: 'SignIn', pattern: 'SignIn1' },
	{ category: 'PageHeading', pattern: 'Heading1' },
];

test.describe( 'Visual Regression - Pattern Embeds', () => {
	for ( const { category, pattern } of samplePatterns ) {
		test( `${ category } - ${ pattern } visual snapshot`, async ( {
			page,
		} ) => {
			await page.goto(
				`/?mode=embed&category=${ category }&pattern=${ pattern }`
			);

			// Wait for networkidle so fonts and any remote assets are loaded
			await page.waitForLoadState( 'networkidle' );
			const root = page.locator( '#root' );
			await expect( root ).not.toBeEmpty();

			await expect( root ).toHaveScreenshot(
				`${ category }-${ pattern }.png`
			);
		} );
	}
} );

test.describe( 'Visual Regression - App Shell', () => {
	test( 'Home hero section visual snapshot', async ( { page } ) => {
		await page.goto( '/' );
		await page.waitForLoadState( 'networkidle' );

		const hero = page.locator( '.wpui-hero-Section' );
		await expect( hero ).toBeVisible();
		await expect( hero ).toHaveScreenshot( 'home-hero.png' );
	} );
} );
