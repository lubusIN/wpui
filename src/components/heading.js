/**
 * WordPress dependencies.
 */
import {
    Button,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Render Page Heading
 */
function PageHeading() {
    return (
        <HStack alignment="start" justify="space-between" spacing={3} direction={['column', 'row']}>
            <Heading level={2}>Unlocking the Secrets of Productivity</Heading>
            <HStack spacing={3} expanded={false}>
                <Button variant="secondary">Edit</Button>
                <Button variant="primary">Publish</Button>
            </HStack>
        </HStack>
    );
};

export default PageHeading;
