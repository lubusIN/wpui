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
import { Flag, Logo } from '../../components'

const date = new Date();
const Year = date.getFullYear();

/**
 * Render Footer
 */
function Footer() {
    return (
        <Card className="wpui-footer" size="large" isBorderless>
            <CardBody>
                <VStack className="footer-content" alignment="center" spacing={4}>
                    <HStack expanded={false}>
                        <Logo />
                    </HStack>
                    <Text size={20} align="center" weight={400} lineHeight={1.5} color='white'>
                        WPUI is a #BuildInPublic project from the house of LUBUS. We love getting feedback from you! It really helps us know how we’re doing, what you’re interested in, and what you’d like to see next. So please, don’t hesitate to share your thoughts with us! We’re all ears...
                    </Text>
                    <Button className='footer_btn' href='https://github.com/lubusIN/wpui/discussions'>
                        Join discussion
                    </Button>
                </VStack>
            </CardBody>
            <CardDivider style={{ backgroundColor: '#ffffff4f' }} />
            <CardBody style={{ padding: '20px' }}>
                <HStack className='wpui-footer-bottom' wrap justify='center'>
                    <Text className='wpui-footer-bottom-left' color='white'>&copy; {Year} WPUI. All Rights Reserved.</Text>
                    <HStack expanded={false} spacing={1} className='wpui-footer-bottom-right'>
                        <Text color='white'>Made in India</Text>
                        <Flag />
                    </HStack>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default Footer;