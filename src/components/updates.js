/**
 * WordPress dependencies.
 */
import {
    Card,
    Button,
    CardBody,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalInputControl as InputControl,
} from "@wordpress/components";

/**
 * Render Newsletter form
 */
function Updates() {
    return (
        <Card isBorderless>
            <CardBody isShady>
                <HStack spacing={5}>
                    <Heading size={30}>
                        Want product news and updates? Sign up for our newsletter
                    </Heading>

                    <VStack spacing={5}>
                        <HStack alignment={'stretch'}>
                            <InputControl
                                type="email"
                                placeholder="Enter your email address"
                                onChange={function noRefCheck() { }}
                            />
                            <Button
                                variant="primary"
                                isPressed
                                onChange={function noRefCheck() { }}
                            >
                                Subscribe
                            </Button>
                        </HStack>

                        <Text>
                            *No ads. No trails. No commitments
                        </Text>
                    </VStack>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default Updates;