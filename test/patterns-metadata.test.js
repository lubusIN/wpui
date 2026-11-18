import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import * as patternCategories from '@wpui/patterns';
import * as categoryDefinitions from '@wpui/categories';

describe( 'Pattern Metadata Integrity', () => {
	const categories = Object.entries( patternCategories );

	it( 'has registered categories', () => {
		expect( categories.length ).toBeGreaterThan( 0 );
	} );

	describe.each( categories )( 'Category: %s', ( categoryKey, patterns ) => {
		const patternEntries = Object.entries( patterns );

		it( 'contains patterns', () => {
			expect( patternEntries.length ).toBeGreaterThan( 0 );
		} );

		describe.each( patternEntries )(
			'Pattern: %s',
			( patternKey, PatternComponent ) => {
				it( 'has a valid .meta definition', () => {
					expect( PatternComponent ).toBeDefined();
					expect( PatternComponent.meta ).toBeDefined();
					const {
						title,
						name,
						category,
						path: patternPath,
					} = PatternComponent.meta;

					expect( typeof title ).toBe( 'string' );
					expect( title.trim().length ).toBeGreaterThan( 0 );

					expect( typeof name ).toBe( 'string' );
					expect( name ).toBe( patternKey );

					expect( typeof category ).toBe( 'string' );
					expect( category.toLowerCase() ).toBe(
						categoryKey.toLowerCase()
					);

					expect( typeof patternPath ).toBe( 'string' );
					expect( patternPath.startsWith( '/' ) ).toBe( true );
				} );

				it( 'references an existing file on disk', () => {
					const { path: patternPath } = PatternComponent.meta;
					const filePath = path.resolve(
						process.cwd(),
						`src/patterns${ patternPath }.js`
					);

					expect(
						fs.existsSync( filePath ),
						`File should exist at ${ filePath }`
					).toBe( true );
				} );

				it( 'has valid @meta markers for raw-loader stripping', () => {
					const { path: patternPath } = PatternComponent.meta;
					const filePath = path.resolve(
						process.cwd(),
						`src/patterns${ patternPath }.js`
					);
					const fileContent = fs.readFileSync( filePath, 'utf8' );

					expect( fileContent ).toContain( '// @meta-start' );
					expect( fileContent ).toContain( '// @meta-end' );

					const stripped = fileContent.replace(
						/^\s*\/\/ @meta-start[\s\S]*?\/\/ @meta-end\s*$/gm,
						''
					);

					expect( stripped ).not.toContain( '// @meta-start' );
					expect( stripped ).not.toContain( '// @meta-end' );
					expect( stripped ).toContain(
						`export default ${ patternKey }`
					);
				} );
			}
		);
	} );
} );

describe( 'Category Definitions Integrity', () => {
	const categoryEntries = Object.entries( categoryDefinitions );

	it( 'has registered category pages', () => {
		expect( categoryEntries.length ).toBeGreaterThan( 0 );
	} );

	describe.each( categoryEntries )(
		'Category Page: %s',
		( categoryName, categoryModule ) => {
			it( 'defines meta with title, path, and patterns', () => {
				expect( categoryModule.meta ).toBeDefined();
				const { title, path: catPath, patterns } = categoryModule.meta;

				expect( typeof title ).toBe( 'string' );
				expect( title.trim().length ).toBeGreaterThan( 0 );

				expect( typeof catPath ).toBe( 'string' );
				expect( catPath.startsWith( '/' ) ).toBe( true );

				expect( patterns ).toBeDefined();
				expect( Object.keys( patterns ).length ).toBeGreaterThan( 0 );
			} );
		}
	);
} );
