/**
 * External dependencies.
 */
import React, { useState, useEffect } from 'react';

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
    PanelBody,
    PanelRow,
    TabPanel,
    __experimentalHStack as HStack,
    Animate
} from "@wordpress/components";
import { moreVertical, drawerRight } from "@wordpress/icons";
import { useViewportMatch } from '@wordpress/compose';

/**
 * Render Shell 3
 */
function Shell3() {
    const isMobile = useViewportMatch('mobile')
    const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

    const tabsContent = {
        tab1: (
            <>
                <PanelBody title="First section">
                    <PanelRow>
                        <div
                            style={{
                                background: '#ddd',
                                height: 100,
                                width: '100%'
                            }}
                        />
                    </PanelRow>
                </PanelBody>
                <PanelBody
                    title="Second section"
                >
                    <PanelRow>
                        <div
                            style={{
                                background: '#ddd',
                                height: 100,
                                width: '100%'
                            }}
                        />
                    </PanelRow>
                </PanelBody>
            </>
        ),
        tab2: ''
    };

    useEffect(() => setSidebarOpen(isMobile), [isMobile]);

    return (
        <Card style={{ minHeight: '580px' }}>
            <CardHeader size='small'>
                <HStack>
                    <img width='100px' style={{ minWidth: 'auto' }} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/logo.png"></img>
                    <HStack alignment="right">
                        <Button style={{ minWidth: 'auto' }} variant="primary">Save</Button>
                        <Button
                            icon={drawerRight}
                            isPressed={sidebarOpen}
                            onClick={() => setSidebarOpen(!sidebarOpen)} />
                        <DropdownMenu icon={moreVertical}>
                            {() => (
                                <MenuGroup>
                                    <MenuItem>Help</MenuItem>
                                    <MenuItem>About</MenuItem>
                                    <MenuItem>Settings</MenuItem>
                                </MenuGroup>
                            )}
                        </DropdownMenu>
                    </HStack>
                </HStack>
            </CardHeader>
            <HStack spacing={0}>
                <>
                    <CardBody style={{
                        padding: '0',
                        height: '100%',
                        width: '100%',
                        display: !isMobile ? 'none' : ''
                    }}>
                        {/* Display Your Content Here */}
                    </CardBody>

                    {sidebarOpen && (
                        <Animate type="slide-in" options={{ origin: 'left' }}>
                            {({ className }) => (
                                <div className={className} style={{
                                    borderLeft: !isMobile ? 'none' : '1px solid #dfdfdf',
                                    minHeight: '500px',
                                    width: !isMobile ? '100vw' : '320px',
                                    overflow: 'hidden',
                                    padding: '0px'
                                }}>
                                    <TabPanel
                                        tabs={[
                                            { name: 'tab1', title: 'Tab 1' },
                                            { name: 'tab2', title: 'Tab 2' },
                                        ]}
                                    >
                                        {({ name }) => (
                                            <div style={{ height: '100%', width: 'auto' }}>
                                                {tabsContent[name]}
                                            </div>
                                        )}
                                    </TabPanel>
                                </div>
                            )}
                        </Animate>
                    )}
                </>
            </HStack>
        </Card >
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