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
        <HStack alignment="center">
            <VStack spacing={4}>
                <HStack alignment="left">
                    <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                    <HStack spacing={30}>
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
                    <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                    <HStack spacing={30}>
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
                    <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                    <HStack spacing={30}>
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
                    <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                    <HStack spacing={30}>
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
            </VStack>
        </HStack>
    )
};

export default List4;