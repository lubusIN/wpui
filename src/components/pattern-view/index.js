/**
 * WordPress dependencies.
 */
import { useState, useRef, useEffect, useCallback } from '@wordpress/element';
import { useViewportMatch } from '@wordpress/compose';
import {
	Card,
	ResizableBox,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	__experimentalHeading as Heading,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	__experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
} from '@wordpress/components';
import { tablet, desktop, mobile } from '@wordpress/icons';

/**
 * Internal dependencies.
 */
import { PatternCode } from '../index';
import './style.scss';

/**
 * Renders the Pattern View component.
 */
function PatternView( { title, name, category, path } ) {
	const patternStyle = category === 'Shells' ? { padding: '0px' } : {};
	const [ view, setView ] = useState( 'preview' );
	const [ responsive, setResponsive ] = useState( 'desktop' );
	const [ height, setHeight ] = useState( 150 );
	const [ width, setWidth ] = useState( 1200 );
	const [ isResizing, setIsResizing ] = useState( false );
	const isDesktop = useViewportMatch( 'large' );

	const iframeRef = useRef( null );

	// Listen for accurate height messages from the embed iframe runner
	useEffect( () => {
		const handleMessage = ( event ) => {
			if (
				event.data?.type === 'wpui-pattern-resize' &&
				event.data?.pattern?.toLowerCase() === name.toLowerCase()
			) {
				const newHeight = event.data.height;
				if ( newHeight > 20 ) {
					setHeight( newHeight );
				}
			}
		};

		window.addEventListener( 'message', handleMessage );
		return () => window.removeEventListener( 'message', handleMessage );
	}, [ name ] );

	// Immediate measurement on iframe load as fallback
	const handleIframeLoad = useCallback( () => {
		try {
			const doc = iframeRef.current?.contentDocument;
			if ( doc ) {
				const root = doc.getElementById( 'preview-root' ) || doc.body;
				const h = root.getBoundingClientRect().height;
				if ( h > 20 ) {
					setHeight( Math.ceil( h ) );
				}
			}
		} catch {
			// Ignore any cross-origin errors
		}
	}, [] );

	/**
	 * Handle responsive changes and update the width based on the selected device.
	 */
	const handleResponsiveChange = ( value ) => {
		setResponsive( value );
		const widthMap = { mobile: 400, tablet: 800, desktop: 1200 };
		setWidth( widthMap[ value ] );
	};

	/**
	 * Handle resizing via side handles.
	 */
	const handleResize = ( event, direction, elt, delta ) => {
		const newWidth = width + delta.width;
		setWidth( newWidth );

		if ( newWidth <= 400 ) {
			setResponsive( 'mobile' );
		} else if ( newWidth <= 800 ) {
			setResponsive( 'tablet' );
		} else {
			setResponsive( 'desktop' );
		}
	};

	const embedUrl = `/?mode=embed&category=${ category }&pattern=${ name }`;

	/**
	 * Render the resizable component (for desktop view).
	 */
	const resizableComponent = (
		<ResizableBox
			style={
				view === 'code' ? { display: 'none' } : { margin: '0 auto' }
			}
			maxWidth={ 1200 }
			minWidth={ 400 }
			size={ { width } }
			enable={ { right: true, left: true } }
			onResize={ handleResize }
			onResizeStart={ () => setIsResizing( true ) }
			onResizeStop={ () => setIsResizing( false ) }
		>
			<Card className="wpui-variation-card" style={ patternStyle }>
				<iframe
					ref={ iframeRef }
					className="wpui-preview-iframe"
					title={ `${ title } preview` }
					data-category={ category }
					data-pattern={ name }
					src={ embedUrl }
					onLoad={ handleIframeLoad }
					style={ {
						width: '100%',
						height: `${ height }px`,
						border: 'none',
						display: 'block',
						overflow: 'hidden',
						pointerEvents: isResizing ? 'none' : 'auto',
					} }
				/>
			</Card>
		</ResizableBox>
	);

	return (
		<VStack spacing={ 4 } style={ { position: 'relative' } }>
			<HStack>
				<HStack>
					<Heading className="head" level={ 4 } weight={ 500 }>
						{ title }
					</Heading>
				</HStack>
				{ isDesktop && (
					<HStack justify="center">
						<ToggleGroupControl
							label="Responsive"
							hideLabelFromVision
							value={ responsive }
							onChange={ handleResponsiveChange }
							style={ { gap: '10px' } }
						>
							<ToggleGroupControlOptionIcon
								value="desktop"
								label="Desktop"
								icon={ desktop }
							/>
							<ToggleGroupControlOptionIcon
								value="tablet"
								label="Tablet"
								icon={ tablet }
							/>
							<ToggleGroupControlOptionIcon
								value="mobile"
								label="Mobile"
								icon={ mobile }
							/>
						</ToggleGroupControl>
					</HStack>
				) }
				<HStack justify="right">
					<ToggleGroupControl
						className="wpui-view-toggle"
						label="View"
						hideLabelFromVision
						value={ view }
						onChange={ ( value ) => setView( value ) }
					>
						<ToggleGroupControlOption
							value="preview"
							label="Preview"
						/>
						<ToggleGroupControlOption value="code" label="Code" />
					</ToggleGroupControl>
				</HStack>
			</HStack>

			{ isDesktop ? (
				resizableComponent
			) : (
				<Card
					className="wpui-variation-card"
					style={
						view === 'code' ? { display: 'none' } : patternStyle
					}
				>
					<iframe
						ref={ iframeRef }
						className="wpui-preview-iframe"
						title={ `${ title } preview` }
						data-category={ category }
						data-pattern={ name }
						src={ embedUrl }
						onLoad={ handleIframeLoad }
						style={ {
							width: '100%',
							height: `${ height }px`,
							border: 'none',
							display: 'block',
							overflow: 'hidden',
						} }
					/>
				</Card>
			) }

			<PatternCode
				path={ path }
				style={ view === 'preview' ? { display: 'none' } : {} }
			/>
		</VStack>
	);
}

export default PatternView;
