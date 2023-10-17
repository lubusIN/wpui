/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useContext, useEffect } from '@wordpress/element';
import {
    ResizableBox,
    Card,
    CardBody,
    ClipboardButton,
    Popover,
    __experimentalHeading as Heading,
    __experimentalNavigatorScreen as NavigatorScreen,
    __experimentalNavigatorProvider as NavigatorProvider,
    __experimentalNavigatorBackButton as NavigatorBackButton,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalText as Text,
} from "@wordpress/components";
import { chevronRight, copy } from "@wordpress/icons";

/**
 * Internal dependencies.
 */
import { components, WpuiContext } from './data';
import ComponentsMenu from "./menu";
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * Render Navigator
 */
function Navigator() {

    const {
        width,
        setWidth,
        activePath,
        setActivePath,
        hasCopied,
        setHasCopied,
        view,
        setView,
        content,
        setContent
    } = useContext(WpuiContext);

    useEffect(() => {
        if (activePath) {
            const fetchFileContent = async () => {
                try {
                    setView('preview');
                    const response = await fetch(`/src/components${activePath}.js`); // Adjust the path accordingly
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
    }, [activePath]);


    return (
        <NavigatorProvider className="wpui_navigator" initialPath="/">
            <NavigatorScreen path="/" style={{ overflowX: 'visible' }}>
                <ComponentsMenu />
            </NavigatorScreen>

            {
                components.map(({ title, path, component: Component }, index) => (

                    <NavigatorScreen
                        className='wpui_com_page'
                        path={path}
                        key={index}
                        style={{ overflowX: 'visible' }}
                    >
                        <VStack spacing={4}>
                            <HStack alignment='left' spacing={0}>
                                <NavigatorBackButton
                                    icon={chevronRight}
                                    iconPosition='right'
                                    text='Home'
                                    style={{ boxShadow: 'none' }}>
                                </NavigatorBackButton>
                                <Text>{title}</Text>
                            </HStack>
                            <HStack>
                                <Heading weight={500}>{title}</Heading>
                                <HStack expanded={false} justify='right' alignment='center'>
                                    <ToggleGroupControl
                                        __nextHasNoMarginBottom
                                        isBlock
                                        value={view}
                                        onChange={(value) => setView(value)}
                                    >
                                        <ToggleGroupControlOption value="preview" label="Preview" />
                                        <ToggleGroupControlOption value="code" label="Code" />
                                    </ToggleGroupControl>
                                    <ClipboardButton
                                        className='wpui_copy'
                                        icon={copy}
                                        text={content}
                                        onCopy={() => setHasCopied(true)}
                                        onFinishCopy={() => setHasCopied(false)}
                                    >
                                        {hasCopied && <Popover className='copied_pop' position='top right'>Copied</Popover>}
                                    </ClipboardButton>
                                </HStack>
                            </HStack>
                            {view == 'preview' &&
                                <ResizableBox
                                    className="resize_cont"
                                    enable={{ right: true }}
                                    __experimentalShowTooltip
                                    onResize={(event, direction, elt, delta) => {
                                        setWidth(elt.offsetWidth);
                                    }}
                                    maxWidth={'100%'}
                                    minWidth={'380px'}
                                >
                                    <Card size="large" style={{ borderRadius: '4px' }}>
                                        <CardBody>
                                            <Component />
                                        </CardBody>
                                    </Card>
                                </ResizableBox>
                            }
                            {view == 'code' &&
                                <SyntaxHighlighter language="javascript" style={coldarkDark} customStyle={{ borderRadius: '8px' }}>
                                    {content}
                                </SyntaxHighlighter>
                            }
                        </VStack>
                    </NavigatorScreen>
                ))
            }
        </NavigatorProvider >
    );
};

export default Navigator;
