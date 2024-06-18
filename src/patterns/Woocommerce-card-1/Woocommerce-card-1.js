/**
 * WordPress dependencies.
 */
import {
    ExternalLink,
    Icon,
    Card,
    __experimentalText as Text,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { currencyDollar, store, starEmpty } from "@wordpress/icons";

/**
 * Render Woocommerce_Card
 */
function Woocommerce_Card() {
    return (
        <HStack>
            <Card style={{ padding: "35px", fontWeight: "600", width: "50%" }}>
                <HStack>
                    <Card isBorderless>
                        <Icon size={50} icon={store}></Icon>
                    </Card>
                    <Card isBorderless style={{ fontWeight: "bold", fontSize: "20px", marginRight:"60px" }}>
                        Open/Close Store Hours & Maintenance mode<br />
                        <Text style={{ fontSize: "15px" }}>By  <ExternalLink style={{ fontWeight: "600", textDecoration: "none", color: "#4094e8" }} href="">FmeAddons</ExternalLink></Text>
                    </Card>
                </HStack><br />
                <Text style={{ fontWeight: "500", fontSize: "15px" }}>Set a Daily schedule to allow customers to shop during specific hours with open and close store functionality. Display holiday, coming soon & Maintenance mode banners.</Text><br /><br />
                <HStack>
                    <Text style={{ fontWeight: "bold" }}>$49 <Text>anually</Text> </Text>
                    <Text>
                        <HStack>
                            <Card isBorderless>
                                <Icon icon={starEmpty}></Icon>
                            </Card>
                            <Card isBorderless>
                                <Text style={{ fontWeight: "700", fontSize: "16px" }}>4.3</Text>
                                <Text style={{ color: "grey", fontSize: "16px", fontWeight: "500" }}>(20)</Text>
                            </Card>
                        </HStack>
                    </Text>
                </HStack>
            </Card>

            <Card style={{ padding: "30px", fontWeight: "600", width: "50%" }}>
                <HStack>
                    <Card isBorderless>
                        <Icon size={50} icon={currencyDollar}></Icon>
                    </Card>
                    <Card isBorderless style={{ fontWeight: "bold", fontSize: "20px", marginRight:"340px" }}>
                        Price Per Unit Pro<br />
                        <Text style={{ fontSize: "15px" }}>By  <ExternalLink style={{ fontWeight: "600", textDecoration: "none", color: "#4094e8" }} href="">MechComp</ExternalLink></Text>
                    </Card>
                </HStack><br />
                <Text style={{ fontWeight: "500", fontSize: "15px" }}>The Price Per Unit PRO extension automatically calculates the cost of one unit of your product and then display the calculated price.</Text><br /><br /><br />
                <HStack>
                    <Text style={{ fontWeight: "bold" }}>$29 <Text>anually</Text> </Text><br /><br />
                </HStack>
            </Card>
        </HStack>
    );
};

export default Woocommerce_Card;