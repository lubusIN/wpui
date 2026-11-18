import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import React from 'react';
import * as patternCategories from '@wpui/patterns';

describe( 'Pattern Render Smoke Tests', () => {
	const categories = Object.entries( patternCategories );

	describe.each( categories )( 'Category: %s', ( categoryKey, patterns ) => {
		const patternEntries = Object.entries( patterns );

		describe.each( patternEntries )(
			'Pattern: %s',
			( patternName, PatternComponent ) => {
				it( 'renders without throwing exceptions', () => {
					const { container } = render( <PatternComponent /> );
					expect( container ).toBeDefined();
					expect( container.firstChild ).not.toBeNull();
				} );
			}
		);
	} );
} );
