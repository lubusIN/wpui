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
    code,
    seen
} from "@wordpress/icons";
import {
    Card,
    ResizableBox,
    __experimentalHeading as Heading,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import { PatternCode } from '../index';
import './style.scss'

/**
 * Render Pattern View
*/
function PatternView({ title, name, category, path, component: Pattern }) {
    const [view, setView] = useState('preview');
    const isMobile = useViewportMatch('mobile');
    const iframeRef = useRef(null);
    const [height, setHeight] = useState(100);

    const updateHeight = () => setHeight(iframeRef.current.contentWindow.document.body.scrollHeight);
    let resizePing

    const desktop = (
        <ResizableBox
            maxWidth={1350}
            minWidth={360}
            enable={{ right: true }}
            onResizeStop={() => {
                updateHeight();
                clearInterval(resizePing)
            }}
            onResizeStart={() => resizePing = setInterval(() => {
                updateHeight();
            }, 10)}
        >
            <Card className="wpui-variation-card">
                <iframe
                    ref={iframeRef}
                    height={height + 'px'}
                    src={`/?mode=embed&category=${category}&pattern=${name}`}
                    style={{
                        border: 'none',
                        width: '100%',
                        padding: '0 1px'
                    }}
                    onLoad={() => updateHeight()}
                />
            </Card>
        </ResizableBox >
    );

    const mobile = (
        <Card className="wpui-variation-card">
            <Pattern />
        </Card>
    );

    return (
        <>
            <VStack spacing={4}>
                <HStack>
                    <Heading level={4} weight={500}>{title}</Heading>
                    <HStack expanded={false} justify='right' alignment='center'>
                        <ToggleGroupControl
                            className="wpui-view-toggle"
                            hideLabelFromVision
                            __nextHasNoMarginBottom
                            isBlock
                            value={view}
                            onChange={(value) => setView(value)}
                        >
                            <ToggleGroupControlOptionIcon icon={seen} value="preview" label="Preview" />
                            <ToggleGroupControlOptionIcon icon={code} value="code" label="Code" />
                        </ToggleGroupControl>
                    </HStack>
                </HStack>
                {
                    view === 'preview' && (isMobile ? desktop : mobile)
                }
                {view === 'code' && <PatternCode path={path} />}
            </VStack>
        </>
    );
}


export default PatternView;