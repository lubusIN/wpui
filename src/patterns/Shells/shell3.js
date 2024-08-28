/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    DropdownMenu,
    MenuGroup,
    MenuItem,
    CardHeader,
    CardBody,
    TextControl,
    TextareaControl,
    SelectControl,
    ToggleControl,
    CheckboxControl,
    TabPanel,
    __experimentalHStack as HStack,
    __experimentalZStack as ZStack,
    __experimentalNumberControl as NumberControl,
    Animate
} from "@wordpress/components";
import { moreVertical, drawerRight } from "@wordpress/icons";
import { useViewportMatch } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import React, { useState } from 'react';

/**
 * Render Shell 3
 */
function Shell3() {
    const isMobile = !useViewportMatch('mobile')
    const [block, setBlock] = useState(true);

    const tabsContent = {
        tab1: (
            <>
                <TextControl label="Text Control" value="Sample Text" />
                <TextareaControl label="Textarea Control" value="Sample Textarea" />
                <SelectControl
                    label="Select Control"
                    value="Select"
                    options={[
                        { label: 'Select 1', value: 'select1' },
                        { label: 'Select 2', value: 'select2' },
                        { label: 'Select 3', value: 'select3' }
                    ]}
                    onChange={() => { }}
                />
                <ToggleControl label="Toggle Control" checked={true} />
            </>
        ),
        tab2: (
            <>
                <CheckboxControl checked label="Enable" onChange={() => { }} />
                <NumberControl label="Scroll offset" />
                <NumberControl label="Animation Speed" />
            </>
        )
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <HStack>
                        <img width='100px' style={{ minWidth: 'auto' }} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/logo.png"></img>
                        <HStack alignment="right">
                            <Button variant="primary">Publish</Button>
                            <Button icon={drawerRight} onClick={() => setBlock(!block)} />
                            <DropdownMenu icon={moreVertical}>
                                {() => (
                                    <MenuGroup>
                                        <MenuItem>About us</MenuItem>
                                        <MenuItem>Contact us</MenuItem>
                                        <MenuItem>More Info</MenuItem>
                                    </MenuGroup>
                                )}
                            </DropdownMenu>
                        </HStack>
                    </HStack>
                </CardHeader>
                <HStack spacing={0}>
                    {isMobile ? (
                        <>
                            <ZStack style={{ width: '100%' }}>
                                <CardBody style={{
                                    height: '380px', padding: '0', height: '500px', width: '100%'
                                }}>
                                    {/* Display Your Content Here */}
                                </CardBody>
                                <CardBody
                                    style={{
                                        height: '720px',
                                        padding: '0px',
                                        width:'280px',
                                        padding:'10px'
                                    }}
                                >
                                    {block && (
                                        <Animate type="slide-in" options={{ origin: 'left' }}>
                                            {({ className }) => (
                                                <div className={className} style={{ height: '100%', width: '100%' }}>
                                                    <TabPanel
                                                        tabs={[
                                                            { name: 'tab1', title: 'Tab 1' },
                                                            { name: 'tab2', title: 'Tab 2' },
                                                        ]}
                                                    >
                                                        {({ name }) => (
                                                            <div style={{ height: '320px', width: '94vw', overflowY: 'hidden' }}>
                                                                {tabsContent[name]}
                                                            </div>
                                                        )}
                                                    </TabPanel>
                                                </div>
                                            )}
                                        </Animate>
                                    )}
                                </CardBody>
                            </ZStack>
                        </>
                    ) : (
                        <>
                            <CardBody style={{
                                height: '380px', padding: '0', height: '500px', width: '100%'
                            }}>
                                {/* Display Your Content Here */}
                            </CardBody>
                            <CardBody
                                style={{
                                    borderLeft: '1px solid #dfdfdf',
                                    height: '720px',
                                    width:'280px',
                                    overflow: 'hidden',
                                    padding: '0px'
                                }}
                            >
                                {block && (
                                    <Animate type="slide-in" options={{ origin: 'left' }}>
                                        {({ className }) => (
                                            <div className={className} style={{ height: '100%', width: 'auto' }}>
                                                <TabPanel
                                                    tabs={[
                                                        { name: 'tab1', title: 'Tab 1' },
                                                        { name: 'tab2', title: 'Tab 2' },
                                                    ]}
                                                >
                                                    {({ name }) => (
                                                        <div style={{ padding: '10px', height: '320px', width: 'auto', overflowY: 'hidden' }}>
                                                            {tabsContent[name]}
                                                        </div>
                                                    )}
                                                </TabPanel>
                                            </div>
                                        )}
                                    </Animate>
                                )}
                            </CardBody>
                        </>
                    )}

                </HStack>
            </Card>

            <style>
                {`
    .components-z-stack >div{
        width: 100%;
    }
`}
            </style>
        </>

    );
};

// @meta-start
Shell3.meta = {
    title: 'Shell 3',
    name: 'Shell3',
    category: 'Shells',
    path: '/Shells/shell3',
};
// @meta-end

export default Shell3;