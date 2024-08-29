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
function Panel7() {
    return (
        <HStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <CardHeader>
                    <HStack expanded={false} spacing={1}>
                        <Icon icon={key}></Icon>
                        <Heading level={3}>Pro licensing</Heading>
                    </HStack>
                </CardHeader>
                <CardBody>
                    <VStack spacing={5}>
                        <VStack spacing={2}>
                            <Text size={15} weight={500}>
                                Enter your license here
                            </Text>
                            <HStack expanded={false} spacing={2} alignment='left'>
                                <InputControl
                                    placeholder="Paste your license key here..."
                                    size='__unstable-large'
                                >
                                </InputControl>
                                <Button variant='primary'>Activate</Button>
                            </HStack>
                            <Text size={15} weight={400} variant="muted">
                                If you do not have a license key, you can
                                <ExternalLink href="" > purchase one here </ExternalLink>
                            </Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

// @meta-start
Panel7.meta = {
    title: 'Panel 7',
    name: 'Panel7',
    category: 'ActionPanels',
    path: '/ActionPanels/panel7'
};
// @meta-end
export default Panel7;