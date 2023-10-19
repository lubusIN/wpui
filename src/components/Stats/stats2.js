/**
 * WordPress dependencies.
 */
import {
    Card,
    Icon,
    CardBody,
    CardDivider,
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
        <VStack>
            <Heading level={3}>Last 30 days</Heading>
            <Card>
                <HStack>
                    <CardBody style={{ width: '400px' }}>
                        <VStack>
                            <Heading level={3}>Total Subscribers</Heading>
                            <HStack>
                                <Heading level={2} style={{ color: 'blue' }}>71,987</Heading>
                                <HStack alignment="bottomRight" spacing={30}>
                                    <Text>from 70,900</Text>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        backgroundColor: '#DCFCE6',
                                        borderRadius: '10px',
                                        padding: '0px 10px'
                                    }}>
                                        <Icon icon={arrowUp} fill="#22C55D"></Icon>
                                        <Text style={{ color: '#176434' }}>12%</Text>
                                    </div>
                                </HStack>
                            </HStack>
                        </VStack>
                    </CardBody>

                    <CardDivider orientation="vertical"></CardDivider>

                    <CardBody style={{ width: '400px' }}>
                        <VStack>
                            <Heading level={3}>Avg. Open Rate</Heading>
                            <HStack>
                                <Heading level={2} style={{ color: 'blue' }}>58.16%</Heading>
                                <HStack alignment="bottomRight" spacing={25}>
                                    <Text>from 56.10%</Text>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        backgroundColor: '#DCFCE6',
                                        borderRadius: '10px',
                                        padding: '0px 10px'
                                    }}>
                                        <Icon icon={arrowUp} fill="#22C55D"></Icon>
                                        <Text style={{ color: '#176434' }}>2.02%</Text>
                                    </div>
                                </HStack>
                            </HStack>
                        </VStack>
                    </CardBody>

                    <CardDivider orientation="vertical"></CardDivider>

                    <CardBody style={{ width: '400px' }}>
                        <VStack>
                            <Heading level={3}>Avg. Click Rate</Heading>
                            <HStack>
                                <Heading level={2} style={{ color: 'blue' }}>24.57%</Heading>
                                <HStack alignment="bottomRight" spacing={25}>
                                    <Text>from 28.62%</Text>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'flex-end',
                                        backgroundColor: '#FDE2E1',
                                        borderRadius: '10px',
                                        padding: '0px 10px'
                                    }}>
                                        <Icon icon={arrowDown} fill="#F04444"></Icon>
                                        <Text style={{ color: '#B04A48' }}>4.04%</Text>
                                    </div>
                                </HStack>
                            </HStack>
                        </VStack>
                    </CardBody>
                </HStack>
            </Card>
        </VStack>
    );
};

export default Stats2;