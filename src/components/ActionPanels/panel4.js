/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    CardBody,
    TextControl,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Subscription action panel
 */
function Panel4() {
    return (
        <VStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <CardBody>
                    <VStack spacing={6} alignment="baseline">
                        <VStack spacing={3}>
                            <Heading level={3}>Update your email</Heading>
                            <Text size={15} weight={400} variant="muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit Explicabo totam non.</Text>
                        </VStack>
                        <HStack alignment="stretch" justify="left">
                            <TextControl placeholder="you@example.com" type="email" style={{ width: '48vmin', height: '35px', borderRadius: '5px' }}></TextControl>
                            <Button variant="primary" style={{ borderRadius: '5px' }}>Save</Button>
                        </HStack>
                    </VStack>
                </CardBody>
            </Card>
        </VStack>
    );
};

export default Panel4;