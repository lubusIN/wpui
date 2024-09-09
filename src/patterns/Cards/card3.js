/**
 * WordPress dependencies.
 */
import {
    Card,
    CardHeader,
    Button,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Card.
 */
function Card3() {
    return (
        <>
            <Card size="medium" style={{ borderRadius: '4px' }}>
                <CardHeader className="wpui_ch3_header" style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                    <HStack direction={['column', 'row']}>
                        <VStack>
                            <Heading level={4}>Upcoming Events</Heading>
                            <Text size={14} color="#6b7280">Join us for exciting moments ahead!</Text>
                        </VStack>
                        <Button variant="primary" style={{ borderRadius: '5px' }}>Create New Event</Button>
                    </HStack>
                </CardHeader>
                <Card style={{ opacity: '0.5', height: '200px' }} variant="grid" backgroundSize={20} isBorderless ></Card>
            </Card>
            <style>
                {`
                    @media only screen and (max-width: 640px){
                        .wpui_ch3_header > .components-h-stack{
                            align-items: start;
                        }
                    }
            `}
            </style>
        </>
    );
};

// @meta-start
Card3.meta = {
    title: 'Card 3',
    name:'Card3',
    category:'Card3',
    path: '/Cards/card3',
};
// @meta-end

export default Card3;