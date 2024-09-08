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
    return (
        <Grid spacing={5} columns={[1, 2, 3]}>
            <Card style={{ width: '100%' }}>
                <CardBody>
                    <HStack alignment="left" spacing={6}>
                        <Icon
                            icon={trendingUp}
                            fill="white"
                            size={30}
                            style={{ backgroundColor: '#3858e9', borderRadius: '6px', padding: '8px' }}
                        ></Icon>
                        <VStack>
                            <Text size={18} variant="muted">Total Sales</Text>
                            <HStack>
                                <Heading level={2}>₹5,957,551</Heading>
                                <HStack alignment="bottomRight" spacing={0}>
                                    <Icon icon={arrowUp} fill="green" />
                                    <Text color="green" size={14}>122</Text>
                                </HStack>
                            </HStack>
                        </VStack>
                    </HStack>
                </CardBody>
                <CardBody isShady>
                    <Heading level={4}>View all</Heading>
                </CardBody>
            </Card>
            <Card style={{ width: '100%' }}>
                <CardBody>
                    <HStack alignment="left" spacing={6}>
                        <Icon
                            icon={trendingUp}
                            fill="white"
                            size={30}
                            style={{ backgroundColor: '#3858e9', borderRadius: '6px', padding: '8px' }}
                        ></Icon>
                        <VStack>
                            <Text size={18} variant="muted">Net Sales</Text>
                            <HStack>
                                <Heading level={2}>₹5,140,956</Heading>
                                <HStack alignment="bottomRight" spacing={0}>
                                    <Icon icon={arrowUp} fill="green" />
                                    <Text color="green" size={14}>5.4%</Text>
                                </HStack>
                            </HStack>
                        </VStack>
                    </HStack>
                </CardBody>
                <CardBody isShady>
                    <Heading level={4}>View all</Heading>
                </CardBody>
            </Card>
            <Card style={{ width: '100%' }}>
                <CardBody>
                    <HStack alignment="left" spacing={6}>
                        <Icon
                            icon={box}
                            fill="white"
                            size={30}
                            style={{ backgroundColor: '#3858e9', borderRadius: '6px', padding: '8px' }}
                        ></Icon>
                        <VStack>
                            <Text size={18} variant="muted">Orders</Text>
                            <HStack>
                                <Heading level={2}>300</Heading>
                                <HStack alignment="bottomRight" spacing={0}>
                                    <Icon icon={arrowUp} fill="green" />
                                    <Text color="green" size={14}>3.2%</Text>
                                </HStack>
                            </HStack>
                        </VStack>
                    </HStack>
                </CardBody>
                <CardBody isShady>
                    <Heading level={4}>View all</Heading>
                </CardBody>
            </Card>
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