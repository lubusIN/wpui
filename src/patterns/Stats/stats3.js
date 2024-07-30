/**
 * WordPress dependencies.
 */
import {
    Card,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalGrid as Grid,
    __experimentalVStack as VStack,

} from "@wordpress/components";

/**
 * Render Stats
 */
function Stats3() {
    return (
        <Card isBorderless isRounded>
            <VStack spacing={5}>
                <Heading level={3}>Last 30 days</Heading>
                <Grid columns={[1, 2, 3]} gap={0}>
                    <Card>
                        <CardBody>
                            <VStack>
                                <Text size={14}>Total Orders</Text>
                                <Heading level={2}>71,987</Heading>
                            </VStack>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <VStack>
                                <Text size={14}>Avg. Order Value</Text>
                                <Heading level={2}>₹100,000</Heading>
                            </VStack>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <VStack>
                                <Text size={14}>Order Conversion Rate</Text>
                                <Heading level={2}>24.57%</Heading>
                            </VStack>
                        </CardBody>
                    </Card>
                </Grid>
            </VStack>
        </Card>
    );
};

// @meta-start
Stats3.meta = {
    title: 'Stats 3',
    name:'Stats3',
    category:'Stats',
    path: '/Stats/stats3',
};
// @meta-end

export default Stats3;