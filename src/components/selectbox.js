import {
    Card,
    Icon,
    CardBody,
    MenuGroup,
    MenuItem,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from "@wordpress/components";

export default function SelectBox() {
    return (
        <VStack spacing={4}>
            <Heading align="left" level={3}>Select a mailing list</Heading>

            <MenuGroup >
                <HStack spacing={3}>

                    <MenuItem>
                        <Card>
                            <CardBody>
                                <Heading level={4}>Newsletter</Heading>
                                <Text>Last message sent an hour ago</Text>
                            </CardBody>
                            <CardBody>
                                <Heading level={4}>621 users</Heading>
                            </CardBody>
                        </Card>
                    </MenuItem>

                    <MenuItem>
                        <Card>
                            <CardBody>
                                <Heading level={4}>Existing Customer</Heading>
                                <Text>Last message sent 2 weeks ago</Text>
                            </CardBody>
                            <CardBody>
                                <Heading level={4}>1200 users</Heading>
                            </CardBody>
                        </Card>
                    </MenuItem>

                    <MenuItem>
                        <Card>
                            <CardBody>
                                <Heading level={4}>Trial Users</Heading>
                                <Text>Last message sent 4 days ago</Text>
                            </CardBody>
                            <CardBody><Heading level={4}>2740 users</Heading></CardBody>
                        </Card>
                    </MenuItem>

                </HStack>
            </MenuGroup >

        </VStack >
    );
}