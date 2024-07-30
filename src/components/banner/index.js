/**
 * External dependencies.
 */

import { Link } from "react-router-dom";

/**
 * WordPress dependencies.
 */
import {
    Card,
    Button,
    CardBody,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import './style.scss';

/**
 * Render Banner
 */
function Banner() {
    return (
        <Card className="wpui-hero-Section" isBorderless>
            <CardBody className="wpui-hero-cont">
                <VStack spacing={12} className='wpui-hero-card'>
                    <VStack spacing={5}>
                        <Text className='wpui-lubus' size={15} align="left" color="white">From the house of LUBUS</Text>
                        <Heading size={40} align="left" color="white" lineHeight={1.3} weight={500}>
                            Build Your React Powered WordPress Plugin Or App With Speed.
                        </Heading>
                        <Text size={16} align="left" color="white" lineHeight={1.5}>
                            WPUI is a design pattern library built upon WordPress components which gives you the building blocks you need to build your react-powered WordPress plugin or app. Spend less time on UI and more time building your idea.
                        </Text>
                    </VStack>
                    <HStack className='wpui-hero-cta' alignment="center" justify="left">
                        <Link to="getting-started">
                            <Button
                                variant="primary"
                                style={{ backgroundColor: '#3858E9' }}
                            >
                                Getting started
                            </Button>
                        </Link>
                        <Button
                            style={{ border: '1.5px solid #ffffff' }}
                            href='https://github.com/lubusIN/wpui/discussions'
                        >
                            Join discussion
                        </Button>
                    </HStack>
                </VStack>
            </CardBody>
        </Card>
    );
}

export default Banner;
