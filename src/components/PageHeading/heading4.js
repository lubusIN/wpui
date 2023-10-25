/**
 * WordPress dependencies.
 */
import {
    Button,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { create } from '@wordpress/icons';

/**
 * Render Page Heading 3
 */
function Heading3() {

    return (
        <HStack direction={['column', 'row']}>
            <HStack alignment="left" direction={['column', 'row']}>
                <Heading level={4}>Cashflow</Heading>
                <Text>|</Text>
                <HStack expanded={false}>
                    <Button>Last 7 days</Button>
                    <Button>Last 30 days</Button>
                    <Button>All time</Button>
                </HStack>
            </HStack>
            <Button variant="primary" icon={create} iconSize={40}>New Invoice</Button>
        </HStack>
    );
}

export default Heading3;
