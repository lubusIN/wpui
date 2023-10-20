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
function Stats3() {
    return (
        <Card variant="secondary" isRounded>
            <CardBody>
                <VStack>
                    <Heading level={3}>Last 30 days</Heading>
                    <HStack>
                        <Card>
                            <CardBody style={{ width: '400px' }}>
                                <VStack>
                                    <Text>Total Subscribers</Text>
                                    <Heading level={2}>71,000</Heading>
                                </VStack>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody style={{ width: '400px' }}>
                                <VStack>
                                    <Text>Avg. Open Rate</Text>
                                    <Heading level={2}>58.16%</Heading>
                                </VStack>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody style={{ width: '400px' }}>
                                <VStack>
                                    <Text>Avg. Click Rate</Text>
                                    <Heading level={2}>24.57%</Heading>
                                </VStack>
                            </CardBody>
                        </Card>

                    </HStack>

                </VStack>
            </CardBody>
        </Card>
    );
};

export default Stats3;