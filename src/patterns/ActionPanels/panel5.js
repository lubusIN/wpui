/**
 * WordPress dependencies.
 */
import {
    Card,
    CardBody,
    Icon,
    Button,
    __experimentalHeading as Heading,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { trendingUp, megaphone, archive } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Panel5() {
    return (
        <HStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <HStack alignment="top">
                    <CardBody>
                        <VStack spacing={2}>
                            <Heading level={1}>
                                Reach  new customers and increase sales
                            </Heading>
                            <VStack spacing={3}>
                                <HStack expanded={false} alignment="left">
                                    <Icon size={20} icon={trendingUp}></Icon>
                                    <Text variant="muted">Reach customers on other sale channels.</Text>
                                </HStack>
                                <HStack expanded={false} alignment="left">
                                    <Icon size={20} icon={megaphone}></Icon>
                                    <Text variant="muted">Advertise with marketing campaigns.</Text>
                                </HStack>
                                <HStack expanded={false} alignment="left">
                                    <Icon size={20} icon={archive}></Icon>
                                    <Text variant="muted">Build with Us.</Text>
                                </HStack>
                                <HStack expanded={false} alignment="left">
                                    <Button variant="primary">Create a campaigns</Button>
                                    <Button variant="secondary">Add channels</Button>
                                </HStack>
                            </VStack>
                        </VStack>
                    </CardBody>
                </HStack>
            </Card>
        </HStack>
    );
};

// @meta-start
Panel5.meta = {
    title: 'Panel 5',
    name: 'Panel5',
    category: 'ActionPanels',
    path: '/ActionPanels/panel5',
};
// @meta-end

export default Panel5;