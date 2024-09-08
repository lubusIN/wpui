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
    DropdownMenu
} from "@wordpress/components";
import { arrowUp, arrowDown, trendingUp, moreVertical, trendingDown } from "@wordpress/icons";

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
            backgroundColor: '#DCFCE6'
        },
        {
            title: 'Avg. Order Value',
            current: '34.27%',
            percentage: '2.6%',
            icon: arrowUp,
            iconColor: '#22C55D',
            backgroundColor: '#DCFCE6'
        },
        {
            title: 'Order Conversion Rate',
            current: '12.56%',
            percentage: '1.8%',
            icon: arrowDown,
            iconColor: '#B04A48',
            backgroundColor:'#FDE2E1'
        }
    ];
    return (
        <Card isBorderless isRounded>
            <VStack spacing={5}>
                <Heading level={3}>Last 7 Days</Heading>
                <Grid columns={[1, 2, 3]} gap={5}>
                    {cardData.map((data, index) => (
                        <Card key={index} style={{ padding: '20px' }}>
                            <VStack alignment="left" spacing={3}>
                                <HStack>
                                    <Icon icon={trendingUp} fill="white" size={45}
                                        style={{ backgroundColor: '#6366F1', borderRadius: '6px' }} >
                                    </Icon>
                                    <DropdownMenu
                                        icon={moreVertical}
                                        label="Select a direction"
                                        controls={[
                                            {
                                                title: 'Buy',
                                                icon: trendingUp,
                                            },
                                            {
                                                title: 'Sell',
                                                icon: trendingDown,
                                            },
                                        ]}
                                    />
                                </HStack>
                                <VStack expanded={false} spacing={1}>
                                    <Heading level={5} weight={500} variant='muted'>{data.title}</Heading>
                                    <HStack>
                                        <Heading level={2}>{data.current}</Heading>
                                        <HStack expanded={false} spacing={0}>
                                            <Icon icon={data.icon} fill={data.iconColor} size={20}
                                                style={{ backgroundColor: data.backgroundColor }} />
                                            <Text weight={800} color={data.iconColor}>{data.percentage}</Text>
                                        </HStack>
                                    </HStack>
                                </VStack>
                            </VStack>
                        </Card>
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