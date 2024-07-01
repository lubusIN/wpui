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
import { BannerBackground } from "../index";

/**
 * Render Banner
 */
function Banner() {
    return (
        <>
            <ZStack>
                <Card>
                    <BannerBackground />
                </Card>
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
                                <Button
                                    variant="secondary"
                                    style={{ border: '1.5px solid #ffffff' }}
                                    icon={<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M7.976 0A7.977 7.977 0 000 7.976c0 3.522 2.3 6.507 5.431 7.584.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076-.343-.93-.881-1.175-.881-1.175-.734-.489.048-.489.048-.489.783.049 1.224.832 1.224.832.734 1.223 1.859.88 2.3.685.048-.538.293-.88.489-1.076-1.762-.196-3.621-.881-3.621-3.964 0-.88.293-1.566.832-2.153-.05-.147-.343-.978.098-2.055 0 0 .685-.196 2.201.832.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832.44 1.077.146 1.908.097 2.104a3.16 3.16 0 01.832 2.153c0 3.083-1.86 3.719-3.62 3.915.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0016 7.976C15.951 3.572 12.38 0 7.976 0z" fill="#fff" />
                                    </svg>}
                                    iconSize={20}
                                    href="https://github.com/lubusIN/wpui"
                                >
                                    Opensource
                                </Button>
                                <Link to="getting-started">
                                    <Button
                                        style={{ border: '1.5px solid #ffffff' }}
                                        iconSize={20}
                                    >
                                        Getting Started
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