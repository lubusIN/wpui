/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    Icon,
    __experimentalHeading as Heading,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { atSymbol } from "@wordpress/icons";

/**
 * Render Subscription action panel 3
 */
function Actionpanel3() {
    return (
        <VStack>
            <Card isBorderless style={{ padding: "10px", borderBottom: "0.5px solid #DCDCDC" }}>
                <Heading>
                    Channels
                </Heading>
            </Card>
            <HStack style={{ padding: "20px" }}>
                <HStack alignment="left" spacing={5}>
                    <Icon size={40} icon={atSymbol}></Icon>
                    <VStack spacing={3}>
                        <Heading>
                            Google Listing and Ads
                        </Heading>
                        <Text>
                            Native integration with google that allows merchants to easily display their products across Google's network.
                        </Text>
                    </VStack>
                </HStack>
                <Button variant="primary">Finish Setup</Button>
            </HStack>
            <HStack style={{ padding: "20px" }}>
                <HStack alignment="left" spacing={5}>
                    <Icon size={40} icon={atSymbol}></Icon>
                    <VStack spacing={3}>
                        <Heading>
                            Pinterest for Woocommerce
                        </Heading>
                        <Text>
                            Grow your business on Pinterest! Use this official plugin to allow shoppers to Pin products while browsing your store,track conversion,and advertise on Pinterest.
                        </Text>
                    </VStack>
                </HStack>
                <Button variant="primary">Finish Setup</Button>
            </HStack>
            <HStack style={{ padding: "20px" }}>
                <HStack alignment="left" spacing={5}>
                    <Icon size={40} icon={atSymbol}></Icon>
                    <VStack spacing={3}>
                        <Heading>
                            MailPoet
                        </Heading>
                        <Text>
                            Create and send newsletter, post notofications and Welcome emails from your Wordpress
                        </Text>
                    </VStack>
                </HStack>
                <Button variant="primary">Finish Setup</Button>
            </HStack>
        </VStack>
    );
};

Actionpanel3.meta = {
    title: 'Actionpanel 3',
    name: 'Actionpanel3',
    category: 'NewPatterns',
    path: '/New-patterns/actionpanel3',
};

export default Actionpanel3;