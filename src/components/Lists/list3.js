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
    Button,
    CardBody,
} from "@wordpress/components";
import { commentAuthorAvatar } from "@wordpress/icons";

/**
 * Render Stacked List View
 */
function List2() {
    return (
        <CardBody>
            <VStack alignment="center" spacing={6}>
                <HStack alignment="left" >
                    <Icon size={40} icon={commentAuthorAvatar}></Icon>
                    <HStack>
                        <VStack>
                            <Heading level={4}>Ajit Bohra</Heading>
                            <Text>Ajit@example.com</Text>
                        </VStack>
                        <Button
                            variant="secondary"
                            style={{ borderRadius: '15px' }}
                        >View</Button>
                    </HStack>
                </HStack>

                <CardDivider margin={2} />

                <HStack alignment="center" >
                    <Icon size={40} icon={commentAuthorAvatar}></Icon>
                    <HStack>
                        <VStack>
                            <Heading level={4}>Pravin Prajapati</Heading>
                            <Text>Pravin@example.com</Text>
                        </VStack>
                        <Button
                            variant="secondary"
                            style={{ borderRadius: '15px' }}
                        >View</Button>
                    </HStack>
                </HStack>

                <CardDivider margin={2} />
                <HStack alignment="center" >
                    <Icon size={40} icon={commentAuthorAvatar}></Icon>
                    <HStack>
                        <VStack>
                            <Heading level={4}>Punit Verma</Heading>
                            <Text>Punit@example.com</Text>
                        </VStack>
                        <Button
                            variant="secondary"
                            style={{ borderRadius: '15px' }}
                        >View</Button>
                    </HStack>
                </HStack>

                <CardDivider margin={2} />

                <HStack alignment="center" >
                    <Icon size={40} icon={commentAuthorAvatar}></Icon>
                    <HStack>
                        <VStack>
                            <Heading level={4}>Nikhil Sharma</Heading>
                            <Text>Nikhil@example.com</Text>
                        </VStack>
                        <Button
                            variant="secondary"
                            style={{ borderRadius: '15px' }}
                        >View</Button>
                    </HStack>
                </HStack>
                <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }} text="View All"></Button>
            </VStack>
        </CardBody>
    )
};

export default List2;