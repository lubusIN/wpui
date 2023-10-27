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
 * Render Footer
 */
function Footer() {
    return (
        <Card className="wpui_footer" size="large" isBorderless>
            <CardBody>
                <VStack className="sec_1" alignment="center" spacing={8}>
                    <Heading color='white'>WPUI Components</Heading>
                    <Text size={20} align="center" weight={400} lineHeight={1.5} color='white'>
                        WPUI is a #BuildInPublic project from the house of LUBUS. We love getting feedback from you! It really helps us know how we’re doing, what you’re interested in, and what you’d like to see next. So please, don’t hesitate to share your thoughts with us! We’re all.
                    </Text>
                    <Button variant='primary' href='https://github.com/lubusIN/wpui/discussions' style={{ border: '1px solid white' }}>
                        Join us on Github
                    </Button>
                </VStack>
            </CardBody>
            <CardDivider style={{ backgroundColor: '#ffffff4f' }} />
            <CardBody>
                <HStack justify='center'>
                    <Text color='white'>Proudly made in India by LUBUS</Text>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default Footer;