/**
 * WordPress dependencies.
 */
import { arrowRight } from '@wordpress/icons';
import {
    Button,
    Card,
    Icon,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Subscription action panel
 */
function Panel2() {
    return (
        <HStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <CardBody>
                    <VStack alignment="left">
                        <VStack spacing={3}>
                            <Heading level={3}>Lorem ipsum</Heading>
                            <Text size={15} weight={400} variant="muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, totam at reprehenderit maxime aut beatae ad.
                            </Text>
                        </VStack>
                        <Button style={{ padding: 0 }}>
                            <Text size={14} weight={600} as={"a"} color='#0064ff' style={{ textDecoration: 'none' }} >
                                Lorem ipsum
                            </Text>
                            <Icon icon={arrowRight} color="#0064ff"></Icon>
                        </Button>
                    </VStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

// @meta-start
Panel2.meta = {
    title: 'Panel 2',
    name: 'Panel2',
    category: 'ActionPanels',
    path: '/ActionPanels/panel2',
};
// @meta-end
export default Panel2;