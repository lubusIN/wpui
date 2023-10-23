import {
    Icon,
    Card,
    CardBody,
    CardHeader,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { commentAuthorAvatar, moreVertical } from "@wordpress/icons";

function CardHeading2() {
    return (
        <Card>
            <CardBody>
                <VStack spacing={2}>
                    <HStack>
                        <Icon size={35} icon={commentAuthorAvatar}></Icon>
                        <HStack>
                            <VStack spacing={0}>
                                <Heading level={5}>Chelsea Hogan</Heading>
                                <Text>December 9 at 11:43 AM</Text>
                            </VStack>
                            <Icon icon={moreVertical}></Icon>
                        </HStack>
                    </HStack>
                    <Text color="#E6E8EB">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </VStack>
            </CardBody>
        </Card>
    );
}

export default CardHeading2;