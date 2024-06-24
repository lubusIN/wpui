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
                    <VStack spacing={6} alignment="left">
                        <VStack spacing={3}>
                            <Heading level={3}>View Site Analytics</Heading>
                            <Text size={15} weight={400} variant="muted">
                                Gain insights into your website's performance, track visitor behavior, and measure engagement with our comprehensive analytics tool.
                            </Text>
                        </VStack>

                        <Button style={{ padding: 0 }}>
                            <Text size={14} weight={600} as={"a"} href="https://wordpress.org" color='blue' style={{ textDecoration: 'none' }} >
                                Explore Analytics
                            </Text>
                            <Icon icon={arrowRight} color="blue"></Icon>
                        </Button>

                    </VStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

export default Panel2;