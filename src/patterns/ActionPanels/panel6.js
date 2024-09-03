/**
 * WordPress dependencies.
 */
import {
    Icon,
    Button,
    Card,
    CardHeader,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalInputControl as InputControl,
    ExternalLink
} from "@wordpress/components";
import { key } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Panel6() {
    return (
        <>
            <HStack alignment="center">
                <Card style={{ borderRadius: '8px' }}>
                    <CardHeader>
                        <HStack expanded={false} spacing={1}>
                            <Icon icon={key} size={30}></Icon>
                            <Heading level={3}>Pro licensing</Heading>
                        </HStack>
                    </CardHeader>
                    <CardBody>
                        <VStack spacing={3}>
                            <Text size={15} weight={500}>
                                Enter your license here
                            </Text>
                            <HStack expanded={false} spacing={2} direction={['column', 'row']} alignment={'start'} justify='left'>
                                <InputControl __unstableInputWidth={200} style={{ height: '36px' }} placeholder="Paste your license key here..." />
                                <Button style={{ maxWidth: 'auto' }} variant='primary'>Activate</Button>
                            </HStack>
                            <Text size={15} weight={400} variant="muted">
                                If you do not have a license key, you can
                                <ExternalLink href="" style={{ textDecoration: 'none', color: '#3858E9' }}> purchase one here </ExternalLink>
                            </Text>
                        </VStack>
                    </CardBody>
                </Card>
            </HStack>
            <style>
                {`
                .components-input-control__container{
                width:250px;}
                `}
            </style>
        </>
    );
};

// @meta-start
Panel6.meta = {
    title: 'Panel 6',
    name: 'Panel6',
    category: 'ActionPanels',
    path: '/ActionPanels/panel6'
};
// @meta-end
export default Panel6;