/**
 * External dependencies.
 */
import { useState, useRef } from 'react';

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
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import { PatternCode } from '../index';
import './style.scss';

/**
 * Render Pattern View
 */
function PatternView({ title, name, category, path, component: Pattern }) {
    const patternstyle = category === 'Shells' ? { padding: '0px' } : {};
    const [view, setView] = useState('preview');
    const isMobile = useViewportMatch('mobile');
    const iframeRef = useRef(null);
    const [height, setHeight] = useState(100);

    let resizePing;
    const updateHeight = () => {
        if (iframeRef.current) {
            const contentHeight = iframeRef.current.contentWindow.document.body.scrollHeight;
            setHeight(contentHeight + 3); // additional px to prevent scrolling and content getting cut
        } else {
            clearInterval(resizePing);
        }
    };

    const desktop = (
        <ResizableBox
            style={view === 'code' ? { display: 'none' } : { marginRight: 'auto', marginLeft: 'auto' }}
            maxWidth={1350}
            minWidth={360}
            defaultSize={{width:1350}}
            enable={{ right: true, left: true }}
            onResizeStop={() => {
                updateHeight();
                clearInterval(resizePing);
            }}
            onResizeStart={() => resizePing = setInterval(() => {
                updateHeight();
            }, 10)}
        >
            <Card className="wpui-variation-card" style={{ ...patternstyle }}>
                <iframe
                    loading='lazy'
                    seamless={true}
                    ref={iframeRef}
                    src={`/?mode=embed&category=${category}&pattern=${name}`}
                    style={{
                        display: 'block',
                        border: 'none',
                        boxSizing: 'border-box',
                        width: '100%',
                        height: `${height}px`
                    }}
                    onLoad={() => updateHeight()}
                />
            </Card>
        </ResizableBox>
    );

    const mobile = (
        <Card className="wpui-variation-card" style={view === 'code' ? { display: 'none' } : {}}>
            <Pattern />
        </Card>
    );

    const ActiveButton = (value) => ({
        color: view === value ? 'black' : '',
        boxShadow: view === value ? 'rgb(207, 207, 207) 0px 0px 3px' : '',
    });

    return (
        <>
            <VStack spacing={4}>
                <HStack>
                    <Heading className='head' level={4} weight={500}>{title}</Heading>
                    <HStack expanded={false} justify='right' alignment='center'>
                        <ToggleGroupControl
                            className="wpui-view-toggle"
                            hideLabelFromVision
                            __nextHasNoMarginBottom
                            isBlock
                            value={view}
                            onChange={(value) => setView(value)}
                        >
                            <ToggleGroupControlOption
                                className='wpui-toogle-button'
                                style={ActiveButton('preview')}
                                value="preview"
                                label="Preview"
                            />
                            <ToggleGroupControlOption
                                className='wpui-toogle-button'
                                style={ActiveButton('code')}
                                value="code"
                                label="Code"
                            />
                        </ToggleGroupControl>
                    </HStack>
                </HStack>
                {isMobile ? desktop : mobile}
                <PatternCode path={path} style={view === 'preview' ? { display: 'none' } : {}} />
            </VStack>
        </>
    );
}
export default PatternView;
