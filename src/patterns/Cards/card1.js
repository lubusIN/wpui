/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    Icon,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    CardBody,
} from "@wordpress/components";
import { arrowRight, starEmpty } from "@wordpress/icons";

/**
 * Render Card.
 */
function Card1() {
    return (
        <HStack alignment="center">
            <Card size="large" style={{ borderRadius: '4px' }}>
                <CardBody>
                    <HStack alignment='top'>
                        <Icon style={{ minWidth: '25px' }} icon={starEmpty} size={25}></Icon>
                        <VStack>
                            <Heading level={4} >Build WP Plugin Faster</Heading>
                            <Text variant='muted' style={{ maxWidth: '225px' }} >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </Text>
                            <Button style={{ padding: 0 }}>
                                <Text size={14} weight={600} color='#3858E9' style={{ textDecoration: 'none' }} >
                                    Link Text
                                </Text>
                                <Icon icon={arrowRight} color="#3858E9"></Icon>
                            </Button>
                        </VStack>
                    </HStack>
                </CardBody>
            </Card >
        </HStack>
    );
};

// @meta-start
Card1.meta = {
    title: 'Card 1',
    name: 'Card1',
    category: 'Cards',
    path: '/Cards/card1',
};
// @meta-end

export default Card1;