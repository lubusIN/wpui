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
    CardFooter,
} from "@wordpress/components";
import {
    arrowUp,
    arrowDown,
    trendingUp
} from "@wordpress/icons";

/**
 * Render Stats
 */
function Stats4() {
    const cardData = [
        {
            title: 'Total Orders',
            current: '11,204',
            percentage: '48%',
            icon: arrowUp,
            iconColor: '#22C55D',
        },
        {
            title: 'Avg. Order Value',
            current: '34.27%',
            percentage: '2.6%',
            icon: arrowUp,
            iconColor: '#22C55D',
        },
        {
            title: 'Order Conversion Rate',
            current: '12.56%',
            percentage: '1.8%',
            icon: arrowDown,
            iconColor: '#B04A48',
        }
    ];
    return (
        <Card isBorderless isRounded>
            <VStack spacing={5}>
                <Heading level={3}>Last 7 Days</Heading>
                <Grid columns={[1, 2, 3]} gap={6}>
                    {cardData.map((data, index) => (
                        <VStack spacing={0}>
                            <Card isBorderless key={index} style={{ padding: '20px' }}>
                                <HStack alignment="left" spacing={3}>
                                    <Icon icon={trendingUp} fill="white" size={45}
                                        style={{ backgroundColor: '#6366F1', borderRadius: '6px' }} >
                                    </Icon>
                                    <VStack expanded={false} spacing={1}>
                                        <Heading level={5} weight={500} variant='muted'>{data.title}</Heading>
                                        <HStack justify="left" expanded={false} spacing={0}>
                                            <Heading level={2}>{data.current}</Heading>
                                            <Icon icon={data.icon} fill={data.iconColor} size={20} />
                                            <Text weight={800} color={data.iconColor}>{data.percentage}</Text>
                                        </HStack>
                                    </VStack>
                                </HStack>
                            </Card>
                            <CardFooter isShady style={{ padding: '10px' }}>
                                <Text weight={500} color="#4F46E5">Call to action</Text>
                            </CardFooter>
                        </VStack>
                    ))}
                </Grid>
            </VStack>
        </Card>
    );
};

// @meta-start
Stats4.meta = {
    title: 'Stats 4',
    name: 'Stats4',
    category: 'Stats',
    path: '/Stats/stats4',
};
// @meta-end

export default Stats4;
