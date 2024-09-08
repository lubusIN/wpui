/**
 * External dependencies.
 */
import { useState, useRef, useEffect } from 'react';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
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
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import { PatternCode } from '../index';
import './style.scss';
import { tablet, desktop, mobile } from '@wordpress/icons';

/**
 * Renders the Pattern View component.
 */
function PatternView({ title, name, category, path, component: Pattern }) {
    const patternStyle = category === 'Shells' ? { padding: '0px' } : {};
    const [view, setView] = useState('preview');
    const [responsive, setResponsive] = useState('desktop');
    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(1200);

    const iframeRef = useRef(null);
    const resizePing = useRef(null); // Persistent reference for resizing
    const isDesktop = useViewportMatch('large');

    /**
     * Update the height of the iframe to match its content.
     */
    const updateHeight = () => {
        const iframeBody = iframeRef.current?.contentWindow?.document.body;
        if (iframeBody) {
            setHeight(iframeBody.scrollHeight);
        }
    };

    /**
     * Set up a MutationObserver to watch for changes in the iframe content.
     */
    const observeIframeContent = () => {
        const iframeDocument = iframeRef.current.contentWindow.document;
        const observer = new MutationObserver(() => updateHeight());
        observer.observe(iframeDocument.body, { childList: true, subtree: true, attributes: true });
        return observer;
    };

    /**
     * Handle responsive changes and update the width based on the selected device.
     */
    const handleResponsiveChange = (value) => {
        setResponsive(value);
        const widthMap = { mobile: 400, tablet: 800, desktop: 1200 };
        setWidth(widthMap[value]);
    };

    // Set up MutationObserver when iframe loads and clean up when unmounting.
    useEffect(() => {
        if (iframeRef.current) {
            const observer = observeIframeContent();
            updateHeight();
            return () => observer.disconnect();
        }
    }, [responsive]);

    // Adjust responsive state based on width changes.
    useEffect(() => {
        if (width <= 400) {
            setResponsive('mobile');
        } else if (width <= 800) {
            setResponsive('tablet');
        } else {
            setResponsive('desktop');
        }
    }, [width]);

    // Cleanup resize ping interval on unmount.
    useEffect(() => {
        return () => clearInterval(resizePing.current);
    }, []);

    /**
     * Render the resizable component (only for desktop view).
     */
    const resizableComponent = (
        <ResizableBox
            style={view === 'code' ? { display: 'none' } : { margin: '0 auto' }}
            maxWidth={1200}
            minWidth={400}
            size={{ width }}
            enable={{ right: true, left: true }}
            onResizeStop={(event, direction, elt, delta) => {
                setWidth((prevWidth) => prevWidth + delta.width);
                updateHeight();
                clearInterval(resizePing.current);
            }}
            onResizeStart={() => {
                resizePing.current = setInterval(updateHeight, 10);
            }}
        >
            <Card className="wpui-variation-card" style={patternStyle}>
                <iframe
                    loading="lazy"
                    seamless
                    ref={iframeRef}
                    height={`${height + 4}px`}
                    src={`/?mode=embed&category=${category}&pattern=${name}`}
                    onLoad={updateHeight}
                />
            </Card>
        </ResizableBox>
    );

    return (
        <VStack spacing={4}>
            <HStack>
                <Heading className="head" level={4} weight={500}>
                    {title}
                </Heading>
                {isDesktop && (
                    <ToggleGroupControl
                        label="Responsive"
                        hideLabelFromVision
                        value={responsive}
                        onChange={handleResponsiveChange}
                        style={{ gap: '10px' }}
                    >
                        <ToggleGroupControlOptionIcon value="desktop" label="Desktop" icon={desktop} />
                        <ToggleGroupControlOptionIcon value="tablet" label="Tablet" icon={tablet} />
                        <ToggleGroupControlOptionIcon value="mobile" label="Mobile" icon={mobile} />
                    </ToggleGroupControl>
                )}
                <ToggleGroupControl
                    className="wpui-view-toggle"
                    hideLabelFromVision
                    value={view}
                    onChange={(value) => setView(value)}
                >
                    {['Preview', 'Code'].map((value, index) => (
                        <ToggleGroupControlOption
                            className={`wpui-toggle-button ${view === value.toLowerCase() ? 'active' : ''}`}
                            key={index}
                            value={value.toLowerCase()}
                            label={value}
                        />
                    ))}
                </ToggleGroupControl>
            </HStack>

            {isDesktop ? (
                resizableComponent
            ) : (
                <Card className="wpui-variation-card" style={view === 'code' ? { display: 'none' } : {}}>
                    <Pattern />
                </Card>
            )}

            <PatternCode path={path} style={view === 'preview' ? { display: 'none' } : {}} />
        </VStack>
    );
}

export default PatternView;
