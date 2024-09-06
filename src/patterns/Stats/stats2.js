/**
 * WordPress dependencies.
 */
import {
    Card,
    Icon,
    __experimentalGrid as Grid,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalSurface as Surface
} from "@wordpress/components";
import {
    arrowUp,
    arrowDown
} from "@wordpress/icons";

/**
 * Render Stats
 */
function Stats2() {
    const cardData = [
        {
            title: 'Total Orders',
            current: '71,987',
            previous: '70,900',
            percentage: '12%',
            icon: arrowUp,
            iconColor: '#22C55D',
            textColor: '#176434',
            backgroundColor: '#DCFCE6'
        },
        {
            title: 'Avg. Order Value',
            current: '₹50,000',
            previous: '₹100,000',
            percentage: '10%',
            icon: arrowUp,
            iconColor: '#22C55D',
            textColor: '#176434',
            backgroundColor: '#DCFCE6'
        },
        {
            title: 'Order Conversion Rate',
            current: '24.57%',
            previous: '28.62%',
            percentage: '4.04%',
            icon: arrowDown,
            iconColor: '#B04A48',
            textColor: '#B04A48',
            backgroundColor: '#FDE2E1'
        }
    ];
    return (
        <Card isBorderless isRounded>
            <VStack spacing={5}>
                <Heading level={3}>Last 30 days</Heading>
                <Grid columns={[1, 2, 3]} gap={0}>
                    {cardData.map((data, index) => (
                        <Card key={index} style={{ padding: '20px' }}>
                            <VStack spacing={3}>
                                <Heading level={5} weight={500}>{data.title}</Heading>
                                <HStack>
                                    <HStack justify="left" spacing={1}>
                                        <Heading level={2} color="blue">{data.current}</Heading>
                                        <Text>from {data.previous}</Text>
                                    </HStack>
                                    <Surface
                                        style={{
                                            backgroundColor: data.backgroundColor,
                                            borderRadius: '10px',
                                            padding: '0px 15px 0px 5px'
                                        }}>
                                        <HStack spacing={0}>
                                            <Icon icon={data.icon} fill={data.iconColor} />
                                            <Text color={data.textColor}>{data.percentage}</Text>
                                        </HStack>
                                    </Surface>
                                </HStack>
                            </VStack>
                        </Card>
                    ))}
                </Grid>
            </VStack>
        </Card>
    );
};

// @meta-start
Stats2.meta = {
    title: 'Stats 2',
    name: 'Stats2',
    category: 'Stats',
    path: '/Stats/stats2',
};
// @meta-end

export default Stats2;
