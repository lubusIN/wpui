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
} from "@wordpress/components";

/**
 * Render Subscription action panel
 */
function Subscription() {
    return (
        <VStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <CardBody>
                    <VStack spacing={6} alignment="baseline">
                        <VStack spacing={3}>
                            <Heading level={3}>Manage Subscription</Heading>
                            <Text size={15} weight={400} variant="muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam.
                            </Text>
                        </VStack>
                        <Button variant="primary">Change Plan</Button>
                    </VStack>
                </CardBody>
            </Card>
        </VStack>
    );
};

export default Subscription;