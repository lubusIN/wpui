/**
 * WordPress dependencies.
 */
import { 
    arrowUp, 
    arrowDown 
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
    __experimentalSurface as Surface
} from "@wordpress/components";

/**
 * Render Stats
 */
function Stats2() {
    return (
        <Card isBorderless isRounded>
            <VStack spacing={5}>
                <Heading level={3}>Last 30 days</Heading>
                <Grid columns={[1, 2, 3]} gap={0}>
                    <Card style={{ padding: '10px' }}>
                        <VStack spacing={3}>
                            <Heading level={4} weight={500}>Total Orders</Heading>
                            <HStack expanded={false}>
                                <HStack justify="left" spacing={1}>
                                    <Heading level={2}>71,987</Heading>
                                    <Text>from 70,900</Text>
                                </HStack>
                                <Surface
                                    style={{
                                        backgroundColor: '#DCFCE6',
                                        borderRadius: '10px',
                                        padding: '0px 15px 0px 5px'
                                    }}
                                >
                                    <HStack spacing={0}>
                                        <Icon icon={arrowUp} fill="#22C55D"></Icon>
                                        <Text color='#176434'>12%</Text>
                                    </HStack>
                                </Surface>
                            </HStack>
                        </VStack>
                    </Card>

                    <Card style={{ padding: '10px' }}>
                        <VStack spacing={3}>
                            <Heading level={4} weight={500}>Avg. Order Value</Heading>
                            <HStack>
                                <HStack justify="left" spacing={1}>
                                    <Heading level={2}>₹50,000</Heading>
                                    <Text>from ₹100,000</Text>
                                </HStack>
                                <Surface
                                    style={{
                                        backgroundColor: '#DCFCE6',
                                        borderRadius: '10px',
                                        padding: '0px 15px 0px 5px'
                                    }}
                                >
                                    <HStack spacing={0}>
                                        <Icon icon={arrowUp} fill="#22C55D"></Icon>
                                        <Text color='#176434'>10%</Text>
                                    </HStack>
                                </Surface>
                            </HStack>
                        </VStack>
                    </Card>

                    <Card style={{ padding: '10px' }}>
                        <VStack spacing={3}>
                            <Heading level={4} weight={500}>Order Conversion Rate</Heading>
                            <HStack>
                                <HStack alignment="left" spacing={1}>
                                    <Heading level={2}>24.57%</Heading>
                                    <Text>from 28.62%</Text>
                                </HStack>
                                <Surface
                                    style={{
                                        backgroundColor: '#FDE2E1',
                                        borderRadius: '10px',
                                        padding: '0px 15px 0px 5px'
                                    }}
                                >
                                    <HStack spacing={0}>
                                        <Icon icon={arrowDown} fill="#B04A48"></Icon>
                                        <Text color='#B04A48'>4.04%</Text>
                                    </HStack>
                                </Surface>
                            </HStack>
                        </VStack>
                    </Card>
                </Grid>
            </VStack>
        </Card>
    );
};

// @meta-start
Stats2.meta = {
    title: 'Stats 2',
    name:'Stats2',
    category:'Stats',
    path: '/Stats/stats2',
};
// @meta-end

export default Stats2;