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
    __experimentalZStack as ZStack
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import './style.scss'
import BannerBackground from "./bannerbackground";

/**
 * Render Banner
 */
function Banner() {
    return (
        <>
            <ZStack className="wpui-hero-background">
                <BannerBackground />
                <Card className="wpui-hero-Section" isBorderless>
                    <CardBody className="wpui-hero-cont">
                        <VStack spacing={12}>
                            <VStack spacing={5}>
                                <Text size={15} align="left" color="white">From the house of LUBUS</Text>
                                <Heading size={40} align="left" color="white" lineHeight={1.3} weight={500}>
                                    Build Your React Powered WordPress Plugin Or App With Speed.
                                </Heading>
                                <Text size={16} align="left" color="white" lineHeight={1.5}>
                                    WPUI is a design pattern library built upon WordPress components which gives you the building blocks you need to build your react-powered WordPress plugin or app. Spend less time on UI and more time building your idea.
                                </Text>
                            </VStack>
                            <HStack className="wpui-hero-cta" alignment="center" justify="left">
                                <Button
                                    variant="primary"
                                    style={{ backgroundColor: '#3858E9' }}
                                    iconSize={20}
                                    href='https://github.com/lubusIN/wpui/discussions'
                                >
                                    Join discussion
                                </Button>
                                <Link to="getting-started">
                                    <Button
                                        style={{ border: '1.5px solid #ffffff' }}
                                        iconSize={20}
                                    >
                                        Getting started
                                    </Button>
                                </Link>
                            </HStack>
                        </VStack>
                    </CardBody>
                </Card>
            </ZStack>
        </>
    );
};

export default Banner;