/**
 * WordPress dependencies.
 */
import {
    Button,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { edit } from "@wordpress/icons";

/**
 * Render Page Heading
 */
function Heading1() {
    return (
        <HStack alignment="start" justify="space-between" spacing={3} direction={['column', 'row']}>
            <Heading level={2}>Unlocking the Secrets of Productivity</Heading>
            <HStack spacing={3} expanded={false}>
                <Button icon={edit} variant="secondary">Edit</Button>
                <Button variant="primary">Publish</Button>
            </HStack>
        </HStack>
    );
};

export default Heading1;
