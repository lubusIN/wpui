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
import { arrowRight, starFilled } from "@wordpress/icons";

/**
 * Render Card.
 */
function Card5() {
    return (
        <HStack alignment="center">
            <Card size="large" style={{ borderRadius: '4px' }}>
                <CardBody>
                    <HStack alignment='top' spacing={4}>
                        <CardBody size='xSmall'
                            style={{
                                minWidth: 'auto',
                                backgroundColor: "#F2F6FF",
                            }}>
                            <Icon style={{ minWidth: '25px' }} icon={starFilled} size={25} fill="blue"></Icon>
                        </CardBody>
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
Card5.meta = {
    title: 'Card 5',
    name: 'Card5',
    category: 'Cards',
    path: '/Cards/card5',
};
// @meta-end

export default Card5;