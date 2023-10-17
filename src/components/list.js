/**
 * WordPress dependencies.
 */
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

/**
 * Render Stacked List View
 */
function List() {

    const controls = [
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

    ];

    return (
        <VStack>
            <Grid>
                <VStack>
                    <HStack alignment="left">
                        <Heading level={4}>GraphQL API</Heading>
                        <Text color="#166434" weight={600} style={{
                            backgroundColor: '#EFFDF4',
                            borderRadius: '4px',
                            padding: '5px',
                        }}
                        >
                            Published
                        </Text>
                    </HStack>
                    <Text>Due on Marh 17,2023 . Created by LUBUS</Text>
                </VStack>
                <HStack alignment="right">
                    <Button variant="secondary">View Project</Button>
                    <DropdownMenu
                        controls={controls}
                        icon={moreVertical}
                        onToggle={function noRefCheck() { }}
                    />
                </HStack>
            </Grid>
            <CardDivider margin={5}></CardDivider>
            <Grid>
                <VStack>
                    <HStack alignment="left">
                        <Heading level={4}>New Benefits Plan</Heading>
                        <Text color="#4B5563" weight={600} style={{
                            backgroundColor: '#F9FAFB',
                            borderRadius: '4px',
                            padding: '5px',
                        }}
                        >Pending</Text>
                    </HStack>
                    <Text>Due on May 5,2023 . Created by LUBUS</Text>
                </VStack>
                <HStack alignment="right">
                    <Button variant="secondary">View Project</Button>
                    <DropdownMenu
                        controls={controls}
                        icon={moreVertical}
                        onToggle={function noRefCheck() { }}
                    />
                </HStack>
            </Grid>
            <CardDivider margin={5}></CardDivider>
            <Grid>
                <VStack>
                    <HStack alignment="left">
                        <Heading level={4}>Onboarding Emails</Heading>
                        <Text color="#4B5563" weight={600} style={{
                            backgroundColor: '#F9FAFB',
                            borderRadius: '4px',
                            padding: '5px',
                        }}
                        >Pending</Text>
                    </HStack>
                    <Text>Due on May 25,2023 . Created by LUBUS</Text>
                </VStack>
                <HStack alignment="right">
                    <Button variant="secondary">View Project</Button>
                    <DropdownMenu
                        controls={controls}
                        icon={moreVertical}
                        onToggle={function noRefCheck() { }}
                    />
                </HStack>
            </Grid>
            <CardDivider margin={5}></CardDivider>
            <Grid>
                <VStack>
                    <HStack alignment="left">
                        <Heading level={4}>Site Redesign</Heading>
                        <Text color="#A16207" weight={600} style={{
                            backgroundColor: '#FEFCE8',
                            borderRadius: '4px',
                            padding: '5px',
                        }}
                        >Draft</Text>
                    </HStack>
                    <Text>Due on June 10,2023 . Created by LUBUS</Text>
                </VStack>
                <HStack alignment="right">
                    <Button variant="secondary">View Project</Button>
                    <DropdownMenu
                        controls={controls}
                        icon={moreVertical}
                        onToggle={function noRefCheck() { }}
                    />
                </HStack>
            </Grid>
        </VStack>
    );
};

export default List;