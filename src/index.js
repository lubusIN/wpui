/**
 * External dependencies.
 */
import React, { useRef, useEffect } from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

/**
 * WordPress dependencies.
 */
import '@wordpress/components/build-style/style.css';

/**
 * Internal dependencies.
 */
import '@wpui/app.scss';
import App from '@wpui/app';
import * as Patterns from './patterns';

/**
 * Resolve a pattern component by category and pattern name.
 * Handles casing and singular/plural category variations.
 *
 * @param {string} category    Category name.
 * @param {string} patternName Pattern component name.
 * @return {React.ComponentType|null} Pattern component or null.
 */
function findPattern( category, patternName ) {
	if ( ! category || ! patternName ) {
		return null;
	}
	const catNorm = category.toLowerCase().replace( /s$/, '' );
	const patNorm = patternName.toLowerCase();

	for ( const [ catKey, catPatterns ] of Object.entries( Patterns ) ) {
		if ( catKey.toLowerCase().replace( /s$/, '' ) === catNorm ) {
			for ( const [ pKey, Component ] of Object.entries( catPatterns ) ) {
				if (
					pKey.toLowerCase() === patNorm ||
					Component?.meta?.name?.toLowerCase() === patNorm
				) {
					return Component;
				}
			}
		}
	}
	return null;
}

/**
 * Clean native embed runner.
 * Mounts the isolated pattern in its own window/document context and synchronizes
 * its bounding height with the parent frame using ResizeObserver and postMessage.
 *
 * @param {Object} props
 * @param {string} props.category
 * @param {string} props.patternName
 */
function EmbedRunner( { category, patternName } ) {
	const Pattern = findPattern( category, patternName );
	const containerRef = useRef( null );

	useEffect( () => {
		document.body.classList.add( 'is-embed' );
		const container = containerRef.current;
		if ( ! container ) {
			return;
		}

		const sendHeight = () => {
			const rect = container.getBoundingClientRect();
			const scrollH = container.scrollHeight;
			const height = Math.max( rect.height, scrollH );
			if ( height > 0 ) {
				window.parent.postMessage(
					{
						type: 'wpui-pattern-resize',
						category,
						pattern: patternName,
						height: Math.ceil( height ),
					},
					'*'
				);
			}
		};

		const ResizeObserverClass = window.ResizeObserver;
		if ( ! ResizeObserverClass ) {
			return () => document.body.classList.remove( 'is-embed' );
		}

		const ro = new ResizeObserverClass( () => {
			sendHeight();
		} );
		ro.observe( container );

		sendHeight();

		return () => {
			ro.disconnect();
			document.body.classList.remove( 'is-embed' );
		};
	}, [ category, patternName ] );

	if ( ! Pattern ) {
		return <div id="preview-root">Pattern not found</div>;
	}

	const isShell = category?.toLowerCase() === 'shells';

	return (
		<div
			ref={ containerRef }
			id="preview-root"
			className="wpui-pattern-embed"
			style={ isShell ? { padding: 0 } : { padding: '4px 2px' } }
		>
			<Pattern />
		</div>
	);
}

const root = ReactDom.createRoot( document.getElementById( 'root' ) );

const queryParams = new URLSearchParams( window.location.search );
const mode = queryParams.get( 'mode' );

if ( mode === 'embed' ) {
	const category = queryParams.get( 'category' );
	const patternName = queryParams.get( 'pattern' );

	root.render(
		<EmbedRunner category={ category } patternName={ patternName } />
	);
} else {
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</React.StrictMode>
	);
}
