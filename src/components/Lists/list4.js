/**
 * WordPress dependencies.
 */
import {
    Icon,
    CardDivider,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
    CardBody,
} from "@wordpress/components";
import { commentAuthorAvatar } from "@wordpress/icons";

/**
 * Render Stacked List View
 */
function List4() {
    return (
        <CardBody>
            <VStack alignment="center" spacing={4}>
                <HStack alignment="left">
                    <Icon size={40} icon={commentAuthorAvatar}></Icon>
                    <HStack>
                        <VStack>
                            <Heading level={4}>Ajit Bohra</Heading>
                            <Text variant="muted">Ajit@example.com</Text>
                        </VStack>
                        <VStack alignment="right">
                            <Text size={15}>Founder</Text>
                            <Text variant="muted">Last seen 3h ago</Text>
                        </VStack>
                    </HStack>
                </HStack>

                <CardDivider></CardDivider>

                <HStack alignment="left">
                    <Icon size={40} icon={commentAuthorAvatar}></Icon>
                    <HStack>
                        <VStack>
                            <Heading level={4}>Pravin Prajapati</Heading>
                            <Text variant="muted">Pravin@example.com</Text>
                        </VStack>
                        <VStack alignment="right">
                            <Text size={15}>Founder</Text>
                            <Text variant="muted">Last seen 2h ago</Text>
                        </VStack>
                    </HStack>
                </HStack>

                <CardDivider></CardDivider>

                <HStack alignment="left">
                    <Icon size={40} icon={commentAuthorAvatar}></Icon>
                    <HStack>
                        <VStack>
                            <Heading level={4}>Punit Verma</Heading>
                            <Text variant="muted">Punit@example.com</Text>
                        </VStack>
                        <VStack alignment="right">
                            <Text size={15}>Developer</Text>
                            <Icon></Icon>
                        </VStack>
                    </HStack>
                </HStack>

                <CardDivider></CardDivider>

                <HStack alignment="left">
                    <Icon size={40} icon={commentAuthorAvatar}></Icon>
                    <HStack>
                        <VStack>
                            <Heading level={4}>Nikhil Sharma</Heading>
                            <Text variant="muted">Nikhil@example.com</Text>
                        </VStack>
                        <VStack alignment="right">
                            <Text size={15}>React Developer</Text>
                            <Text variant="muted">Last seen 1h ago</Text>
                        </VStack>
                    </HStack>
                </HStack>
            </VStack>
        </CardBody>
    )
};

export default List4;