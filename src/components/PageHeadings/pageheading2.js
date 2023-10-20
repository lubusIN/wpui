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
import { chevronRight } from '@wordpress/icons';
/**
 * Render Page Heading
 */
function PageHeading2() {
    return (
        <VStack>
            <HStack alignment="left" direction={'row'}>
                <Text>Jobs</Text>
                <Icon size={20} icon={chevronRight}></Icon>
                <Text>Engineering</Text>
                <Icon size={20} icon={chevronRight}></Icon>
                <Text>Developer</Text>
            </HStack>

            <HStack alignment="start" justify="space-between" spacing={3} direction={['column', 'row']}>
                <Heading level={2}>Unlocking the Secrets of Productivity</Heading>
                <HStack spacing={3} expanded={false}>
                    <Button variant="secondary">Edit</Button>
                    <Button variant="primary">Publish</Button>
                </HStack>
            </HStack>
        </VStack>
    );
};

export default PageHeading2;
