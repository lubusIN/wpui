/**
 * WordPress dependencies.
 */
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
import { arrowRight } from '@wordpress/icons';

/**
 * Render Action panel
 */
function Panel2() {
    return (
        <HStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <CardBody>
                    <VStack spacing={3} alignment="left">
                        <Heading level={3}>View Site Analytics</Heading>
                        <Text size={15} weight={400} variant="muted" style={{ maxWidth: '600px' }}>
                            Gain insights into your website's performance, track visitor behavior, and measure engagement with our comprehensive analytics tool.
                        </Text>
                        <Button style={{ padding: 0 }}>
                            <Text size={14} weight={600} as={"a"} href="https://wordpress.org" color='#3858E9' style={{ textDecoration: 'none' }} >
                                Explore Analytics
                            </Text>
                            <Icon icon={arrowRight} color="#3858E9"></Icon>
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