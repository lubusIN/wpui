/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Subscription action panel
 */
function Panel1() {
    return (
        <HStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <CardBody>
                    <HStack spacing={8}>
                        <VStack spacing={6} alignment="baseline">
                            <VStack spacing={3}>
                                <Heading>Lorem ipsum</Heading>
                                <Text size={15} weight={400} variant="muted">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam.
                                </Text>
                            </VStack>
                        </VStack>
                        <Button variant="primary" style={{minWidth:'auto'}}>Call to action</Button>
                    </HStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

// @meta-start
Panel1.meta = {
    title: 'Panel 1',
    name: 'Panel1',
    category: 'ActionPanels',
    path: '/ActionPanels/panel1',
};
// @meta-end
export default Panel1;