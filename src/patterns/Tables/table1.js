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

/**
 * Render Users Table
 */
function Table1() {

    const data = [
        {
            name: 'Rahul Sharma',
            email: 'rahulsharma@gmail.com',
            role: 'Administrator',
            status: 'Active',
            avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar3.png'
        },
        {
            name: 'Lalit Rana',
            email: 'lalitrana@gmail.com',
            role: 'Editor',
            status: 'Active',
            avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar4.png'
        },
        {
            name: 'Anna Morgan',
            email: 'annamorgan@gmail.com',
            role: 'Contributor',
            status: 'Inactive',
            avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar5.png'
        },
        {
            name: 'Neha Jain',
            email: 'nehajain@gmail.com',
            role: 'Author',
            status: 'Active',
            avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar6.png'
        },
        {
            name: 'Savio Rodriguez',
            email: 'saviorodriguez@gmail.com',
            role: 'Subscriber',
            status: 'Inactive',
            avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar7.png'
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
                                        <Surface as={'img'} src={item.avatar} style={{ borderRadius: '100%', maxWidth: '45px' }} />
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

// @meta-start
Table1.meta = {
    title: 'Table 1',
    path: '/Tables/table1',
};
// @meta-end

export default Table1;