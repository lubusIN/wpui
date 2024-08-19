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
 * Render Shell 2
 */
function Shell2() {
    return (
        <>
            <Card style={{ backgroundColor: "black", padding: "5px",borderRadius:'5px'}}>
                <HStack alignment='baseline'>
                    <CardBody style={{ width:"30%" }}>
                        <VStack spacing={8}>
                            <Heading style={{color:'white',marginLeft:'10px'}}>WPUI</Heading>
                            <VStack expanded={false} spacing={2}>
                                <Button 
                                    style={{ color: "white" }}
                                    icon={home}
                                >
                                    Dashboard
                                </Button>
                                <Button 
                                    style={{ color: "white" }}
                                    icon={cog}
                                >
                                    Settings
                                </Button>
                                <Button 
                                    style={{ color: "white" }}
                                    icon={plugins}
                                >
                                    Addons
                                </Button>
                                <Button 
                                    style={{ color: "white" }}
                                    icon={key}
                                >
                                    License
                                </Button>
                                <Button 
                                    style={{ color: "white" }}
                                    icon={external}
                                >
                                    Support
                                </Button>
                            </VStack>
                        </VStack>
                    </CardBody>
                    <CardBody size="large" style={{ height: "700px", width: "100%", backgroundColor:'white',borderRadius:'5px' }}>
                        <HStack>
                            <Heading>Dashboard</Heading>
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
Shell2.meta = {
    title: 'Shell 2',
    name: 'Shell2',
    category: 'Shells',
    path: '/shells/shell2',
};
// @meta-end

export default Shell2;