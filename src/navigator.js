/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
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
import components from './data';
import ComponentsMenu from "./menu";
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * Render Navigator
 */
function Navigator() {

    const [hasCopied, setHasCopied] = useState(false);
    const [view, setView] = useState('preview');
    const [activePath, setActivePath] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (activePath) {
    const fetchFileContent = async () => {
        try {
            setView('preview');
            const response = await fetch(`src/components${activePath}.js`); // Adjust the path accordingly
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
                <ComponentsMenu setActivePath={setActivePath} />
            </NavigatorScreen>

            {
                components.map(({ title, path, component: Component }, index) => (

                    <NavigatorScreen
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
                            <ResizableBox
                                enable={{
                                    bottom: false,
                                    bottomLeft: false,
                                    bottomRight: false,
                                    left: false,
                                    right: view == 'preview',
                                    top: false,
                                    topLeft: false,
                                    topRight: false
                                }}
                                maxWidth={'100%'}
                                minWidth={'380px'}
                                className="resize_cont"
                            >
                                <Card size="large" style={{ borderRadius: '4px' }}>
                                    {view == 'preview' &&
                                        <CardBody>
                                            <Component />
                                        </CardBody>
                                    }
                                    {view == 'code' &&
                                        <SyntaxHighlighter language="javascript" style={coldarkDark} customStyle={{ borderRadius: '8px' }}>
                                            {content}
                                        </SyntaxHighlighter>
                                    }
                                </Card>
                            </ResizableBox>
                        </VStack>
                    </NavigatorScreen>
                ))
            }
        </NavigatorProvider>
    );
};

export default Navigator;
