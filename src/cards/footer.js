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
            <CardBody isShady>
                <VStack className="sec_1" alignment="center" spacing={8}>
                    <Heading>WPUI Components</Heading>
                    <Text size={20} align="center">
                        WPUI is a #BuildInPublic project from the house of LUBUS. We love getting
                        feedback from you! It really helps us know how we're doing, what you're
                        interested in, and what you'd like to see next. So please, don't hesitate to shareyour thoughts with us! We're all ears.
                    </Text>
                    <HStack alignment="center">
                        <Button href="#" isPressed>Join us on Github</Button>
                        <Button href="#">Send us a message</Button>
                    </HStack>
                </VStack>
            </CardBody>
            <CardDivider />
            <CardBody>
                <HStack direction={['column', 'row']}>
                    <Text>@ 2023 WPUI. All Rights Reserved</Text>
                    <Text>Made in India</Text>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default Footer;