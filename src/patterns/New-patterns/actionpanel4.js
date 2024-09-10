/**
 * WordPress dependencies.
 */
import {
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
function Actionpanel4() {
    return (
        <>
            <VStack spacing={6}>
                <Heading>
                    Reach  new customers and increase sales
                </Heading>
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
        </>
    );
};

Actionpanel4.meta = {
    title: 'Action Panel 4',
    path: '/New-patterns/actionpanel4',
};
export default Actionpanel4;