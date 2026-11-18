const { test, expect } = require( '@playwright/test' );

test.describe( 'Pattern Embed Mode', () => {
	test( 'renders pattern in isolation without app header or footer', async ( {
		page,
	} ) => {
		const consoleErrors = [];
		page.on( 'pageerror', ( error ) =>
			consoleErrors.push( error.message )
		);

		await page.goto( '/?mode=embed&category=Cards&pattern=Card1' );

		// In embed mode, the pattern component mounts inside #root directly
		await expect( page.locator( '#root' ) ).not.toBeEmpty();

		// Header, footer, and container must NOT be rendered in embed mode
		await expect( page.locator( '.wpui-header' ) ).toHaveCount( 0 );
		await expect( page.locator( '.wpui-footer' ) ).toHaveCount( 0 );
		await expect( page.locator( '.wpui-hero-card' ) ).toHaveCount( 0 );

		expect( consoleErrors ).toHaveLength( 0 );
	} );

	test( 'renders PageHeading pattern in embed mode', async ( { page } ) => {
		const consoleErrors = [];
		page.on( 'pageerror', ( error ) =>
			consoleErrors.push( error.message )
		);

		await page.goto( '/?mode=embed&category=PageHeading&pattern=Heading1' );

		await expect( page.locator( '#root' ) ).not.toBeEmpty();
		await expect( page.locator( 'text=Mindblown' ) ).toBeVisible();

		expect( consoleErrors ).toHaveLength( 0 );
	} );
} );
