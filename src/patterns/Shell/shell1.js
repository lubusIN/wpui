/**
 * WordPress dependencies.
 */
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalZStack as ZStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { home, cog, plugins, key, external, trendingUp, menu, close, Icon } from "@wordpress/icons";
import { useViewportMatch } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import React, { useState } from 'react';

/**
 * Render Shell 1
 */
function Shell1() {
    const isMobile = !useViewportMatch('mobile');
    const [showButtons, setShowButtons] = useState(false);
    const handleButtonClick = () => {
        setShowButtons(prev => !prev);
    };
    const buttonData = [
        { icon: home, label: 'Dashboard' },
        { icon: cog, label: 'Settings' },
        { icon: plugins, label: 'Addons' },
        { icon: key, label: 'License' },
        { icon: external, label: 'Support' },
        { icon: trendingUp, label: 'Go Pro', variant: 'primary' }
    ];
    return (
        <Card>
            <CardHeader>
                <HStack>
                    <HStack expanded={false} style={{ marginLeft: '5px' }}>
                        <img width='100px' style={{minWidth:'100px'}} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/logo.png"></img>
                    </HStack>
                    {isMobile ? (
                        <Button icon={showButtons ? close : menu} onClick={handleButtonClick}></Button>
                    ) : (
                        <>
                            <HStack expanded={false}>
                                {buttonData.slice(0, -1).map((btn, index) => (
                                    <Button key={index} >
                                        <Icon style={{ minWidth: '20px' }} icon={btn.icon} />
                                        {btn.label}
                                    </Button>
                                ))}
                            </HStack>
                            <Button variant="primary" icon={trendingUp}>Go Pro</Button>
                        </>
                    )}
                </HStack>
            </CardHeader>
            <ZStack isReversed>
                {isMobile && showButtons && (
                    <>
                        <VStack style={{ padding:'12px',backgroundColor: 'white', width:'94vw' }} expanded={false}>
                            {buttonData.map((btn, index) => (
                                <Button
                                    key={index}
                                    icon={btn.icon}
                                    variant={btn.variant}
                                    style={btn.label === 'Go Pro' ? { display: 'flex', justifyContent: 'center' } : {}}
                                >
                                    {btn.label}
                                </Button>
                            ))}
                        </VStack>
                    </>
                )}
                <CardBody style={{ backgroundColor: '#F0F0F1', width: '100vw' }}>
                    <Heading style={{ padding: '20px', marginLeft: '10px' }}>Dashboard</Heading>
                    <Card style={{ backgroundColor: '#F0F0F1', height: '300px', margin: '30px 30px', borderRadius: '10px' }}>
                        {/* Display Your Content Here */}
                    </Card>
                </CardBody>
            </ZStack>
        </Card>
    );
}

// @meta-start
Shell1.meta = {
    title: 'Shell 1',
    name: 'Shell1',
    category: 'Shell',
    path: '/Shell/shell1',
};
// @meta-end

export default Shell1;
