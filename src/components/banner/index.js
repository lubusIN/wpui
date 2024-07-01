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
import './style.scss'

/**
 * Render Banner
 */
function Banner() {
    return (
        <Card className="wpui-hero-Section" isBorderless>
            <CardBody className="wpui-hero-cont">
                <VStack spacing={12}>
                    <VStack spacing={5}>
                        <Text size={15} align="left" color="white">From the House of LUBUS</Text>
                        <Heading size={40} align="left" color="white" lineHeight={1.3} weight={500}>
                            Build Your React Powered WordPress Plugin Or App With Speed.
                        </Heading>
                        <Text size={16} align="left" color="white" lineHeight={1.5}>
                            WPUI IS A DESIGN PATTERN LIBRARY BUILT UPON WORDPRESS COMPONENTS WHICH GIVES YOU THE BUILDING BLOCKS YOU NEED TO BUILD YOUR REACT-POWERED WORDPRESS PLUGIN OR APP. SPEND LESS TIME ON UI AND MORE TIME BUILDING YOUR IDEA.
                        </Text>
                    </VStack>
                    <HStack className="wpui-hero-cta" alignment="center" justify="left">
                        <Button
                            variant="primary"
                            style={{ backgroundColor: '#3858E9' }}
                            iconSize={20}
                            href='https://github.com/lubusIN/wpui/discussions'
                        >
                            Join Discussion
                        </Button>
                        <Link to="getting-started">
                        <Button
                            style={{ border: '1.5px solid #ffffff'}}
                            iconSize={20}
                        >
                            Getting Started
                        </Button>
                        </Link>
                    </HStack>
                </VStack>
            </CardBody>
        </Card>
    );
};

export default Banner;