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

import { addCard, edit, moreVertical, trash, wordpress } from "@wordpress/icons";


export default function View() {
    return (
        <VStack>
            <Grid>
                <VStack>
                    <HStack alignment="left">
                        <Heading>GraphQL API</Heading>
                        <Text style={{
                            backgroundColor: '#90FEBF',
                            color: 'green',
                            borderRadius: '5px',
                            padding: '5px',
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
                        <Heading>New Benefits Plan</Heading>
                        <Text style={{
                            backgroundColor: '#D3DFD8',
                            color: 'black',
                            borderRadius: '5px',
                            padding: '5px',
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
                        <Heading>Onboarding Emails</Heading>
                        <Text style={{
                            backgroundColor: '#D3DFD8',
                            color: 'black',
                            borderRadius: '5px',
                            padding: '5px',
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
                        <Heading>iOS app</Heading>
                        <Text style={{
                            backgroundColor: '#D3DFD8',
                            color: 'black',
                            borderRadius: '5px',
                            padding: '5px',
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
                        <Heading>Site Redesign</Heading>
                        <Text style={{
                            backgroundColor: '#F7CB83',
                            color: '#39280E',
                            borderRadius: '5px',
                            padding: '5px',
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