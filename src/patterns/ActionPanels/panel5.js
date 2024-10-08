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
 * Render Action panel
 */
function Panel5() {
    return (
        <HStack alignment="center">
            <Card style={{ borderRadius: '8px' }}>
                <CardHeader>
                    <HStack expanded={false} spacing={1}>
                        <Icon icon={preformatted}></Icon>
                        <Heading level={3}>Forms</Heading>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <VStack spacing={5} alignment="baseline">
                        <Text size={15} weight={400} variant="muted" style={{ maxWidth: '600px' }}>
                            Create any form you need by selecting from our pre-made templates or creating your own from scratch.
                        </Text>
                        <Button icon={create} iconSize={30} variant="primary">Create form</Button>
                    </VStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

// @meta-start
Panel5.meta = {
    title: 'Panel 5',
    name: 'Panel5',
    category: 'ActionPanels',
    path: '/ActionPanels/panel5'
};
// @meta-end

export default Panel5;