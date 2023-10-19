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
import { arrowRight } from '@wordpress/icons';

/**
 * Render Subscription action panel
 */
function Panel2() {
    return (
        <VStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <CardBody>
                    <VStack spacing={6} alignment="left">
                        <VStack spacing={3}>
                            <Heading level={3}>Continuous Integration</Heading>
                            <Text size={15} weight={400} variant="muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam.
                            </Text>
                        </VStack>

                        <Button style={{ padding: 0 }}>
                            <Text size={14} weight={600} as={"a"} href="https://wordpress.org" color='blue' style={{ textDecoration: 'none' }} >
                                Learn more about Wordpress
                            </Text>
                            <Icon icon={arrowRight} color="blue"></Icon>
                        </Button>

                    </VStack>
                </CardBody>
            </Card>
        </VStack>
    );
};

export default Panel2;