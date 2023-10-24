/**
 * WordPress dependencies.
 */
import {
    Icon,
    Button,
    __experimentalScrollable as Scrollable,
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
function Table1() {

    const data = [
        {
            name: 'wordpress',
            email: 'test@gmail.com',
            role: 'Member',
            title: 'Front-end Developer',
            desc: 'Optimization',
            status: 'Active'
        },
        {
            name: 'Punit Verma',
            email: 'punit@gmail.com',
            role: 'Member',
            title: 'Developer',
            desc: 'Optimization',
            status: 'Active'
        },
        {
            name: 'Ajit Bohra',
            email: 'ajit@gmail.com',
            role: 'Member',
            title: 'Developer',
            desc: 'Optimization',
            status: 'Active'
        },
        {
            name: 'Pravin Prajapati',
            email: 'pravin@gmail.com',
            role: 'Member',
            title: 'Designer',
            desc: 'Optimization',
            status: 'Active'
        },
        {
            name: 'Nikhil Sharma',
            email: 'nikhil@gmail.com',
            role: 'Member',
            title: 'React Developer',
            desc: 'Optimization',
            status: 'Active'
        }
    ];

    return (
        <VStack spacing={10}>
            <HStack direction={['column', 'row']} alignment="start" justify="space-between">
                <VStack>
                    <Heading level={3} >Users</Heading>
                    <Text>A list of all the users in your account including their name, title, email and role</Text>
                </VStack>
                <Button variant="primary">Add User</Button>
            </HStack>

            <Scrollable scrollDirection="x">
                <TreeGrid className="wpui_table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <TreeGridRow>
                        <TreeGridCell withoutGridItem>
                            <Heading level={4}>Name</Heading>
                        </TreeGridCell>
                        <TreeGridCell withoutGridItem>
                            <Heading level={4}>Title</Heading>
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
                                        <Icon size={60} icon={commentAuthorAvatar} style={{ fill: 'grey' }}></Icon>
                                        <VStack>
                                            <Heading level={5}>{item.name}</Heading>
                                            <Text>{item.email}</Text>
                                        </VStack>
                                    </HStack>
                                )}
                            </TreeGridCell>
                            <TreeGridCell>
                                {(props) => (
                                    <VStack>
                                        <Text size={15}>{item.title}</Text>
                                        <Text >{item.desc}</Text>
                                    </VStack>
                                )}
                            </TreeGridCell>
                            <TreeGridCell>
                                {(props) => (
                                    <Text
                                        style={{
                                            backgroundColor: '#F0FDF4',
                                            color: '#166534',
                                            borderRadius: '5px',
                                            padding: '5px',
                                        }}
                                    >
                                        Active
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
export default Table1;