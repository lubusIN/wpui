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
    __experimentalSurface as Surface
} from "@wordpress/components";
import { arrowUp, arrowDown } from "@wordpress/icons";

/**
 * Render Stats
 */
function Stats2() {
    return (
        <Card isBorderless isRounded>
            <VStack spacing={5}>
                <Heading level={3}>Last 30 days</Heading>
                <Grid columns={[1, 2, 3]} gap={0}>
                    <Card>
                        <CardBody>
                            <VStack spacing={3}>
                                <Heading level={3} weight={500}>Total Subscribers</Heading>
                                <HStack>
                                    <HStack justify="left">
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
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <VStack spacing={3}>
                                <Heading level={3} weight={500}>Avg. Open Rate</Heading>
                                <HStack>
                                    <HStack justify="left">
                                        <Heading level={2}>58.16%</Heading>
                                        <Text>from 56.10%</Text>
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
                                            <Text color='#176434'>2.02%</Text>
                                        </HStack>
                                    </Surface>
                                </HStack>
                            </VStack>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <VStack spacing={3}>
                                <Heading level={3} weight={500}>Avg. Click Rate</Heading>
                                <HStack>
                                    <HStack justify="left">
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
                                            <Icon icon={arrowDown} fill="#F04444"></Icon>
                                            <Text color='#B04A48'>4.04%</Text>
                                        </HStack>
                                    </Surface>
                                </HStack>
                            </VStack>
                        </CardBody>
                    </Card>
                </Grid>
            </VStack>
        </Card>
    );
};

export default Stats2;