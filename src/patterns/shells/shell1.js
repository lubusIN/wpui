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
    const buttonData = [
        { icon: home, label: 'Dashboard' },
        { icon: cog, label: 'Settings' },
        { icon: plugins, label: 'Addons' },
        { icon: key, label: 'License' },
        { icon: external, label: 'Support' },
        { icon: trendingUp, label: 'Go Pro', variant: 'primary' }
    ];
    const isMobile = !useViewportMatch('mobile');
    const [showButtons, setShowButtons] = useState(false);
    const [display, setDisplay] = useState('');
    const [icon, setIcon] = useState(menu);

    const handleButtonClick = () => {
        setIcon(prevIcon => (prevIcon === menu ? close : menu));
        setShowButtons(prevState => !prevState);
        setDisplay(prevDisplay => (prevDisplay === 'none' ? '' : 'none'));
    };

    return (
        <Card>
            <CardHeader>
                <HStack>
                    {/* Wpui Logo */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 95.12 95.12" style={{ minWidth:'30px' }}>
                            <g id="Layer_1-2" data-name="Layer 1">
                                <g>
                                    <rect className="cls-2" fill="#3858e9" width="93.73" height="93.73" rx="19.38" ry="19.38" />
                                    <path className="cls-1" fill="#fefefe" d="m38.37,50.15c-3.67-.01-7.33-.06-11-.02-4.67.05-8.41-3.59-9.27-7.24-.2-.85-.33-1.71-.33-2.59,0-4.21,0-8.41,0-12.62.02-5.66,4.24-9.86,9.91-9.87,12.25-.02,24.49,0,36.74-.01.4,0,.81-.02,1.21-.03,2.77-.02,5.24.77,7.27,2.71,1.97,1.88,3,4.21,3.02,6.92.04,4.34.04,8.68,0,13.02-.04,5.42-4.27,9.66-9.7,9.68-8.89.03-17.77,0-26.66.01-.4,0-.81.02-1.21.03Zm1.63-6.53c8.78.01,17.56.03,26.34.02,1.78,0,3.12-1.38,3.13-3.17.03-4.34.03-8.68,0-13.02-.01-1.79-1.35-3.15-3.12-3.17-2.52-.03-5.05,0-7.57.02-1.65,0-3.3-.03-4.95-.03-8.72,0-17.43,0-26.15,0-2.01,0-3.42,1.28-3.44,3.17-.03,4.34-.03,8.68,0,13.02.01,1.79,1.35,3.16,3.13,3.17,4.21.03,8.41,0,12.62-.02Z" />
                                    <path className="cls-1" fill="#fefefe" d="m25.45,63.07c-1.16-.1-2.39.17-3.36-.85-.98-1.03-1.35-2.31-.86-3.58.48-1.25,1.63-2.05,3.05-2.06,2.82-.03,5.63-.02,8.45-.03.4.01.81.03,1.21.03,11.74,0,23.49,0,35.23,0,2.55,0,4.2,2.14,3.34,4.36-.49,1.27-1.47,1.97-2.84,2.09-.43.04-.87.01-1.31.01-13.9,0-27.79,0-41.69,0-.4,0-.81.02-1.21.03Z" />
                                    <path className="cls-1" fill="#fefefe" d="m46.74,75.96c-7.47,0-14.93,0-22.4,0-1.56,0-2.74-.88-3.18-2.3-.41-1.33.07-2.74,1.22-3.56.72-.52,1.54-.6,2.4-.6,13.72,0,27.44,0,41.17,0,1.14,0,2.29-.01,3.43,0,1.88.03,3.32,1.41,3.34,3.19.02,1.83-1.42,3.26-3.37,3.26-7.53.01-15.07,0-22.6,0Z" />
                                </g>
                            </g>
                        </svg>
                        <Heading style={{ marginLeft: '10px' }}>WPUI</Heading>
                    </div>
                    {isMobile ? (
                        <Button icon={icon} onClick={handleButtonClick}></Button>
                    ) : (
                        <>
                            <HStack expanded={false} spacing={5}>
                                {buttonData.slice(0, -1).map((btn, index) => (
                                    <>
                                    <HStack>
                                    <Button key={index} >
                                    <Icon style={{minWidth:'20px'}}  icon={btn.icon}>
                                    </Icon>
                                        {btn.label}
                                    </Button>
                                    </HStack>
                                    </>
                                ))}
                            </HStack>
                            <Button variant="primary" icon={trendingUp}>Go Pro</Button>
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
                            style={btn.label === 'Go Pro' ? { display: 'flex', justifyContent: 'center' } : {}}
                            >
                            {btn.label}
                            </Button>
                        ))}
                </VStack>
            )}
            <CardBody className='panel' style={{ backgroundColor:'#F0F0F1',display:display}}>
            <Heading style={{padding:'20px',display:display}}>Dashboard</Heading>
            <Card style={{ backgroundColor:'#F0F0F1',height:'300px',margin:'30px 30px', display: display,borderRadius:'10px' }}>
                {/* Display Your Content Here */}
            </Card>
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
