/**
 * WordPress dependencies.
 */
import { edit } from "@wordpress/icons";

import {
    Button,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Render Page Heading
 */
function Heading1() {
    return (
        <HStack alignment="start" justify="space-between" spacing={3} direction={['column', 'row']}>
            <Heading level={2}>Mindblown: a blog about philosophy.</Heading>
            <HStack spacing={3} expanded={false}>
                <Button icon={edit} variant="secondary">Edit</Button>
                <Button variant="primary">Publish</Button>
            </HStack>
        </HStack>
    );
};

Heading1.meta = {
    title: 'Heading 1',
    path: '/PageHeading/heading1',
};

export default Heading1;
