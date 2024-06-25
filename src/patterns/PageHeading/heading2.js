/**
 * WordPress dependencies.
 */
import { chevronRight, edit } from '@wordpress/icons';

import {
    Button,
    Icon,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import * as Components from '.';

/**
 * Render Page Heading 2
 */
function Heading2() {
    return (
        <VStack spacing={3}>
            <HStack alignment="left" spacing={4}>
                <Text>Home</Text>
                <Icon size={20} icon={chevronRight}></Icon>
                <Text>Blog</Text>
                <Icon size={20} icon={chevronRight}></Icon>
                <Text>Technology</Text>
            </HStack>

            <HStack alignment="start" justify="space-between" spacing={3} direction={['column', 'row']}>
                <Heading level={2}>The Future of Artificial Intelligence.</Heading>
                <HStack spacing={3} expanded={false}>
                    <Button icon={edit} variant="secondary">Edit</Button>
                    <Button variant="primary">Publish</Button>
                </HStack>
            </HStack>
        </VStack>
    );
};

Heading2.meta = {
    title: 'Heading 2',
    path: '/PageHeading/heading2',
    component: Components.Heading2
};

export default Heading2;
