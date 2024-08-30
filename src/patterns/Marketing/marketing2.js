/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    Icon,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { category, cog, home } from "@wordpress/icons";

/**
 * Render Subscription marketing
 */
function Marketing2() {
    return (
        <HStack alignment="center">
            <Card size='large' style={{ borderRadius: '8px' }}>
                <CardBody>
                    <VStack spacing={10}>
                    <HStack>
                        <HStack alignment='top'>
                            <Icon icon={home} size={25}></Icon>
                            <VStack>
                                <Heading>Lorem lipsum</Heading>
                                <Text variant='muted' style={{ maxWidth: '400px' }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack alignment="top">
                            <Icon icon={home} size={25}></Icon>
                            <VStack>
                                <Heading>Lorem lipsum</Heading>
                                <Text variant='muted' style={{ maxWidth: '400px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </Text>
                            </VStack>
                        </HStack>
                    </HStack>

                    <HStack>
                        <HStack alignment='top'>
                            <Icon icon={category} size={25}></Icon>
                            <VStack>
                                <Heading>Lorem lipsum</Heading>
                                <Text variant='muted' style={{ maxWidth: '400px' }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack alignment="top">
                            <Icon icon={category} size={25}></Icon>
                            <VStack>
                                <Heading>Lorem lipsum</Heading>
                                <Text variant='muted' style={{ maxWidth: '400px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </Text>
                            </VStack>
                        </HStack>
                    </HStack>

                    <HStack>
                        <HStack alignment='top'>
                            <Icon icon={cog} size={25}></Icon>
                            <VStack>
                                <Heading>Lorem lipsum</Heading>
                                <Text variant='muted' style={{ maxWidth: '400px' }} >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </Text>
                            </VStack>
                        </HStack>
                        <HStack alignment="top">
                            <Icon icon={cog} size={25}></Icon>
                            <VStack>
                                <Heading>Lorem lipsum</Heading>
                                <Text variant='muted' style={{ maxWidth: '400px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </Text>
                            </VStack>
                        </HStack>
                    </HStack>
                    </VStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

// @meta-start
Marketing2.meta = {
    title: 'Marketing 2',
    name: 'Marketing2',
    category: 'Marketing',
    path: '/Marketing/marketing2',
};
// @meta-end
export default Marketing2;