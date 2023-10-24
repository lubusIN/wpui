/**
 * WordPress dependencies.
 */
import {
    Button,
    Icon,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { chevronRight, edit } from '@wordpress/icons';

/**
 * Render Page Heading 2
 */
function Heading2() {
    return (
        <VStack spacing={3}>
            <HStack alignment="left" spacing={4}>
                <Text>Jobs</Text>
                <Icon size={20} icon={chevronRight}></Icon>
                <Text>Engineering</Text>
                <Icon size={20} icon={chevronRight}></Icon>
                <Text>Developer</Text>
            </HStack>

            <HStack alignment="start" justify="space-between" spacing={3} direction={['column', 'row']}>
                <Heading level={2}>Unlocking the Secrets of Productivity</Heading>
                <HStack spacing={3} expanded={false}>
                    <Button icon={edit} variant="secondary">Edit</Button>
                    <Button variant="primary">Publish</Button>
                </HStack>
            </HStack>
        </VStack>
    );
};

export default Heading2;
