/**
 * WordPress dependencies.
 */
import {
    Card,
    Button,
    CardBody,
    Flex,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalZStack as ZStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { home, cog, plugins, key, external, trendingUp, close, menu } from "@wordpress/icons";
import { useViewportMatch } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import React, { useState } from 'react';

/**
 * Render Shell 2
 */
function Shell2() {

    const isDesktop = useViewportMatch('large');
    const isMobile = useViewportMatch('mobile');
    const [activeButton, setActiveButton] = useState('dashboard');
    const [showButtons, setShowButtons] = useState(false);
    const icon = {
        dashboard: home,
        settings: cog,
        addons: plugins,
        license: key,
        support: external
    };

    const handleButtonClick = (buttonKey) => {
        setActiveButton(buttonKey);
    };

    const MenuList = () => (
        <VStack style={{ backgroundColor: '#1c1e24', padding: '5px' }}>
            {['dashboard', 'settings', 'addons', 'license', 'support'].map(key => (
                <Button
                    key={key}
                    style={{ color: "white", boxShadow: 'none' }}
                    variant={activeButton === key ? "primary" : "secondary"}
                    icon={icon[key]}
                    onClick={() => handleButtonClick(key)}
                >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                </Button>
            ))}
        </VStack>
    );

    return (
        <>
            <Card style={{ backgroundColor: "#1c1e24", padding: "5px", borderRadius: '5px' }}>
                <Flex expanded={false} gap={1} align='top' direction={['column', 'row']}>
                    <CardBody style={{ width: isDesktop ? '25%' : '100%', padding: '0px' }}>
                        <VStack spacing={15} style={{ marginTop: '15px' }}>
                            <HStack style={{ marginLeft:'8px', marginBottom: isDesktop ? '':'10px' }}>
                                <img width='120px' style={{ minWidth: 'auto' }} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/Logo(2).png"></img>
                                {!isMobile && (
                                    <Button
                                        icon={showButtons ? close : menu}
                                        onClick={() => setShowButtons(prevState => !prevState)}
                                        style={{ marginRight: '8px', color: 'white' }}
                                    >
                                    </Button>
                                )}
                            </HStack>
                            {
                                isMobile &&
                                <MenuList activeButton={activeButton} handleButtonClick={handleButtonClick} icon={icon} />
                            }
                        </VStack>
                    </CardBody>
                    <ZStack isReversed style={{ width: '100%' }}>
                        {
                            !isMobile && showButtons &&
                            <MenuList activeButton={activeButton} handleButtonClick={handleButtonClick} icon={icon} />
                        }
                        <CardBody size="large" style={{ padding: '0px', height: isDesktop ? '720px' : '500px', width: "100%", backgroundColor: 'white', borderRadius: '5px' }}>
                            <HStack expanded={false} style={{ borderBottom: '1px solid #D8D8D8', padding: '15px 30px' }}>
                                <Heading>Dashboard</Heading>
                                <Button variant="primary" icon={trendingUp}>Go Pro</Button>
                            </HStack>
                            {/* Display your Content Here */}
                        </CardBody>
                    </ZStack>
                </Flex>
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
}

// @meta-start
Shell2.meta = {
    title: 'Shell 2',
    name: 'Shell2',
    category: 'Shells',
    path: '/Shells/shell2',
};
// @meta-end

export default Shell2;