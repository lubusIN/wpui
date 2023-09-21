'use client';

import {
    Card,
    Icon,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from "@wordpress/components";

export default function SelectBox() {
    return (
        <VStack spacing={4}>
            <Heading align="left" level={3}>Select a mailing list</Heading>
            <HStack spacing={3}>
                <Card>
                    <CardBody>
                        <Heading level={4}>Newsletter</Heading>
                        <Text >Last message sent an hour ago</Text>
                    </CardBody>
                    <CardBody> <Heading level={4}>621 users</Heading></CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Heading level={4}>Existing Customer</Heading>
                        <Text>Last message sent 2 weeks ago</Text>
                    </CardBody>
                    <CardBody><Heading level={4}>1200 users</Heading></CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <HStack>
                            <Heading level={4}>Trial Users</Heading>
                            <Icon
                                color="blue"
                                size={20}
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm-.615 12.66h-1.34l-3.24-4.54l1.341-1.25l2.569 2.4l5.141-5.931l1.34.94l-5.811 8.381z" /></svg>}
                            ></Icon>
                        </HStack>
                        <Text>Last message sent 4 days ago</Text>
                    </CardBody>
                    <CardBody><Heading level={4}>2740 users</Heading></CardBody>
                </Card>

            </HStack>
        </VStack>
    );
}