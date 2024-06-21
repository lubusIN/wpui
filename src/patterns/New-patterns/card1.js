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
import { currencyDollar, store } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Card1() {
    return (
        <HStack>
            <Card style={{ padding: "12px" ,width:"50%" }}>
                <HStack alignment="left">
                    <Card isBorderless>
                        <Icon size={60} icon={store}></Icon>
                    </Card>
                    <Card isBorderless >
                        <Text style={{ fontWeight: "bold", fontSize: "20px" }}>Open/Close Store Hours & Maintenance mode</Text><br />
                        <Text style={{ fontSize: "15px" }}>By  <ExternalLink style={{ fontWeight: "600", textDecoration: "none", color: "#4094e8" }} href="">FmeAddons</ExternalLink></Text>
                    </Card>
                </HStack><br/>
                <Text style={{ fontWeight: "500", fontSize: "15px" }}>Set a Daily schedule to allow customers to shop during specific hours with open and close store functionality. Display holiday, coming soon & Maintenance mode banners.</Text><br /><br />
                <HStack>
                    <Text style={{ fontWeight: "bold" }}>$49 <Text>anually</Text> </Text>
                </HStack>
            </Card>

            <Card style={{ padding: "12px", width:"50%" }}>
                <HStack alignment="left">
                    <Card isBorderless>
                        <Icon size={60} icon={currencyDollar}></Icon>
                    </Card>
                    <Card isBorderless >
                        <Text style={{ fontWeight: "bold", fontSize: "20px" }}>Price Per Unit Pro</Text><br />
                        <Text style={{ fontSize: "15px" }}>By  <ExternalLink style={{ fontWeight: "600", textDecoration: "none", color: "#4094e8" }} href="">MechComp</ExternalLink></Text>
                    </Card>
                </HStack><br/>
                <Text style={{ fontWeight: "500", fontSize: "15px" }}>The Price Per Unit PRO extension automatically calculates the cost of one unit of your product and then display the calculated price.</Text><br /><br />
                <HStack>
                    <Text style={{ fontWeight: "bold" }}>$29 <Text>anually</Text> </Text>
                </HStack>
            </Card>
        </HStack>
    );
};

export default Card1;