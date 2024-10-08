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
 * Render Action panel
 */
function Panel4() {
    return (
        <HStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <CardBody>
                    <VStack spacing={6} alignment="baseline">
                        <VStack spacing={3}>
                            <Heading level={3}>View Email Log</Heading>
                            <Text size={15} weight={400} variant="muted">
                                Review a log of all email notifications sent from your WordPress site.
                            </Text>
                        </VStack>
                        <HStack alignment="stretch" justify="left">
                            <TextControl placeholder="you@example.com" type="date" style={{ width: '25vw', height: '35px', borderRadius: '5px' }}></TextControl>
                            <Button variant="primary" style={{ borderRadius: '5px' }}>View Log</Button>
                        </HStack>
                    </VStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

// @meta-start
Panel4.meta = {
    title: 'Panel 4',
    name:'Panel4',
    category:'ActionPanels',
    path: '/ActionPanels/panel4'
};
// @meta-end

export default Panel4;