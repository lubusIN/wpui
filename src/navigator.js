/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useContext, useEffect } from '@wordpress/element';
import {
    Card,
    Popover,
    Button,
    __experimentalHeading as Heading,
    __experimentalNavigatorScreen as NavigatorScreen,
    __experimentalNavigatorBackButton as NavigatorBackButton,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalText as Text,
} from "@wordpress/components";
import { chevronRight, code, copy, seen } from "@wordpress/icons";

/**
 * Internal dependencies.
 */
import { components, WpuiContext } from './data';
import ComponentsMenu from "./menu";

/**
 * External dependencies.
 */
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * Render Navigator
 */
function Navigator() {

    const {
        setWidth,
        activePath,
        setActivePath,
        hasCopied,
        setHasCopied,
        view,
        setView,
        content,
        setContent,
        selectedIndex,
        setIndex
    } = useContext(WpuiContext);

    useEffect(() => {
        if (activePath) {
            const fetchFileContent = async () => {
                try {
                    const response = await fetch(`/src/components${activePath}.js`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch file');
                    }

                    const content = await response.text();
                    setContent(content);
                } catch (error) {
                    console.error('Error loading file:', error);
                }
            };
            fetchFileContent();
        }
    }, [activePath, setContent]);

    const CopyButton = ({ path, index }) => {

        const handleCopyClick = () => {
            setIndex(index)
            setActivePath(path);
            setHasCopied(true);
            setTimeout(() => {
                setHasCopied(false);
            }, 2000);
        };
        navigator.clipboard.writeText(content);

        return (
            <Button
                className='wpui_copy'
                icon={copy}
                onClick={handleCopyClick}
            >
                {selectedIndex == index && hasCopied ? <Popover className='copied_pop' position='top right'>Copied</Popover> : ''}
            </Button>
        );
    }


    return (
        <>
            <NavigatorScreen path="/" style={{ overflowX: 'visible' }}>
                <ComponentsMenu />
            </NavigatorScreen>

            {
                components.map(({ title, path, variations }, index) => (

                    <NavigatorScreen
                        className='wpui_com_page'
                        path={path}
                        key={index}
                        style={{ overflowX: 'visible' }}
                    >
                        <VStack spacing={8}>
                            <HStack className="wpui_back_navig" alignment='left' spacing={0}>
                                <NavigatorBackButton
                                    icon={chevronRight}
                                    iconPosition='right'
                                    text='Home'
                                    style={{ boxShadow: 'none' }}
                                    onClick={() => setView('preview')}
                                >
                                </NavigatorBackButton>
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
                                                <CopyButton path={path} index={index}></CopyButton>
                                            </HStack>
                                        </HStack>

                                        {
                                            selectedIndex !== index || view !== 'code' ? (
                                                <Card className="wpui_variation_card">
                                                    <Component />
                                                </Card>
                                            ) : (
                                                <SyntaxHighlighter language="javascript" style={coldarkDark} customStyle={{ borderRadius: '8px' }}>
                                                    {content}
                                                </SyntaxHighlighter>
                                            )
                                        }

                                    </VStack>
                                ))}
                            </VStack>
                        </VStack>
                    </NavigatorScreen>
                ))
            }
        </>
    );
};

export default Navigator;
