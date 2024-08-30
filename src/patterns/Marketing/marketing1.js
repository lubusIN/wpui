/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Subscription marketing
 */
function Marketing1() {
    return (
        <HStack alignment="center">
            <Card size='large' style={{ borderRadius: '8px' }}>
                <CardBody>
                    <VStack alignment='center' spacing={5}>
                        <img src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/logo.png"></img>
                        <Heading>Build 20X faster with WPUI</Heading>
                        <Text weight={500} align='center' variant='muted' style={{ maxWidth: '600px' }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </Text>
                        <Button variant="primary">Get Credits</Button>
                    </VStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

// @meta-start
Marketing1.meta = {
    title: 'Marketing 1',
    name: 'Marketing1',
    category: 'Marketing',
    path: '/Marketing/marketing1',
};
// @meta-end
export default Marketing1;