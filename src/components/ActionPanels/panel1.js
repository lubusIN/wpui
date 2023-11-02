/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Subscription action panel
 */
function Panel1() {
    return (
        <HStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <CardBody>
                    <VStack spacing={6} alignment="baseline">
                        <VStack spacing={3}>
                            <Heading level={3}>Update Your Profile</Heading>
                            <Text size={15} weight={400} variant="muted">
                                Elevate your online presence by personalizing your user profile with the latest information.
                            </Text>
                        </VStack>
                        <Button variant="primary">Update Profile</Button>
                    </VStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

export default Panel1;