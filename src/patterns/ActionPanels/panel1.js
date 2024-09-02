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
                    <HStack direction={['column', 'row']} alignment={'start'} justify='left' >
                        <VStack spacing={3} alignment="baseline">
                            <Heading level={3}>Update Your Profile</Heading>
                            <Text size={15} weight={400} variant="muted" style={{ maxWidth: '600px' }}>
                                Elevate your online presence by personalizing your user profile with the latest information.
                            </Text>
                        </VStack>
                        <Button variant="primary" style={{ minWidth: 'auto' }}>Update Profile</Button>
                    </HStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

// @meta-start
Panel1.meta = {
    title: 'Panel 1',
    name:'Panel1',
    category:'ActionPanels',
    path: '/ActionPanels/panel1',
};
// @meta-end
export default Panel1;