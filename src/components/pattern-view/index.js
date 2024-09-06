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
    Button,
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
    const [width, setWidth] = useState(1350)

    let resizePing;
    const updateHeight = () => {
        if (iframeRef.current) {
            setHeight(iframeRef.current.contentWindow.document.body.scrollHeight);
        } else {
            clearInterval(resizePing);
        }
    };

    const handleClick1 = () => {
        setWidth(360)
        console.log('Button 1 Clicked ' + 360)
    }

    const handleClick2 = () => {
        setWidth(800)
        console.log('Button 1 Clicked ' + 800)
    }

    const desktop = (
        <ResizableBox
            style={view === 'code' ? { display: 'none' } : { marginRight: 'auto', marginLeft: 'auto' }}
            maxWidth={1350}
            minWidth={360}
            defaultSize={{ width: width }}
            enable={{ right: true, left: true }}
            onResizeStop={() => {
                updateHeight();
                clearInterval(resizePing);
            }}
            onResizeStart={() => resizePing = setInterval(() => {
                updateHeight();
            }, 10)}
        >
            <Card className="wpui-variation-card" style={patternstyle}>
                <iframe
                    loading='lazy'
                    seamless={true}
                    ref={iframeRef}
                    height={height + 3 + 'px'}
                    src={`/?mode=embed&category=${category}&pattern=${name}`}
                    style={{
                        border: 'none',
                        boxSizing: 'border-box',
                        width: "100%",
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
                    <Button onClick={handleClick1}>Button 1 360PX</Button>
                    <Button onClick={handleClick2}>Button 2 800PX</Button>
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
