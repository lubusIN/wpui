import {
    Icon,
    Button,
    CardDivider,
    __experimentalGrid as Grid,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,


} from "@wordpress/components";
import { commentAuthorAvatar } from "@wordpress/icons";


export default function Users() {
    return (
        <VStack >
            <HStack>
                <VStack>
                    <Heading level={3} >Users</Heading>
                    <Text>A list of all the users in your account including their name, title, email and role</Text>
                </VStack>
                <Button variant="primary">Add User</Button>
            </HStack>

            <VStack style={{ marginTop: '40px' }}>
                <Grid
                    alignment="center"
                    columns={5}
                    templateColumns="2fr 1fr 1fr 1fr 1fr"
                    gap={20}
                >
                    <Heading level={4}>Name</Heading>
                    <Heading level={4}>Title</Heading>
                    <Heading level={4}>Status</Heading>
                    <Heading level={4}>Role</Heading>
                </Grid>
                <CardDivider margin={2} />
                <Grid
                    alignment="center"
                    columns={5}
                    templateColumns="2fr 1fr 1fr 1fr 1fr"
                    gap={20}
                >
                    <HStack alignment="left">
                        <Icon size={60} icon={commentAuthorAvatar}></Icon>
                        <VStack>
                            <Heading level={5}>Wordpress</Heading>
                            <Text>xyz@example.com</Text>
                        </VStack>
                    </HStack>

                    <VStack>
                        <Text size={15}>Front-end Developer</Text>
                        <Text >Optimization</Text>
                    </VStack>


                    <div>
                        <Text
                            style={{
                                backgroundColor: '#90FEBF',
                                color: 'green',
                                borderRadius: '5px',
                                padding: '5px',
                            }}
                        >
                            Active
                        </Text>
                    </div>

                    <Text>Member</Text>

                    <Button variant="tertiary">Edit</Button>
                </Grid>
                <CardDivider margin={2} />
                <Grid
                    alignment="center"
                    columns={5}
                    templateColumns="2fr 1fr 1fr 1fr 1fr"
                    gap={20}
                >
                    <HStack alignment="left">
                        <Icon size={60} icon={commentAuthorAvatar}></Icon>
                        <VStack>
                            <Heading level={5}>Wordpress</Heading>
                            <Text>xyz@example.com</Text>
                        </VStack>
                    </HStack>

                    <VStack>
                        <Text size={15}>Design</Text>
                        <Text>Intranet</Text>
                    </VStack>


                    <div>
                        <Text
                            style={{
                                backgroundColor: '#90FEBF',
                                color: 'green',
                                borderRadius: '5px',
                                padding: '5px',
                            }}
                        >
                            Active
                        </Text>
                    </div>

                    <Text>Admin</Text>

                    <Button variant="tertiary">Edit</Button>
                </Grid>
                <CardDivider margin={2} />
                <Grid
                    alignment="center"
                    columns={5}
                    templateColumns="2fr 1fr 1fr 1fr 1fr"
                    gap={20}
                >
                    <HStack alignment="left">
                        <Icon size={60} icon={commentAuthorAvatar}></Icon>
                        <VStack>
                            <Heading level={5}>Wordpress</Heading>
                            <Text>xyz@example.com</Text>
                        </VStack>
                    </HStack>

                    <VStack>
                        <Text size={15}>Director of Products</Text>
                        <Text>Directives</Text>
                    </VStack>


                    <div>
                        <Text
                            style={{
                                backgroundColor: '#90FEBF',
                                color: 'green',
                                borderRadius: '5px',
                                padding: '5px',
                            }}
                        >
                            Active
                        </Text>
                    </div>

                    <Text>Member</Text>

                    <Button variant="tertiary">Edit</Button>
                </Grid>
                <CardDivider margin={2} />
                <Grid
                    alignment="center"
                    columns={5}
                    templateColumns="2fr 1fr 1fr 1fr 1fr"
                    gap={20}
                >
                    <HStack alignment="left">
                        <Icon size={60} icon={commentAuthorAvatar}></Icon>
                        <VStack>
                            <Heading level={5}>Wordpress</Heading>
                            <Text>xyz@example.com</Text>
                        </VStack>
                    </HStack>

                    <VStack>
                        <Text size={15}>Copywriter</Text>
                        <Text>Program</Text>
                    </VStack>


                    <div>
                        <Text
                            style={{
                                backgroundColor: '#90FEBF',
                                color: 'green',
                                borderRadius: '5px',
                                padding: '5px',
                            }}
                        >
                            Active
                        </Text>
                    </div>

                    <Text>Admin</Text>

                    <Button variant="tertiary">Edit</Button>
                </Grid>
                <CardDivider margin={2} />
                <Grid
                    alignment="center"
                    columns={5}
                    templateColumns="2fr 1fr 1fr 1fr 1fr"
                    gap={20}
                >
                    <HStack alignment="left">
                        <Icon size={60} icon={commentAuthorAvatar}></Icon>
                        <VStack>
                            <Heading level={5}>Wordpress</Heading>
                            <Text>xyz@example.com</Text>
                        </VStack>
                    </HStack>

                    <VStack>
                        <Text size={15}>Senior Designer</Text>
                        <Text>Mobility</Text>
                    </VStack>


                    <div>
                        <Text
                            style={{
                                backgroundColor: '#90FEBF',
                                color: 'green',
                                borderRadius: '5px',
                                padding: '5px',
                            }}
                        >
                            Active
                        </Text>
                    </div>

                    <Text>Owner</Text>

                    <Button variant="tertiary">Edit</Button>
                </Grid>
                <CardDivider margin={2} />
                <Grid
                    alignment="center"
                    columns={5}
                    templateColumns="2fr 1fr 1fr 1fr 1fr"
                    gap={20}
                >
                    <HStack alignment="left">
                        <Icon size={60} icon={commentAuthorAvatar}></Icon>
                        <VStack>
                            <Heading level={5}>Wordpress</Heading>
                            <Text>xyz@example.com</Text>
                        </VStack>
                    </HStack>

                    <VStack>
                        <Text size={15}>Principle Designer</Text>
                        <Text>Security</Text>
                    </VStack>


                    <div>
                        <Text
                            style={{
                                backgroundColor: '#90FEBF',
                                color: 'green',
                                borderRadius: '5px',
                                padding: '5px',
                            }}
                        >
                            Active
                        </Text>
                    </div>

                    <Text>Member</Text>

                    <Button variant="tertiary">Edit</Button>
                </Grid>
            </VStack>
        </VStack >
    );
}