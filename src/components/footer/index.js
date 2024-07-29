/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    Card,
    CardBody,
    Button,
    CardDivider,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalText as Text,
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import './style.scss'

const date = new Date();
let Year = date.getFullYear();

/**
 * Render Footer
 */
function Footer() {
    return (
        <Card className="wpui-footer" size="large" isBorderless>
            <CardBody>
                <VStack className="sec-1" alignment="center" spacing={4}>
                    <HStack expanded={false}>
                        <img width='25px' src='https://raw.githubusercontent.com/lubusIN/wpui/19be18fb1ed5a50a79bd08ac4ee28691abf88b52/favicon.svg'></img>
                        <Heading color='white'>WPUI</Heading>
                    </HStack>
                    <Text size={20} align="center" weight={400} lineHeight={1.5} color='white'>
                        WPUI is a #BuildInPublic project from the house of LUBUS. We love getting feedback from you! It really helps us know how we’re doing, what you’re interested in, and what you’d like to see next. So please, don’t hesitate to share your thoughts with us! We’re all ears...
                    </Text>
                    <Button className='btn' href='https://github.com/lubusIN/wpui/discussions' style={{ border: '1px solid white' }}>
                        Join discussion
                    </Button>
                </VStack>
            </CardBody>
            <CardDivider style={{ backgroundColor: '#ffffff4f' }} />
            <CardBody>
                <HStack>
                    <Text color='white'>&copy; {Year} WPUI. All Right Reserved</Text>
                    <HStack expanded={false}>
                        <Text color='white'>Made in India</Text>
                        <img width='20px' src='https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/Flag_of_India.svg.png'></img>
                    </HStack>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default Footer;