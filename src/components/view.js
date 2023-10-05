import {
    Icon,
    Button,
    CardDivider,
    DropdownMenu,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
    __experimentalGrid as Grid,
} from "@wordpress/components";

import { addCard, edit, moreVertical, trash } from "@wordpress/icons";


export default function View() {
    return (
        <VStack>
            <Grid>
                <VStack>
                    <HStack alignment="left">
                        <Heading level={3}>GraphQL API</Heading>
                        <Text style={{
                            backgroundColor: '#F0FDF4',
                            color: '#38803D',
                            borderRadius: '5px',
                            padding: '7px',
                        }}
                        > Completed</Text>
                    </HStack>
                    <Text>Due on Marh 17,2023 . Created by LUBUS</Text>
                </VStack>
                <HStack alignment="right">
                    <Button variant="secondary">View Project</Button>
                    <DropdownMenu
                        controls={[
                            {
                                icon: <Icon icon={addCard}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Add data'
                            },
                            {
                                icon: <Icon icon={edit}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Edit data'
                            },
                            {
                                icon: <Icon icon={trash}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Delete data'
                            },

                        ]}
                        icon={moreVertical}
                        onToggle={function noRefCheck() { }}
                    />
                </HStack>
            </Grid>
            <CardDivider margin={5}></CardDivider>
            <Grid>
                <VStack>
                    <HStack alignment="left">
                        <Heading level={3}>New Benefits Plan</Heading>
                        <Text style={{
                            backgroundColor: '#F9FAFB',
                            color: 'black',
                            borderRadius: '5px',
                            padding: '7px',
                        }}
                        > In Progress</Text>
                    </HStack>
                    <Text>Due on May 5,2023 . Created by LUBUS</Text>
                </VStack>
                <HStack alignment="right">
                    <Button variant="secondary">View Project</Button>
                    <DropdownMenu
                        controls={[
                            {
                                icon: <Icon icon={addCard}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Add data'
                            },
                            {
                                icon: <Icon icon={edit}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Edit data'
                            },
                            {
                                icon: <Icon icon={trash}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Delete data'
                            },

                        ]}
                        icon={moreVertical}
                        onToggle={function noRefCheck() { }}
                    />
                </HStack>
            </Grid>
            <CardDivider margin={5}></CardDivider>
            <Grid>
                <VStack>
                    <HStack alignment="left">
                        <Heading level={3}>Onboarding Emails</Heading>
                        <Text style={{
                            backgroundColor: '#F9FAFB',
                            color: 'black',
                            borderRadius: '5px',
                            padding: '7px',
                        }}
                        > In Progress</Text>
                    </HStack>
                    <Text>Due on May 25,2023 . Created by LUBUS</Text>
                </VStack>
                <HStack alignment="right">
                    <Button variant="secondary">View Project</Button>
                    <DropdownMenu
                        controls={[
                            {
                                icon: <Icon icon={addCard}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Add data'
                            },
                            {
                                icon: <Icon icon={edit}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Edit data'
                            },
                            {
                                icon: <Icon icon={trash}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Delete data'
                            },

                        ]}
                        icon={moreVertical}
                        onToggle={function noRefCheck() { }}
                    />
                </HStack>
            </Grid>
            <CardDivider margin={5}></CardDivider>
            <Grid>
                <VStack>
                    <HStack alignment="left">
                        <Heading level={3}>iOS app</Heading>
                        <Text style={{
                            backgroundColor: '#F9FAFB',
                            color: 'black',
                            borderRadius: '5px',
                            padding: '7px',
                        }}
                        > In Progress</Text>
                    </HStack>
                    <Text>Due on June 7,2023 . Created by LUBUS</Text>
                </VStack>
                <HStack alignment="right">
                    <Button variant="secondary">View Project</Button>
                    <DropdownMenu
                        controls={[
                            {
                                icon: <Icon icon={addCard}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Add data'
                            },
                            {
                                icon: <Icon icon={edit}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Edit data'
                            },
                            {
                                icon: <Icon icon={trash}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Delete data'
                            },

                        ]}
                        icon={moreVertical}
                        onToggle={function noRefCheck() { }}
                    />
                </HStack>
            </Grid>
            <CardDivider margin={5}></CardDivider>
            <Grid>
                <VStack>
                    <HStack alignment="left">
                        <Heading level={3}>Site Redesign</Heading>
                        <Text style={{
                            backgroundColor: '#FEFCE8',
                            color: '#894D0E',
                            borderRadius: '5px',
                            padding: '7px',
                        }}
                        >Archived</Text>
                    </HStack>
                    <Text>Due on June 10,2023 . Created by LUBUS</Text>
                </VStack>
                <HStack alignment="right">
                    <Button variant="secondary">View Project</Button>
                    <DropdownMenu
                        controls={[
                            {
                                icon: <Icon icon={addCard}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Add data'
                            },
                            {
                                icon: <Icon icon={edit}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Edit data'
                            },
                            {
                                icon: <Icon icon={trash}></Icon>,
                                onClick: function noRefCheck() { },
                                title: 'Delete data'
                            },

                        ]}
                        icon={moreVertical}
                        onToggle={function noRefCheck() { }}
                    />
                </HStack>
            </Grid>
        </VStack>
    );
}