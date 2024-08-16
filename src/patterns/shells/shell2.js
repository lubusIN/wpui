import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { home, cog, plugins, key, external, trendingUp, menu,close } from "@wordpress/icons";
import { useViewportMatch } from '@wordpress/compose';

function Files() {
    return (
        <VStack style={{padding:'12px'}} expanded={false} spacing={5} className='btn'>
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
    const [showFiles, setShowFiles] = useState(false);
    const [display , setDisplay]= useState('flex');
    const [icon, setIcon] = useState(menu);

    const handleButtonClick = () => {
        if (icon === menu) {
            setIcon(close);
            setShowFiles(true);
            setDisplay('none')
        } else {
            setIcon(menu);
            setShowFiles(false);
            setDisplay('flex')
        }
    };

    const desktop = (
        <>
            <CardHeader>
                <HStack>
                    <Heading size={20}>WPUI</Heading>
                    <HStack expanded={false} spacing={5} className='btn'>
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
    );

    const mobile = (
        <>
            <CardHeader>
                <HStack>
                    <Heading size={20}>WPUI</Heading>
                    <Button icon={icon} onClick={handleButtonClick}></Button>
                </HStack>
            </CardHeader>
            {showFiles && <Files />}
        </>
    );

    return (
        <Card>
            {isMobile ? mobile : desktop}
            <CardBody style={{ padding: "100px", display: 'flex', justifyContent: 'center',display:display}}>
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
