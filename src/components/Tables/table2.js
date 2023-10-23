/**
 * WordPress dependencies.
 */
import {
    Icon,
    Button,
    __experimentalTreeGrid as TreeGrid,
    __experimentalTreeGridRow as TreeGridRow,
    __experimentalTreeGridCell as TreeGridCell,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { commentAuthorAvatar } from "@wordpress/icons";

/**
 * Render Users Table
 */
function Table2() {

    const data = [
        {
            name: 'Logo Redesign',
            description: 'New logo and gigital asset playbook',
            time: '20.0',
            rate: '$100.00',
            price: '$2000.00'
        },
        {
            name: 'Website Design',
            description: 'Design and production of business cards',
            time: '52.0',
            rate: '$100.00',
            price: '$5200.00'
        },
        {
            name: 'Business Cards ',
            description: 'New logo and gigital asset playbook',
            time: '12.0',
            rate: '$100.00',
            price: '$1200.00'
        },
        {
            name: 'Tshirt Redesign',
            description: 'Tshirt design concept',
            time: '2.0',
            rate: '$100.00',
            price: '$400.00'
        },
    ];
    const total = [
        {
            rate: 'Subtotal',
            price: '$8,800.00'
        },
        {
            rate: 'Tax',
            price: '$1,760.00'
        },
        {
            rate: 'Total',
            price: '$10,560.00'
        },
    ]

    return (
        <VStack spacing={10}>
            <HStack>
                <VStack>
                    <Heading level={3} >Invoice</Heading>
                    <Text>For work completed</Text>
                </VStack>
                <Button variant="primary">Print</Button>
            </HStack>

            <TreeGrid style={{ width: '100%', borderCollapse: 'collapse' }}>
                <TreeGridRow>
                    <TreeGridCell withoutGridItem>
                        <Heading level={4}>Project</Heading>
                    </TreeGridCell>
                    <TreeGridCell withoutGridItem>
                        <Heading level={4}>Hours</Heading>
                    </TreeGridCell>
                    <TreeGridCell withoutGridItem>
                        <Heading level={4}>Rate</Heading>
                    </TreeGridCell>
                    <TreeGridCell withoutGridItem>
                        <Heading level={4}>Price</Heading>
                    </TreeGridCell>
                </TreeGridRow>
                {data.map((item, index) => (
                    <TreeGridRow key={index} style={{ borderTop: '1px solid rgba(0 0 0 / 0.1)' }}>
                        <TreeGridCell>
                            {(props) => (
                                <HStack alignment="left">
                                    <VStack>
                                        <Heading level={5}>{item.name}</Heading>
                                        <Text>{item.description}</Text>
                                    </VStack>
                                </HStack>
                            )}
                        </TreeGridCell>
                        <TreeGridCell>
                            {(props) => (
                                <Text size={15}>{item.time}</Text>
                            )}
                        </TreeGridCell>
                        <TreeGridCell>
                            {(props) => (
                                <Text size={15}>{item.rate}</Text>
                            )}
                        </TreeGridCell>
                        <TreeGridCell>
                            {(props) => (
                                <Text>{item.price}</Text>
                            )}
                        </TreeGridCell>
                    </TreeGridRow>
                ))}


                {total.map((item, index) => (
                    <TreeGridRow key={index} style={{ borderTop: index === 0 ? '1px solid rgba(0 0 0 / 0.1)' : 'none' }}>
                        <TreeGridCell></TreeGridCell>
                        <TreeGridCell></TreeGridCell>
                        <TreeGridCell>
                            {(props) => (
                                <Text size={15}>{item.rate}</Text>
                            )}
                        </TreeGridCell>
                        <TreeGridCell>
                            {(props) => (
                                <Text>{item.price}</Text>
                            )}
                        </TreeGridCell>
                    </TreeGridRow>
                ))}
            </TreeGrid>
            <style>
                {`
                    td{
                        padding: 15px 0px
                    }
               `}
            </style>
        </VStack>
    );
};
export default Table2;