const { test, expect } = require( '@playwright/test' );

test.describe( 'App Shell & Navigation', () => {
	test( 'loads home page with header, hero, categories, and footer', async ( {
		page,
	} ) => {
		await page.goto( '/' );

		await expect( page ).toHaveTitle( /WPUI-Components/ );
		await expect( page.locator( '.wpui_container' ) ).toBeVisible();
		await expect( page.locator( '.wpui-hero-card' ) ).toBeVisible();
		await expect( page.locator( '.wpui-footer' ) ).toBeVisible();

		// Category cards should be visible
		const categoryCards = page.locator( '.wpui-preview' );
		await expect( categoryCards.first() ).toBeVisible();
		expect( await categoryCards.count() ).toBeGreaterThan( 5 );
	} );

	test( 'navigates to Getting Started page', async ( { page } ) => {
		await page.goto( '/' );

		// Click the visible Getting Started button in the hero CTA
		await page
			.locator( '.wpui-hero-cta' )
			.getByRole( 'button', { name: 'Getting started' } )
			.click();

		await expect( page ).toHaveURL( /.*\/getting-started/ );
		await expect( page.locator( '.getting_started' ) ).toBeVisible();
	} );

	test( 'navigates to a category page and returns via breadcrumbs', async ( {
		page,
	} ) => {
		await page.goto( '/' );

		// Click on Cards category
		await page.locator( '.wpui-card-link[href="/cards"]' ).click();
		await expect( page ).toHaveURL( /.*\/cards/ );

		// Category page content should load
		await expect( page.locator( '.wpui-com-page' ) ).toBeVisible();
		await expect( page.locator( '.wpui-back-button' ) ).toBeVisible();

		// Click Home breadcrumb to return
		await page.click( '.wpui-back-button a' );
		await expect( page ).toHaveURL( /\/$/ );
		await expect( page.locator( '.wpui-hero-card' ) ).toBeVisible();
	} );
} );
