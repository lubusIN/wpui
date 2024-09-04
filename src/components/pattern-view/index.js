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
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
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
    const patternstyle = category === 'Shells' ? { padding: '0px' } : {}
    const [view, setView] = useState('preview');
    const isMobile = useViewportMatch('mobile');
    const iframeRef = useRef(null);
    const [height, setHeight] = useState(100);

    let resizePing;
    const updateHeight = () => {
        if (iframeRef.current) {
            setHeight(iframeRef.current.contentWindow.document.body.scrollHeight)
        } else {
            clearInterval(resizePing)
        }
    };

    const desktop = (
        <ResizableBox
            style={view === 'code' ? { display: 'none' } : {}}
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
            <Card className="wpui-variation-card" style={{ ...patternstyle }}>
                <iframe
                    loading='lazy'
                    seamless={true}
                    ref={iframeRef}
                    height={height + 3 + 'px'} // + 3 to fix pixels cutting off
                    src={`/?mode=embed&category=${category}&pattern=${name}`}
                    style={{
                        border: 'none',
                        boxSizing: 'border-box',
                        width: '100%',
                    }}
                    onLoad={() => updateHeight()}
                />
            </Card>
        </ResizableBox >
    );

    const mobile = (
        <Card className="wpui-variation-card" style={view === 'code' ? { display: 'none' } : {}}>
            <Pattern />
        </Card>
    );

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
                            <ToggleGroupControlOption value="preview" label="Preview" />
                            <ToggleGroupControlOption value="code" label="Code" />
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