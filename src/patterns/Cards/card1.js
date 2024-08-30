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
import { arrowRight,starEmpty } from "@wordpress/icons";

/**
 * Render Card.
 */
function Card1() {
    return (
        <Card size="medium" style={{ borderRadius: '4px' }}>
            <CardBody>
            <HStack alignment='top'>
                <Icon icon={starEmpty} size={25}></Icon>
                <VStack>
                    <Heading>Build WP Plugin Faster</Heading>
                    <Text variant='muted' style={{ maxWidth: '400px' }} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </Text>
                    <Button style={{ padding: 0 }}>
                        <Text size={14} weight={600} as={"a"} href="https://wordpress.org" color='blue' style={{ textDecoration: 'none' }} >
                            Link Text
                        </Text>
                        <Icon icon={arrowRight} color="blue"></Icon>
                    </Button>
                </VStack>
            </HStack>
            </CardBody>
        </Card>
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