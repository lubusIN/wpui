const { test, expect } = require( '@playwright/test' );

test.describe( 'Pattern View Interactions', () => {
	test.beforeEach( async ( { page } ) => {
		await page.goto( '/cards' );
		await expect( page.locator( '.wpui-com-page' ) ).toBeVisible();
	} );

	test( 'renders pattern previews in iframes', async ( { page } ) => {
		const iframes = page.locator( 'iframe' );
		await expect( iframes.first() ).toBeVisible();

		// Check the src contains embed mode parameters
		const src = await iframes.first().getAttribute( 'src' );
		expect( src ).toContain( 'mode=embed' );
		expect( src ).toContain( 'category=Cards' );
	} );

	test( 'toggles between Preview and Code views', async ( { page } ) => {
		const viewToggle = page.locator( '.wpui-view-toggle' ).first();
		await expect( viewToggle ).toBeVisible();

		// Click Code view toggle
		await viewToggle.getByText( 'Code', { exact: true } ).click();

		// Syntax highlighter code block should now be visible
		const codeBlock = page.locator( 'pre' ).first();
		await expect( codeBlock ).toBeVisible();
		await expect( codeBlock ).toContainText( 'function Card1' );

		// Copy button should be visible in code view
		const copyButton = page.locator( '.wpui-copy' ).first();
		await expect( copyButton ).toBeVisible();

		// Click Preview toggle to return to preview mode
		await viewToggle.getByText( 'Preview', { exact: true } ).click();

		// Preview iframe should be visible again
		const iframe = page.locator( 'iframe' ).first();
		await expect( iframe ).toBeVisible();
	} );

	test( 'switches responsive device viewports', async ( { page } ) => {
		const resizableBox = page
			.locator( '.components-resizable-box__container' )
			.first();

		await expect( resizableBox ).toBeVisible();

		// Find tablet button by aria-label
		const tabletButton = page
			.locator(
				'button[aria-label="Tablet"], [aria-label="Tablet"] button, button:has-text("Tablet")'
			)
			.first();

		if ( await tabletButton.isVisible() ) {
			await tabletButton.click();
			// Tablet width is 800px
			await expect( resizableBox ).toHaveCSS( 'width', '800px' );

			// Click Mobile button
			const mobileButton = page
				.locator(
					'button[aria-label="Mobile"], [aria-label="Mobile"] button, button:has-text("Mobile")'
				)
				.first();
			await mobileButton.click();
			// Mobile width is 400px
			await expect( resizableBox ).toHaveCSS( 'width', '400px' );

			// Click Desktop button
			const desktopButton = page
				.locator(
					'button[aria-label="Desktop"], [aria-label="Desktop"] button, button:has-text("Desktop")'
				)
				.first();
			await desktopButton.click();
			// Desktop width is 1200px
			await expect( resizableBox ).toHaveCSS( 'width', '1200px' );
		}
	} );
} );
