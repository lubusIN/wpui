/**
 * Internal dependencies.
 */
import React, { useState } from 'react';

/**
 * WordPress dependencies.
 */
import {
    Card,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    Button,
    CardHeader,
    CardBody,
} from "@wordpress/components";
import { home, cog, plugins, key, external, trendingUp } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell5() {
    const [component, setComponent] = useState('Dashboard'); // replace string with your component do it with all buttons too this will update component on click
    const handleButtonClick = (component) => {
        setComponent(component);
    };
    return (
        <>
            <Card style={{ backgroundColor: "black", padding: "5px" }}>
                <HStack>
                    <CardBody style={{paddingBottom:'200px', width:"30%" }}>
                        <VStack spacing={4}>
                            <Heading style={{color:'white',marginLeft:'10px'}}>WPUI</Heading>
                            <VStack expanded={false} spacing={2}>
                                <Button 
                                    style={{ color: "white" }}
                                    icon={home}
                                    onClick={() => handleButtonClick('Dashboard')}
                                >
                                    Dashboard
                                </Button>
                                <Button 
                                    style={{ color: "white" }}
                                    icon={cog}
                                    onClick={() => handleButtonClick('Settings')}
                                >
                                    Settings
                                </Button>
                                <Button 
                                    style={{ color: "white" }}
                                    icon={plugins}
                                    onClick={() => handleButtonClick('Addons')}
                                >
                                    Addons
                                </Button>
                                <Button 
                                    style={{ color: "white" }}
                                    icon={key}
                                    onClick={() => handleButtonClick('License')}
                                >
                                    License
                                </Button>
                                <Button 
                                    style={{ color: "white" }}
                                    icon={external}
                                    onClick={() => handleButtonClick('Support')}
                                >
                                    Support
                                </Button>
                            </VStack>
                        </VStack>
                    </CardBody>
                    <CardBody size="large" style={{ height: "500px", width: "100%", backgroundColor:'white' }}>
                        <HStack className='card'>
                            <Heading>{component}</Heading>
                            {/* Display your Component Here */}
                            <HStack expanded={false}>
                                <Button variant="primary" icon={trendingUp}>Gro Pro</Button>
                            </HStack>
                        </HStack>
                    </CardBody>
                </HStack>
            </Card>
        </>
    );
};

// @meta-start
Shell5.meta = {
    title: 'Shell 5',
    name: 'Shell5',
    category: 'NewPatterns',
    path: '/new-patterns/shell5',
};
// @meta-end

export default Shell5;
