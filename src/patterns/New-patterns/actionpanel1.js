/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Subscription action panel
 */
function Actionpanel1() {
    return (
        <Card>
            <VStack>
                <Card isBorderless style={{ padding: "21px", borderBottom: "0.5px solid #DCDCDC" }}>
                    <Text style={{ fontSize: "20px", fontWeight: "600" }}>
                        Channels
                    </Text>
                </Card>

                <HStack>
                    <HStack style={{ padding: "20px" }} alignment="left" spacing={5} expanded={false}>
                        <img style={{ height: "40px", width: "40px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSrJfSchrm52z1ynMNJM8xMMuxtfWgPHE5w&s"></img>
                        <VStack spacing={3}>
                            <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                                Google Listing and Ads
                            </Text>
                            <Text style={{ fontSize: "15px" }}>
                                Native integration with google that allows merchants to easily display their products across Google's network.
                            </Text>
                        </VStack>
                    </HStack>
                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button style={{ backgroundColor: "#0093ff", color: "white" }} >Finish Setup</Button>
                    </HStack>
                </HStack>

                <HStack>
                    <HStack style={{ padding: "20px" }} alignment="left" expanded={false}>
                        <img style={{ height: "40px", width: "40px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJHH6aoXJfdAScGlfLHNln2tjqUwkCDbxt8Q&s"></img>
                        <VStack style={{ padding: "10px" }}>
                            <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                                Pinterest for Woocommerce
                            </Text>
                            <Text style={{ fontSize: "15px" }}>
                                Grow your business on Pinterest! Use this official plugin to allow shoppers to Pin products while browsing your store,track conversion,<br />and advertise on Pinterest.
                            </Text>
                        </VStack>
                    </HStack>
                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button style={{ backgroundColor: "#0093ff", color: "white" }} >Finish Setup</Button>
                    </HStack>
                </HStack>

                <HStack>
                    <HStack style={{ padding: "20px" }} alignment="left" expanded={false}>
                        <img style={{ height: "40px", width: "40px" }} src="https://www.mailpoet.com/wp-content/uploads/2020/05/mailpoet-symbol.png"></img>
                        <VStack style={{ padding: "10px" }}>
                            <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                                MailPoet
                            </Text>
                            <Text style={{ fontSize: "15px" }}>
                                Create and send newsletter, post notofications and Welcome emails from your Wordpress
                            </Text>
                        </VStack>
                    </HStack>
                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button style={{ backgroundColor: "#0093ff", color: "white" }} >Finish Setup</Button>
                    </HStack>
                </HStack>
            </VStack>
        </Card>
    );
};

export default Actionpanel1;