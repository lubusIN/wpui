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
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { home, cog, plugins, key, external, trendingUp, menu, close } from "@wordpress/icons";
import { useViewportMatch } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import React, { useState } from 'react';
const buttonData = [
    { icon: home, label: 'Dashboard' },
    { icon: cog, label: 'Settings' },
    { icon: plugins, label: 'Addons' },
    { icon: key, label: 'License' },
    { icon: external, label: 'Support' },
    { icon: trendingUp, label: 'Gro Pro', variant: 'primary' }
];

/**
 * Render Shell 1
 */
function Shell1() {
    const isMobile = !useViewportMatch('mobile');
    const [showButtons, setShowButtons] = useState(false);
    const [display, setDisplay] = useState('flex');
    const [icon, setIcon] = useState(menu);

    const handleButtonClick = () => {
        setIcon(prevIcon => (prevIcon === menu ? close : menu));
        setShowButtons(prevState => !prevState);
        setDisplay(prevDisplay => (prevDisplay === 'none' ? 'flex' : 'none'));
    };

    return (
        <Card>
            <CardHeader>
                <HStack>
                    <Heading size={20}>WPUI</Heading>
                    {isMobile ? (
                        <Button icon={icon} onClick={handleButtonClick}></Button>
                    ) : (
                        <>
                            <HStack expanded={false} spacing={5}>
                                {buttonData.slice(0, -1).map((btn, index) => (
                                    <Button key={index} icon={btn.icon}>
                                        {btn.label}
                                    </Button>
                                ))}
                            </HStack>
                            <Button variant="primary" icon={trendingUp}>Gro Pro</Button>
                        </>
                    )}
                </HStack>
            </CardHeader>
            {isMobile && showButtons && (
                <VStack style={{ padding: '12px' }} expanded={false} spacing={5}>
                    {buttonData.map((btn, index) => (
                        <Button
                            key={index}
                            icon={btn.icon}
                            variant={btn.variant}
                            style={btn.label === 'Gro Pro' ? { display: 'flex', justifyContent: 'center' } : {}}
                        >
                            {btn.label}
                        </Button>
                    ))}
                </VStack>
            )}
            <CardBody style={{ padding: "100px", display: display, justifyContent: 'center' }}>
                {/* Display Your Content Here */}
                This is Output Panel
            </CardBody>
        </Card>
    );
}

// @meta-start
Shell1.meta = {
    title: 'Shell 1',
    name: 'Shell1',
    category: 'Shells',
    path: '/shells/shell1',
};
// @meta-end

export default Shell1;
