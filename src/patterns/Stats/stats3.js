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
    const statData = [
        {
            label: 'Total Orders',
            value: '71,987'
        },
        {
            label: 'Avg. Order Value',
            value: '₹100,000'
        },
        {
            label: 'Order Conversion Rate',
            value: '24.57%'
        }
    ];
    return (
        <Card isBorderless isRounded>
            <VStack spacing={5}>
                <Heading level={3}>Last 30 days</Heading>
                <Grid columns={[1, 2, 3]} gap={0}>
                    {statData.map((stat, index) => (
                        <Card key={index}>
                            <CardBody>
                                <VStack>
                                    <Text size={14}>{stat.label}</Text>
                                    <Heading level={2}>{stat.value}</Heading>
                                </VStack>
                            </CardBody>
                        </Card>
                    ))}
                </Grid>
            </VStack>
        </Card>
    );
};

// @meta-start
Stats3.meta = {
    title: 'Stats 3',
    name: 'Stats3',
    category: 'Stats',
    path: '/Stats/stats3',
};
// @meta-end

export default Stats3;
