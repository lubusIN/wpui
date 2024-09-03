/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    CardBody,
    Icon,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalSurface as Surface,
} from "@wordpress/components";
import { arrowRight } from "@wordpress/icons";

/**
 * Render Card.
 */
function Card2() {
    return (
        <HStack alignment="center">
            <Card size="large" style={{ borderRadius: '4px' }}>
                <CardBody>
                    <VStack spacing={3}>
                        <Surface as={'img'} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/Image%20wrap.png" style={{ height: '100%', width: '100%', borderRadius: '10px' }} />
                        <Button  style={{ padding: 0 }}>
                            <Text weight={500} color='#3858E9'>
                            Category/Tagline
                            </Text>
                        </Button>
                        <Heading level={4} >Build WP Plugin Faster</Heading>
                        <Text variant='muted' style={{ maxWidth: '300px' }} >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </Text>
                        <HStack alignment="left">
                            <Button variant="primary" >Call to action</Button>
                            <Button style={{ padding: 0 }}>
                                <Text size={14} weight={600} color='#3858E9' style={{ textDecoration: 'none' }} >
                                    Link Text
                                </Text>
                                <Icon icon={arrowRight} color="#3858E9"></Icon>
                            </Button>
                        </HStack>
                    </VStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

// @meta-start
Card2.meta = {
    title: 'Card 2',
    name: 'Card2',
    category: 'Cards',
    path: '/Cards/card2',
};
// @meta-end

export default Card2;