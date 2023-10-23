/**
 * WordPress dependencies.
 */
import {
    Icon,
    Card,
    CardBody,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { commentAuthorAvatar, } from "@wordpress/icons";

/**
 * Render Cards
 */
function Grid2() {
    return (
        <Card isRounded>
            <CardBody isShady >
                <VStack>
                    <HStack alignment="center">
                        <Card style={{ width: '400px' }} isRounded>
                            <CardBody>
                                <HStack alignment="left">
                                    <Icon size={35} icon={commentAuthorAvatar}></Icon>
                                    <VStack>
                                        <Heading level={5}>Ajit Bohra</Heading>
                                        <Text>Founder</Text>
                                    </VStack>
                                </HStack>
                            </CardBody>
                        </Card>
                        <Card style={{ width: '400px' }} isRounded>
                            <CardBody>
                                <HStack alignment="left">
                                    <Icon size={35} icon={commentAuthorAvatar}></Icon>
                                    <VStack>
                                        <Heading level={5}>Pravin Prajapati</Heading>
                                        <Text>Founder</Text>
                                    </VStack>
                                </HStack>
                            </CardBody>
                        </Card>
                    </HStack>
                    <HStack alignment="center">
                        <Card style={{ width: '400px' }} isRounded>
                            <CardBody>
                                <HStack alignment="left">
                                    <Icon size={35} icon={commentAuthorAvatar}></Icon>
                                    <VStack>
                                        <Heading level={5}>Punit Verma</Heading>
                                        <Text>Developer</Text>
                                    </VStack>
                                </HStack>
                            </CardBody>
                        </Card>
                        <Card style={{ width: '400px' }} isRounded>
                            <CardBody>
                                <HStack alignment="left">
                                    <Icon size={35} icon={commentAuthorAvatar}></Icon>
                                    <VStack>
                                        <Heading level={5}>Nikhil Sharma</Heading>
                                        <Text>React Developer</Text>
                                    </VStack>
                                </HStack>
                            </CardBody>
                        </Card>
                    </HStack>
                </VStack>
            </CardBody>
        </Card>
    );
};

export default Grid2;