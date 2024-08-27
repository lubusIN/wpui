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
    
    const buttonData = [
        { icon: home, label: 'Dashboard' },
        { icon: cog, label: 'Settings' },
        { icon: plugins, label: 'Addons' },
        { icon: key, label: 'License' },
        { icon: external, label: 'Support' },
        { icon: trendingUp, label: 'Go Pro', variant: 'primary' }
    ];
    return (
        <>
            <Card>
                <CardHeader>
                    <HStack>
                        <img width='100px' style={{ minWidth: 'auto' }} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/logo.png"></img>
                        {isMobile ? (
                            <Button icon={showButtons ? close : menu} onClick={()=> setShowButtons(prev => !prev)}></Button>
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
                <ZStack isReversed style={{ width: '100%' }}>
                    {isMobile && showButtons && (
                        <VStack style={{ padding: '12px', backgroundColor: 'white' }} expanded={false}>
                            {buttonData.map((btn, index) => (
                                <Button
                                    key={index}
                                    icon={btn.icon}
                                    variant={btn.variant}
                                    style={btn.label === 'Go Pro' ? {  justifyContent: 'center' } : {}}
                                >
                                    {btn.label}
                                </Button>
                            ))}
                        </VStack>
                    )}
                    <CardBody size="medium" style={{ backgroundColor: '#F0F0F1' }}>
                        <Heading level={2}>Dashboard</Heading>
                        <Card style={{ backgroundColor: '#F0F0F1', height: '300px', borderRadius: '10px' }}>
                            {/* Display Your Content Here */}
                        </Card>
                    </CardBody>
                </ZStack>
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
Shell1.meta = {
    title: 'Shell 1',
    name: 'Shell1',
    category: 'Shells',
    path: '/Shells/shell1',
};
// @meta-end

export default Shell1;
