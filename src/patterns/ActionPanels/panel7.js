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
    __experimentalSurface as Surface,
    __experimentalGrid as Grid
} from "@wordpress/components";
import { trendingUp, megaphone, archive } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Panel7() {
    return (
        <>
            <HStack alignment="center">
                <Card size="large" style={{ borderRadius: '8px' }}>
                    <CardBody>
                        <HStack alignment="top" spacing={0}>
                            <VStack spacing={2}>
                                <HStack alignment='topLeft' style={{ maxWidth: '500px' }} >
                                    <Heading level={1}>
                                        Reach  new customers and increase sales
                                    </Heading>
                                </HStack>
                                <HStack>
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
                                        <Grid columns={[1, 2, 2]}>
                                            <Button style={{ justifyContent: 'center' }} variant="primary">Create a campaigns</Button>
                                            <Button style={{ justifyContent: 'center' }} variant='secondary'>Getting started</Button>
                                        </Grid>
                                    </VStack>
                                </HStack>
                            </VStack>
                            <VStack className='wpui_panel_container' >
                                <Surface as={'img'} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar2.png" style={{ height: '100%', width: '200px', marginLeft: '100px' }} />
                                <Surface as={'img'} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar1.png" style={{ height: '100%', width: '200px' }} />
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
            </HStack>
            <style>
                {`
              @media only screen and (max-width: 760px){
                .wpui_panel_container > img{
                    display: none;
                }
            }
    `}
            </style>
        </>
    );
};

// @meta-start
Panel7.meta = {
    title: 'Panel 7',
    name: 'Panel7',
    category: 'ActionPanels',
    path: '/ActionPanels/panel7',
};
// @meta-end

export default Panel7;
