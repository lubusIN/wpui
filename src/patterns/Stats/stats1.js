/**
 * WordPress dependencies.
 */
import {
    Card,
    Icon,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from "@wordpress/components";
import { arrowUp, box, trendingUp } from "@wordpress/icons";

/**
 * Render Stats
 */
function Stats1() {
    return (
        <HStack spacing={5} direction={['column', 'row']}>
            <Card isBorderless isElevated style={{ width: '100%' }}>
                <CardBody>
                    <HStack alignment="left" spacing={6}>
                        <Icon
                            icon={trendingUp}
                            color="black"
                            size={30}
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
            <Card isBorderless isElevated style={{ width: '100%' }}>
                <CardBody>
                    <HStack alignment="left" spacing={6}>
                        <Icon
                            icon={trendingUp}
                            color="black"
                            size={30}
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
            <Card isBorderless isElevated style={{ width: '100%' }}>
                <CardBody>
                    <HStack alignment="left" spacing={6}>
                        <Icon
                            icon={box}
                            color="black"
                            size={30}
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
        </HStack>
    );
};

export default Stats1;