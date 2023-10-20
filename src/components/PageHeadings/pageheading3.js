/**
 * WordPress dependencies.
 */
import {
    Button,
    Icon,
    TabPanel,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { create } from '@wordpress/icons';
/**
 * Render Page Heading
 */
function PageHeading2() {
    const tabs = [
        {
            name: 'Last 7 days',
            title: 'Last 7 days',
            className: '1-tab',
        },
        {
            name: 'Last 30 days',
            title: 'Last 30 days',
            className: '2-tab',
        },
        {
            name: 'All time',
            title: 'All time',
            className: '3-tab',
        },
    ];

    return (
        <HStack alignment="start" justify="space-between" spacing={3} direction={['column', 'row']}>
            <HStack alignment="left">
                <Heading level={4}>Cashflow</Heading>
                <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M8 0h1v16H8V0z" /></svg>}></Icon>
                <TabPanel tabs={tabs} selectOnMove>
                    {(tab) => (
                        <HStack>
                            <Text>{tab.title}</Text>
                        </HStack>
                    )}
                </TabPanel>
            </HStack>
            <Button variant="primary" icon={create} iconSize={40}>New Invoice</Button>
        </HStack>
    );
}

export default PageHeading2;
