/**
 * WordPress dependencies.
 */
import {
    Icon,
    Button,
    Card,
    CardHeader,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { create, preformatted } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Panel6() {
    return (
        <HStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <CardHeader>
                    <HStack expanded={false} spacing={1}>
                        <Icon icon={preformatted}></Icon>
                        <Heading level={3}>Forms</Heading>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <VStack spacing={5} alignment="baseline">
                        <VStack spacing={2}>
                            <Text size={15} weight={400} variant="muted">
                                Create any form you need by selecting from our pre-made templates or creating your own from scratch.
                            </Text>
                        </VStack>
                        <Button icon={create} iconSize={30} variant="primary">Create form</Button>
                    </VStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

// @meta-start
Panel6.meta = {
    title: 'Panel 6',
    name: 'Panel6',
    category: 'ActionPanels',
    path: '/ActionPanels/panel6'
};
// @meta-end

export default Panel6;