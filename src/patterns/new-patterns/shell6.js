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
function Shell6() {
    const [component, setComponent] = useState('Dashboard'); // replace string with your component do it with all buttons too this will update component on click
    const handleButtonClick = (component) => {
        setComponent(component);
    };
    return (
        <>
            <Card style={{ backgroundColor: "#7b7b7b4f", padding: "5px" }}>
                <HStack>
                    <CardBody style={{paddingBottom:'200px', width:"30%" }}>
                        <VStack spacing={4}>
                            <Heading style={{marginLeft:'10px'}}>WPUI</Heading>
                            <VStack expanded={false} spacing={2}>
                                <Button 
                                    icon={home}
                                    onClick={() => handleButtonClick('Dashboard')}
                                >
                                    Dashboard
                                </Button>
                                <Button 
                                    icon={cog}
                                    onClick={() => handleButtonClick('Settings')}
                                >
                                    Settings
                                </Button>
                                <Button 
                                    icon={plugins}
                                    onClick={() => handleButtonClick('Addons')}
                                >
                                    Addons
                                </Button>
                                <Button 
                                    icon={key}
                                    onClick={() => handleButtonClick('License')}
                                >
                                    License
                                </Button>
                                <Button 
                                    icon={external}
                                    onClick={() => handleButtonClick('Support')}
                                >
                                    Support
                                </Button>
                            </VStack>
                        </VStack>
                    </CardBody>
                    <CardBody size="large" style={{ borderRadius:'10px', height: "500px", width: "100%", backgroundColor:'white' }}>
                        <HStack>
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
Shell6.meta = {
    title: 'Shell 6',
    name: 'Shell6',
    category: 'NewPatterns',
    path: '/new-patterns/shell6'
};
// @meta-end

export default Shell6;
