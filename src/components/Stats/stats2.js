/**
 * WordPress dependencies.
 */
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
import { arrowUp, arrowDown } from "@wordpress/icons";

/**
 * Render Stats
 */
function Stats2() {
    return (
        <Card variant="secondary" isRounded>
            <CardBody>
                <VStack>
                    <Heading level={3}>Last 30 days</Heading>
                    <Card isRounded >

                        <Grid
                            columns={[1, 2, 3]}
                        >
                            <CardBody>
                                <VStack>
                                    <Heading level={3}>Total Subscribers</Heading>
                                    <HStack alignment="left">
                                        <Heading level={2} style={{ color: 'blue' }}>71,987</Heading>
                                        <HStack alignment="bottomRight" justify="space-around">
                                            <Text>from 70,900</Text>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-end',
                                                backgroundColor: '#DCFCE6',
                                                borderRadius: '10px',
                                                padding: '0px 5px'
                                            }}>
                                                <Icon icon={arrowUp} fill="#22C55D"></Icon>
                                                <Text style={{ color: '#176434' }}>12%</Text>
                                            </div>
                                        </HStack>
                                    </HStack>
                                </VStack>
                            </CardBody>

                            <CardBody>
                                <VStack>
                                    <Heading level={3}>Avg. Open Rate</Heading>
                                    <HStack>
                                        <Heading level={2} style={{ color: 'blue' }}>58.16%</Heading>
                                        <HStack alignment="bottomRight" justify="space-around">
                                            <Text>from 56.10%</Text>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-end',
                                                backgroundColor: '#DCFCE6',
                                                borderRadius: '10px',
                                                padding: '0px 5px'
                                            }}>
                                                <Icon icon={arrowUp} fill="#22C55D"></Icon>
                                                <Text style={{ color: '#176434' }}>2.02%</Text>
                                            </div>
                                        </HStack>
                                    </HStack>
                                </VStack>
                            </CardBody>

                            <CardBody>
                                <VStack>
                                    <Heading level={3}>Avg. Click Rate</Heading>
                                    <HStack>
                                        <Heading level={2} style={{ color: 'blue' }}>24.57%</Heading>
                                        <HStack alignment="bottomRight" justify="space-around">
                                            <Text>from 28.62%</Text>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'flex-end',
                                                backgroundColor: '#FDE2E1',
                                                borderRadius: '10px',
                                                padding: '0px 5px'
                                            }}>
                                                <Icon icon={arrowDown} fill="#F04444"></Icon>
                                                <Text style={{ color: '#B04A48' }}>4.04%</Text>
                                            </div>
                                        </HStack>
                                    </HStack>
                                </VStack>
                            </CardBody>
                        </Grid>
                    </Card>
                </VStack>
            </CardBody>
        </Card >
    );
};

export default Stats2;