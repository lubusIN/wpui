/**
 * External dependencies.
 */
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Routes, Route, Link } from "react-router-dom";

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useContext, useEffect, useState } from '@wordpress/element';
import { useCopyToClipboard } from '@wordpress/compose';
import {
    Card,
    Popover,
    Button,
    __experimentalHeading as Heading,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalText as Text,
} from "@wordpress/components";
import { check, chevronRight, code, copy, seen } from "@wordpress/icons";

/**
 * Internal dependencies.
 */
import { components, WpuiContext } from '../data';
import{Home} from '../pages'
import {ContentLoader} from '../components';

/**
 * Render Navigator
 */
function Patterns() {

    const {
        setWidth,
        activePath,
        setActivePath,
        hasCopied,
        setHasCopied,
        view,
        setView,
        selectedIndex,
        setIndex
    } = useContext(WpuiContext);
    

    const [isLoading, setIsLoading] = useState(false);
    const [content, setContent] = useState('');


    useEffect(() => {
        if (activePath) {
            setIsLoading(true);
            const fetchFileContent = async () => {
                try {
                    const response = await fetch(`/src/patterns${activePath}.js`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch file');
                    }

                    const content = await response.text();
                    setContent(content);
                } catch (error) {
                    console.error('Error loading file:', error);
                } finally{
                    setIsLoading(false);
                }
            };
            fetchFileContent();
        }
    }, [activePath, setContent]);


    const CopyButton = ({ index }) => {

        const handleCopyClick = () => {
            setIndex(index)
            setHasCopied(true);
            setTimeout(() => {
                setHasCopied(false);
            }, 1000);
        };

        return (
            <Button
                className='wpui_copy'
                icon={hasCopied ? check : copy}
                onClick={handleCopyClick}
                ref={useCopyToClipboard(content)}
            >
                {selectedIndex == index && hasCopied ? <Popover className='copied_pop' position='middle right'>Copied</Popover> : ''}
            </Button>
        );
    }


    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} style={{ overflowX: 'visible' }} />
                {
                    components.map(({ title, path, variations }, index) => (

                        <Route path={path} element={
                            <VStack className='wpui_com_page' spacing={8}>
                                <HStack className="wpui_back_button" alignment='left' spacing={0}>
                                    <Link to="/" style={{ boxShadow: 'none', textDecoration: 'none' }}>
                                        <div>
                                            <span className="home" style={{ display: "flex" }}>Home <div style={{ width: '20px', height: '20px' }}>{chevronRight}</div> </span>
                                        </div>
                                    </Link>
                                    <Text>{title}</Text>
                                </HStack>
                                <VStack spacing={24}>
                                    {variations.map(({ title, path, component: Component }, index) => (
                                        <VStack key={index} spacing={4}>
                                            <HStack>
                                                <Heading level={4} weight={500}>{title}</Heading>
                                                <HStack expanded={false} justify='right' alignment='center'>
                                                    <ToggleGroupControl
                                                        className="wpui_view_toggle"
                                                        hideLabelFromVision
                                                        __nextHasNoMarginBottom
                                                        isBlock
                                                        value={selectedIndex == index ? view : 'preview'}
                                                        onChange={(value) => {
                                                            setView(value);
                                                            setIndex(index);
                                                            setActivePath(path);
                                                        }}
                                                    >
                                                        <ToggleGroupControlOptionIcon icon={seen} value="preview" label="Preview" />
                                                        <ToggleGroupControlOptionIcon icon={code} value="code" label="Code" />
                                                    </ToggleGroupControl>
                                                </HStack>
                                            </HStack>
                                            {
                                                selectedIndex !== index || view !== 'code' ? (
                                                    <Card className="wpui_variation_card">
                                                        <Component />
                                                    </Card>
                                                ) : (
                                                    <VStack style={{ position: 'relative' }}>
                                                        {isLoading ? (
                                                            <div ><ContentLoader /></div>
                                                        ) : (
                                                            <SyntaxHighlighter language="javascript" style={coldarkDark} customStyle={{ borderRadius: '8px' }}>
                                                                {content}
                                                            </SyntaxHighlighter>
                                                        )}
                                                        <CopyButton index={index}></CopyButton>
                                                    </VStack>
                                                )
                                            }
                                        </VStack>
                                    ))}
                                </VStack>
                            </VStack>}>
                        </Route >
                    ))
                }
            </Routes >
        </>
    );
};

export default Patterns;