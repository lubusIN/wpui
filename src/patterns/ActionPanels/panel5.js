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
                            <HStack alignment="top" style={{ width: '750px' }} spacing={40}>
                                <Heading level={1}>
                                    Reach  new customers and increase sales
                                </Heading>
                                <img src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar2.png"></img>
                            </HStack>
                            <HStack alignment="top" spacing={40} justify="left">
                                <VStack spacing={8}>
                                    <VStack spacing={3}>
                                        <HStack expanded={false} alignment="left">
                                            <Icon size={20} icon={trendingUp}></Icon>
                                            <Text weight={500} variant="muted">Reach customers on other sale channels.</Text>
                                        </HStack>
                                        <HStack expanded={false} alignment="left">
                                            <Icon size={20} icon={megaphone}></Icon>
                                            <Text weight={500} variant="muted">Advertise with marketing campaigns.</Text>
                                        </HStack>
                                        <HStack expanded={false} alignment="left">
                                            <Icon size={20} icon={archive}></Icon>
                                            <Text weight={500} variant="muted">Build with Us.</Text>
                                        </HStack>
                                    </VStack>
                                    <HStack expanded={false} alignment="left">
                                        <Button variant="primary">Create a campaigns</Button>
                                        <Button variant="secondary">Getting started </Button>
                                    </HStack>
                                </VStack>
                                <img height='200px' src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar1.png"></img>
                            </HStack>
                        </VStack>
                    </CardBody>
                </HStack>
            <Card style={{ borderRadius: '8px' }}>
                <CardHeader>
                    <HStack expanded={false} spacing={1}>
                        <Icon icon={preformatted}></Icon>
                        <Heading level={3}>Forms</Heading>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <VStack spacing={5} alignment="baseline">
                        <Text size={15} weight={400} variant="muted" style={{ maxWidth: '600px' }}>
                            Create any form you need by selecting from our pre-made templates or creating your own from scratch.
                        </Text>
                        <Button icon={create} iconSize={30} variant="primary">Create form</Button>
                    </VStack>
                </CardBody>
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
