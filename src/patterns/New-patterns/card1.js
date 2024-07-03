/**
 * WordPress dependencies.
 */
import {
    ExternalLink,
    Icon,
    Card,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from "@wordpress/components";
import { currencyDollar, store } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Card1() {
    return (
        <HStack>
            <Card style={{ padding: "12px", width: "50%" }}>
                <HStack alignment="left">
                    <Icon size={60} icon={store}></Icon>
                        <VStack spacing={1}>
                            <Heading>Open/Close Store Hours & Maintenance</Heading>
                            <Text size={15}>By  <ExternalLink href="">FmeAddons</ExternalLink></Text>
                        </VStack>
                </HStack><br />
                <Text size={15} weight={500}>Set a Daily schedule to allow customers to shop during specific hours with open and close store functionality. Display holiday, coming soon & Maintenance mode banners.</Text><br /><br />
                <HStack>
                    <Text weight={700}>$49 <Text>anually</Text> </Text>
                </HStack>
            </Card>
            <Card style={{ padding: "12px", width: "50%" }}>
                <HStack alignment="left">
                    <Icon size={60} icon={currencyDollar}></Icon>
                        <VStack spacing={1}>
                            <Heading>Price Per Unit Pro</Heading>
                            <Text size={15}>By  <ExternalLink href="">MechComp</ExternalLink></Text>
                        </VStack>
                </HStack><br />
                <Text size={15} weight={500}>The Price Per Unit PRO extension automatically calculates the cost of one unit of your product and then display the calculated price.</Text><br /><br />
                <HStack>
                    <Text weight={700}>$29 <Text>anually</Text> </Text>
                </HStack>
            </Card>
        </HStack>
    );
};

Card1.meta = {
    title: 'Card 1',
    path: '/New-patterns/card1',
};

export default Card1;