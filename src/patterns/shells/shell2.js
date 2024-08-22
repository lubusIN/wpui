/**
 * WordPress dependencies.
 */
import {
    Card,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    Button,
    CardBody,
} from "@wordpress/components";
import { home, cog, plugins, key, external, trendingUp, close, menu } from "@wordpress/icons";
import { useViewportMatch } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import React, { useState, useEffect } from 'react';

/**
 * Render Shell 2
 */
function Shell2() {
    const ButtonList = ({ activeButton, handleButtonClick, icon }) => (
        <VStack style={{ boxShadow: 'none' }}>
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

    const isMobile = !useViewportMatch('mobile');
    const [width, setWidth] = useState('25%');
    const [Stack, setStack] = useState(HStack);
    const [activeButton, setActiveButton] = useState('dashboard');
    const [showButtons, setShowButtons] = useState(false);
    const [newicon, setNewIcon] = useState(menu);
    const [height, setHeight] = useState('720px');
    const [display, setDisplay] = useState('');

    const icon = {
        dashboard: home,
        settings: cog,
        addons: plugins,
        license: key,
        support: external
    };

    const viewbutton = () => {
        setShowButtons(prevState => !prevState);
        setNewIcon(prevIcon => (prevIcon === menu ? close : menu));
        setDisplay(prevDisplay => (prevDisplay === 'none' ? '' : 'none'));
    };

    useEffect(() => {
        setStack(isMobile ? VStack : HStack);
        setWidth(isMobile ? '100%' : '25%');
        setHeight(isMobile ? '500px' : '720px');
    }, [isMobile]);

    const handleButtonClick = (buttonKey) => {
        setActiveButton(buttonKey);
    };

    return (
        <Card style={{ backgroundColor: "#1c1e24", padding: "5px", borderRadius: '5px' }}>
            <Stack alignment='baseline' spacing={1}>
                <CardBody style={{ width: width, padding: '0px' }}>
                    <VStack spacing={12} style={{ padding: '5px' }}>
                        <HStack style={{ padding: '10px' }}>
                            {/* Wpui Logo */}
                            <HStack expanded={false} style={{ marginLeft: '5px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 95.12 95.12" style={{ width: '1.5em', height: '1.5em' }}>
                                    <g id="Layer_1-2" data-name="Layer 1">
                                        <g>
                                            <rect className="cls-2" fill="#ffffff" width="93.73" height="93.73" rx="19.38" ry="19.38" />
                                            <path className="cls-1" fill="#000000" d="m38.37,50.15c-3.67-.01-7.33-.06-11-.02-4.67.05-8.41-3.59-9.27-7.24-.2-.85-.33-1.71-.33-2.59,0-4.21,0-8.41,0-12.62.02-5.66,4.24-9.86,9.91-9.87,12.25-.02,24.49,0,36.74-.01.4,0,.81-.02,1.21-.03,2.77-.02,5.24.77,7.27,2.71,1.97,1.88,3,4.21,3.02,6.92.04,4.34.04,8.68,0,13.02-.04,5.42-4.27,9.66-9.7,9.68-8.89.03-17.77,0-26.66.01-.4,0-.81.02-1.21.03Zm1.63-6.53c8.78.01,17.56.03,26.34.02,1.78,0,3.12-1.38,3.13-3.17.03-4.34.03-8.68,0-13.02-.01-1.79-1.35-3.15-3.12-3.17-2.52-.03-5.05,0-7.57.02-1.65,0-3.3-.03-4.95-.03-8.72,0-17.43,0-26.15,0-2.01,0-3.42,1.28-3.44,3.17-.03,4.34-.03,8.68,0,13.02.01,1.79,1.35,3.16,3.13,3.17,4.21.03,8.41,0,12.62-.02Z" />
                                            <path className="cls-1" fill="#000000" d="m25.45,63.07c-1.16-.1-2.39.17-3.36-.85-.98-1.03-1.35-2.31-.86-3.58.48-1.25,1.63-2.05,3.05-2.06,2.82-.03,5.63-.02,8.45-.03.4.01.81.03,1.21.03,11.74,0,23.49,0,35.23,0,2.55,0,4.2,2.14,3.34,4.36-.49,1.27-1.47,1.97-2.84,2.09-.43.04-.87.01-1.31.01-13.9,0-27.79,0-41.69,0-.4,0-.81.02-1.21.03Z" />
                                            <path className="cls-1" fill="#000000" d="m46.74,75.96c-7.47,0-14.93,0-22.4,0-1.56,0-2.74-.88-3.18-2.3-.41-1.33.07-2.74,1.22-3.56.72-.52,1.54-.6,2.4-.6,13.72,0,27.44,0,41.17,0,1.14,0,2.29-.01,3.43,0,1.88.03,3.32,1.41,3.34,3.19.02,1.83-1.42,3.26-3.37,3.26-7.53.01-15.07,0-22.6,0Z" />
                                        </g>
                                    </g>
                                </svg>
                                <Heading style={{ color: 'white' }}>WPUI</Heading>
                            </HStack>
                            {/* Button to toggle visibility */}
                            {isMobile && (
                                <Button icon={newicon} onClick={viewbutton} style={{ marginRight: '10px', color: 'white' }}></Button>
                            )}
                        </HStack>

                        {isMobile ? (
                            showButtons && <ButtonList activeButton={activeButton} handleButtonClick={handleButtonClick} icon={icon} />
                        ) : (
                            <ButtonList activeButton={activeButton} handleButtonClick={handleButtonClick} icon={icon} />
                        )}
                    </VStack>
                </CardBody>
                <CardBody size="large" style={{ padding: '0px', height: height, width: "100%", backgroundColor: 'white', borderRadius: '5px', display: display }}>
                    <HStack expanded={false} style={{ borderBottom: '1px solid #D8D8D8', padding: '15px 50px' }}>
                        <Heading>Dashboard</Heading>
                        <Button variant="primary" icon={trendingUp}>Gro Pro</Button>
                    </HStack>
                    {/* Display your Component Here */}
                </CardBody>
            </Stack>
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
