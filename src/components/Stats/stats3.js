/**
 * WordPress dependencies.
 */
import {
    Card,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalGrid as Grid,
    __experimentalVStack as VStack,

} from "@wordpress/components";

/**
 * Render Stats
 */
function Stats3() {
    return (
        <Card isBorderless isRounded>
            <VStack spacing={5}>
                <Heading level={3}>Last 30 days</Heading>
                <Grid columns={[1, 2, 3]} gap={0}>
                    <Card>
                        <CardBody>
                            <VStack>
                                <Text size={14}>Total Subscribers</Text>
                                <Heading level={2}>71,000</Heading>
                            </VStack>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <VStack>
                                <Text size={14}>Avg. Open Rate</Text>
                                <Heading level={2}>58.16%</Heading>
                            </VStack>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <VStack>
                                <Text size={14}>Avg. Click Rate</Text>
                                <Heading level={2}>24.57%</Heading>
                            </VStack>
                        </CardBody>
                    </Card>
                </Grid>
            </VStack>
        </Card>
    );
};

export default Stats3;