/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    Card,
    Button,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Header
 */
function Header() {
    return (
        <Card className="wpui_header" isBorderless borderBottom>
            <HStack>
                <Heading as={'a'} href="/">WPUI</Heading>
                <Button variant="primary" size='large'>Join us</Button>
            </HStack>
        </Card>
    );
};

export default Header;