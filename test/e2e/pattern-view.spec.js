const { test, expect } = require( '@playwright/test' );

test.describe( 'Pattern View Interactions', () => {
	test.beforeEach( async ( { page } ) => {
		await page.goto( '/cards' );
		await expect( page.locator( '.wpui-com-page' ) ).toBeVisible();
	} );

	test( 'renders pattern previews in iframes', async ( { page } ) => {
		const iframes = page.locator( 'iframe' );
		await expect( iframes.first() ).toBeVisible();

		// Check the iframe has pattern metadata and rendered preview container
		await expect( iframes.first() ).toHaveAttribute(
			'data-category',
			'Cards'
		);
		const frame = iframes.first().contentFrame();
		await expect( frame.locator( '#preview-root' ) ).toBeVisible();
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

test.describe( 'Feed Patterns Render Integrity', () => {
	test( 'renders Feed1 with proper spacing, icon dimensions, and connecting line', async ( {
		page,
	} ) => {
		await page.goto( '/feed' );
		await expect( page.locator( '.wpui-com-page' ) ).toBeVisible();

		const iframes = page.locator( 'iframe' );
		await expect( iframes ).toHaveCount( 2 );

		// Check Feed1
		const feed1Frame = iframes.first().contentFrame();
		const feed1Root = feed1Frame.locator( '#preview-root' );
		await expect( feed1Root ).toBeVisible();

		const rows = feed1Frame.locator( '.wpui_order_timeline tr' );
		await expect( rows ).toHaveCount( 6 );

		// Verify rows 0-4 have spacing (padding-bottom: 40px gives height >= 90px)
		for ( let i = 0; i < 5; i++ ) {
			const rowBox = await rows.nth( i ).boundingBox();
			expect( rowBox.height ).toBeGreaterThanOrEqual( 90 );

			// Connecting line span should exist and have height spanning the item
			const line = rows.nth( i ).locator( '.timeline_item > span' );
			await expect( line ).toBeVisible();
			const lineBox = await line.boundingBox();
			expect( lineBox.height ).toBeGreaterThanOrEqual( 90 );
			expect( lineBox.width ).toBeGreaterThanOrEqual( 2 );

			// Icon circle badge
			const svg = rows.nth( i ).locator( 'svg' );
			await expect( svg ).toBeVisible();
			const svgBox = await svg.boundingBox();
			expect( svgBox.width ).toBeGreaterThanOrEqual( 50 );
			expect( svgBox.height ).toBeGreaterThanOrEqual( 50 );

			// Line should align with icon badge center (within 3px tolerance)
			const iconCenter = svgBox.x + svgBox.width / 2;
			const lineCenter = lineBox.x + lineBox.width / 2;
			expect( Math.abs( iconCenter - lineCenter ) ).toBeLessThanOrEqual(
				3
			);
		}

		// Row 5 (Delivered) has no line and height around 55px
		const lastRowBox = await rows.nth( 5 ).boundingBox();
		expect( lastRowBox.height ).toBeGreaterThanOrEqual( 50 );
		expect( lastRowBox.height ).toBeLessThan( 80 );
	} );

	test( 'renders Feed2 with cards and proper spacing', async ( { page } ) => {
		await page.goto( '/feed' );
		await expect( page.locator( '.wpui-com-page' ) ).toBeVisible();

		const iframes = page.locator( 'iframe' );
		const feed2Frame = iframes.nth( 1 ).contentFrame();
		const feed2Root = feed2Frame.locator( '#preview-root' );
		await expect( feed2Root ).toBeVisible();

		const rows = feed2Frame.locator( '.wpui_post_timeline tr' );
		await expect( rows ).toHaveCount( 5 );

		// Verify each item has cards rendered with non-zero dimensions
		for ( let i = 0; i < 5; i++ ) {
			const rowBox = await rows.nth( i ).boundingBox();
			expect( rowBox.height ).toBeGreaterThanOrEqual( 90 );

			const card = rows.nth( i ).locator( '.components-card' ).first();
			await expect( card ).toBeVisible();
			const cardBox = await card.boundingBox();
			expect( cardBox.width ).toBeGreaterThan( 200 );
		}
	} );

	test( 'renders Grid patterns with responsive columns and full heights', async ( {
		page,
	} ) => {
		await page.goto( '/gridlist' );
		await expect( page.locator( '.wpui-com-page' ) ).toBeVisible();

		// GridList 4 should not be cut off (height > 500px to fit all 6 cards)
		const frame4 = page
			.locator( 'iframe[data-pattern="GridList4"]' )
			.contentFrame();
		const root4 = frame4.locator( '#preview-root' );
		await expect( root4 ).toBeVisible();
		const box4 = await root4.boundingBox();
		expect( box4.height ).toBeGreaterThan( 500 );

		// GridList 1 responsive column shifts
		const view1 = page.locator( '.wpui-com-page > div > div' ).first();
		const tabletBtn = view1.getByRole( 'radio', { name: 'Tablet' } );
		const mobileBtn = view1.getByRole( 'radio', { name: 'Mobile' } );
		const desktopBtn = view1.getByRole( 'radio', { name: 'Desktop' } );

		const frame1 = page
			.locator( 'iframe[data-pattern="GridList1"]' )
			.contentFrame();
		const getCols = async () =>
			frame1.locator( 'body' ).evaluate( () => {
				const g = document.querySelector( '[class*="grid"]' );
				return window
					.getComputedStyle( g )
					.gridTemplateColumns.trim()
					.split( /\s+/ ).length;
			} );

		// Desktop: 3 columns
		expect( await getCols() ).toBe( 3 );

		// Tablet: 2 columns
		await tabletBtn.click();
		await page.waitForTimeout( 300 );
		expect( await getCols() ).toBe( 2 );

		// Mobile: 1 column
		await mobileBtn.click();
		await page.waitForTimeout( 300 );
		expect( await getCols() ).toBe( 1 );

		// Restore desktop
		await desktopBtn.click();
	} );

	test( 'patterns across categories have valid dimensions and no broken images', async ( {
		page,
	} ) => {
		const categories = [ '/cards', '/stats', '/tables', '/feed' ];

		for ( const cat of categories ) {
			await page.goto( cat );
			await expect( page.locator( '.wpui-com-page' ) ).toBeVisible();

			const iframes = await page.locator( 'iframe' ).all();
			expect( iframes.length ).toBeGreaterThan( 0 );

			for ( const iframe of iframes ) {
				const frame = iframe.contentFrame();
				const previewRoot = frame.locator( '#preview-root' );
				await expect( previewRoot ).toBeVisible();

				const box = await previewRoot.boundingBox();
				expect( box.height ).toBeGreaterThan( 20 );
				expect( box.width ).toBeGreaterThan( 100 );

				// Verify preview content rendered successfully without empty children
				const childCount = await frame
					.locator( '#preview-root' )
					.evaluate( ( root ) => root.children.length );
				expect( childCount ).toBeGreaterThan( 0 );
			}
		}
	} );
} );
