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
            current: '11,204',
            percentage: '5.0%',
            icon: arrowUp,
            iconColor: '#22C55D',
            textColor: '#176434',
            backgroundColor: '#DCFCE6'
        },
        {
            title: 'Avg. Order Value',
            current: '78.80%',
            percentage: '2.0%',
            icon: arrowUp,
            iconColor: '#22C55D',
            textColor: '#176434',
            backgroundColor: '#DCFCE6'
        },
        {
            title: 'Order Conversion Rate',
            current: '12.43%',
            percentage: '2.05%',
            icon: arrowDown,
            iconColor: '#B04A48',
            textColor: '#B04A48',
            backgroundColor: '#FDE2E1'
        }
    ];
    return (
        <Card isBorderless isRounded>
            <VStack spacing={5}>
                <Heading level={3}>Last 7 days</Heading>
                <Grid columns={[1, 2, 3]} gap={0}>
                    {cardData.map((data, index) => (
                        <Card key={index} style={{ padding: '20px' }}>
                            <VStack spacing={2}>
                                <Heading level={5} weight={500}>{data.title}</Heading>
                                <HStack>
                                    <Heading level={2} color="#3858E9">{data.current}</Heading>
                                    <Surface
                                        style={{
                                            backgroundColor: data.backgroundColor,
                                            padding: '0px 15px 0px 5px'
                                        }}>
                                        <HStack spacing={0}>
                                            <Icon icon={data.icon} fill={data.iconColor} />
                                            <Text weight={500} color={data.textColor}>{data.percentage}</Text>
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
