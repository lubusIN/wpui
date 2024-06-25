/**
 * WordPress dependencies.
 */
import {
    Button,
    __experimentalScrollable as Scrollable,
    __experimentalTreeGrid as TreeGrid,
    __experimentalTreeGridRow as TreeGridRow,
    __experimentalTreeGridCell as TreeGridCell,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
    __experimentalSurface as Surface,
} from "@wordpress/components";
import * as Components from '.';

/**
 * Render Users Table
 */
function Table1() {

    const data = [
        {
            name: 'Harry D. Mead',
            email: 'harry@gmail.com',
            role: 'Administrator',
            status: 'Active'
        },
        {
            name: 'Justina M. Plummer',
            email: 'justina@gmail.com',
            role: 'Editor',
            status: 'Active'
        },
        {
            name: 'John J. Davis',
            email: 'john@gmail.com',
            role: 'Contributor',
            status: 'Inactive'
        },
        {
            name: 'Herman M. Monson',
            email: 'herman@gmail.com',
            role: 'Author',
            status: 'Active'
        },
        {
            name: 'Joseph E. Schlater',
            email: 'joseph@gmail.com',
            role: 'Subscriber',
            status: 'Inactive'
        }
    ];

    return (
        <VStack spacing={10}>
            <HStack direction={['column', 'row']} alignment="start" justify="space-between">
                <VStack>
                    <Heading level={3} >Users</Heading>
                    <Text size={14} variant="muted">
                        Welcome to our WordPress Users page featuring a list of user data, including names, emails, and roles.
                    </Text>
                </VStack>
                <Button variant="primary" style={{ minWidth: 'auto' }}>Add User</Button>
            </HStack>

            <Scrollable scrollDirection="x">
                <TreeGrid className="wpui_table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <TreeGridRow>
                        <TreeGridCell withoutGridItem>
                            <Heading level={4}>Name</Heading>
                        </TreeGridCell>
                        <TreeGridCell withoutGridItem>
                            <Heading level={4}>Email</Heading>
                        </TreeGridCell>
                        <TreeGridCell withoutGridItem>
                            <Heading level={4}>Status</Heading>
                        </TreeGridCell>
                        <TreeGridCell withoutGridItem>
                            <Heading level={4}>Role</Heading>
                        </TreeGridCell>
                    </TreeGridRow>
                    {data.map((item, index) => (
                        <TreeGridRow key={index} style={{ borderTop: '1px solid rgba(0 0 0 / 0.1)' }}>
                            <TreeGridCell>
                                {(props) => (
                                    <HStack alignment="left">
                                        <Surface as={'img'} src="https://placehold.co/50" style={{ borderRadius: '100%', minWidth: 'fit-content' }} />
                                        <Heading level={5} style={{ whiteSpace: 'nowrap' }}>
                                            {item.name}
                                        </Heading>
                                    </HStack>
                                )}
                            </TreeGridCell>
                            <TreeGridCell>
                                {(props) => (
                                    <VStack>
                                        <Text>{item.email}</Text>
                                    </VStack>
                                )}
                            </TreeGridCell>
                            <TreeGridCell>
                                {(props) => (
                                    <Text
                                        style={{
                                            backgroundColor: item.status === 'Inactive' ? '#FDE2E1' : '#F0FDF4',
                                            color: item.status === 'Inactive' ? '#B04A48' : '#166534',
                                            borderRadius: '5px',
                                            padding: '5px',
                                        }}
                                    >
                                        {item.status}
                                    </Text>
                                )}
                            </TreeGridCell>
                            <TreeGridCell>
                                {(props) => (
                                    <Text>{item.role}</Text>
                                )}
                            </TreeGridCell>
                            <TreeGridCell>
                                {(props) => (
                                    <Button variant="tertiary">Edit</Button>
                                )}
                            </TreeGridCell>
                        </TreeGridRow>
                    ))}
                </TreeGrid>
            </Scrollable>
            <style>
                {`
                    td{
                        padding: 15px 0px
                    }
                    @media only screen and (max-width: 480px){
                        .wpui_table{
                             width: 600px !important
                        }
                     }
               `}
            </style>
        </VStack>
    );
};

Table1.meta = {
    title: 'Table 1',
    path: '/Tables/table1',
    component: Components.Table1
};

export default Table1;