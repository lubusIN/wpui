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

function Buttons() {
    return (
        <VStack style={{ padding: '12px' }} expanded={false} spacing={5}>
            <Button icon={home}>Dashboard</Button>
            <Button icon={cog}>Settings</Button>
            <Button icon={plugins}>Addons</Button>
            <Button icon={key}>License</Button>
            <Button icon={external}>Support</Button>
            <Button style={{ display: 'flex', justifyContent: 'center' }} variant="primary" icon={trendingUp}>Gro Pro</Button>
        </VStack>
    );
}

/**
 * Render Subscription Shell
 */
function Shell2() {
    const isMobile = !useViewportMatch('mobile');
    const [showButtons, setShowButtons] = useState(false);
    const [display, setDisplay] = useState('flex');
    const [icon, setIcon] = useState(menu);
    const handleButtonClick = () => {
        const isMenu = icon === menu;
        setIcon(isMenu ? close : menu);
        setShowButtons(isMenu);
        setDisplay(isMenu ? 'none' : 'flex');
    };
    return (
        <Card>
            {isMobile ? (
                <>
                    <CardHeader>
                        <HStack>
                            <Heading size={20}>WPUI</Heading>
                            <Button icon={icon} onClick={handleButtonClick}></Button>
                        </HStack>
                    </CardHeader>
                    {showButtons && <Buttons />}
                </>

            ) : (
                <>
                    <CardHeader>
                        <HStack>
                            <Heading size={20}>WPUI</Heading>
                            <HStack expanded={false} spacing={5}>
                                <Button icon={home}>Dashboard</Button>
                                <Button icon={cog}>Settings</Button>
                                <Button icon={plugins}>Addons</Button>
                                <Button icon={key}>License</Button>
                                <Button icon={external}>Support</Button>
                            </HStack>
                            <Button variant="primary" icon={trendingUp}>Gro Pro</Button>
                        </HStack>
                    </CardHeader>
                </>
            )
            }
            <CardBody style={{ padding: "100px", display: 'flex', justifyContent: 'center', display: display }}>
                {/*Display Your Content Here*/}This is Output Panel
            </CardBody>
        </Card>
    );
}

// @meta-start
Shell2.meta = {
    title: 'Shell 2',
    name: 'Shell2',
    category: 'Shells',
    path: '/shells/shell2',
};
// @meta-end

export default Shell2;
