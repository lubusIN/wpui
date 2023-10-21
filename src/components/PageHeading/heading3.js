/**
 * WordPress dependencies.
 */
import {
    Button,
    __experimentalDivider as Divider,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { create } from '@wordpress/icons';

/**
 * Render Page Heading 3
 */
function Heading3() {
    return (
        <HStack alignment={'flex-start'} direction={['column', 'row']}>
            <HStack alignment="center" justify="left" direction={['column', 'row']}>
                <Heading level={4}>Cashflow</Heading>
                <Divider
                    margin="2"
                    orientation="vertical"
                />
                <HStack expanded={false}>
                    <Button>Last 7 days</Button>
                    <Button>Last 30 days</Button>
                    <Button>All time</Button>
                </HStack>
            </HStack>
            <Button variant="primary" icon={create} iconSize={40}>
                New Invoice
            </Button>
        </HStack>
    );
}

export default Heading3;
