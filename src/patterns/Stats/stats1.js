/**
 * WordPress dependencies.
 */
import {
    arrowUp,
    box,
    trendingUp
} from "@wordpress/icons";

import {
    Card,
    Icon,
    CardBody,
    __experimentalGrid as Grid,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from "@wordpress/components";

/**
 * Render Stats
 */
function Stats1() {
    const cardData = [
        {
            icon: trendingUp,
            title: "Total Sales",
            amount: "₹5,957,551",
            change: "122",
            Color: "green",
        },
        {
            icon: trendingUp,
            title: "Net Sales",
            amount: "₹5,140,956",
            change: "5.4%",
            Color: "green",
        },
        {
            icon: box,
            title: "Orders",
            amount: "300",
            change: "3.2%",
            Color: "green",
        }
    ];
    return (
        <Grid spacing={5} columns={[1, 2, 3]}>
            {cardData.map((data, index) => (
                <Card key={index} style={{ width: '100%' }}>
                    <CardBody>
                        <HStack alignment="left" spacing={6}>
                            <Icon
                                icon={data.icon}
                                fill="white"
                                size={30}
                                style={{ backgroundColor: '#3858e9', borderRadius: '6px', padding: '8px' }} />
                            <VStack>
                                <Text size={18} variant="muted">{data.title}</Text>
                                <HStack>
                                    <Heading level={2}>{data.amount}</Heading>
                                    <HStack alignment="bottomRight" spacing={0}>
                                        <Icon icon={arrowUp} fill={data.Color} />
                                        <Text color={data.Color} size={14}>{data.change}</Text>
                                    </HStack>
                                </HStack>
                            </VStack>
                        </HStack>
                    </CardBody>
                    <CardBody isShady>
                        <Heading level={4}>View all</Heading>
                    </CardBody>
                </Card>
            ))}
        </Grid>
    );
};

// @meta-start
Stats1.meta = {
    title: 'Stats 1',
    name: 'Stats1',
    category: 'Stats',
    path: '/Stats/stats1',
};
// @meta-end

export default Stats1;
