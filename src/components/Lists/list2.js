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
} from "@wordpress/components";
import { commentAuthorAvatar } from "@wordpress/icons";

/**
 * Render Stacked List View
 */
function List2() {
    return (
        <VStack alignment="center" spacing={4}>
            <HStack alignment="center">
                <Icon size={40} icon={commentAuthorAvatar}></Icon>
                <VStack>
                    <HStack>
                        <Heading level={4}>Ajit Bohra</Heading>
                        <Text>1d ago</Text>
                    </HStack>
                    <Text variant="muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                </VStack>
            </HStack>

            <CardDivider margin={3} />

            <HStack alignment="center">
                <Icon size={40} icon={commentAuthorAvatar}></Icon>
                <VStack>
                    <HStack>
                        <Heading level={4}>Pravin Prajapati</Heading>
                        <Text>2d ago</Text>
                    </HStack>
                    <Text variant="muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                </VStack>
            </HStack>

            <CardDivider margin={3} />

            <HStack alignment="center">
                <Icon size={40} icon={commentAuthorAvatar}></Icon>
                <VStack>
                    <HStack>
                        <Heading level={4}>Punit Verma</Heading>
                        <Text>2d ago</Text>
                    </HStack>
                    <Text variant="muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                </VStack>
            </HStack>

            <CardDivider margin={3} />

            <HStack alignment="center">
                <Icon size={40} icon={commentAuthorAvatar}></Icon>
                <VStack>
                    <HStack>
                        <Heading level={4}>Nikhil Sharma</Heading>
                        <Text>3d ago</Text>
                    </HStack>
                    <Text variant="muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                </VStack>
            </HStack>
        </VStack>
    )
};

export default List2;