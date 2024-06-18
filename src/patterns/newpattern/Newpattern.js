/**
 * WordPress dependencies.
 */
import {
    ExternalLink,
    Icon,
    Button,
    Card,
    CardBody,
    __experimentalText as Text,
    __experimentalGrid as Grid,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    CardHeader,
    FontSizePicker,
} from "@wordpress/components";
import { trendingUp, megaphone, archive } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Newpattern() {
    return (
        <Card style={{padding:"30px",backgroundColor:"rgb(240 240 240)"}}>
            <Card style={{padding:"70px"}}>
                <VStack>
                    <Text style={{ fontSize: "30px", fontWeight: "600", width: "50%" }}>
                        Reach  new customers and increase sales without leaving WooCommerce
                    </Text>
                    <Card isBorderless style={{ width: "38%" }}>
                        <HStack>
                            <Card isBorderless >
                                <Icon size={50} icon={trendingUp}></Icon>
                            </Card>
                            <Text style={{ fontSize: "18px", fontWeight: "500", color: "grey", justifyContent: "left" }}>
                                Reach customers on other sale channels
                            </Text>
                        </HStack>
                    </Card>
                    <Card isBorderless style={{ width: "35%" }}>
                        <HStack>
                            <Card isBorderless >
                                <Icon size={50} icon={megaphone}></Icon>
                            </Card>
                            <Text style={{ fontSize: "18px", fontWeight: "500", color: "grey", justifyContent: "left" }}>
                                Advertise with marketing campaigns.
                            </Text>
                        </HStack>
                    </Card>
                    <Card isBorderless style={{ width: "27%" }}>
                        <HStack>
                            <Card isBorderless >
                                <Icon size={50} icon={archive}></Icon>
                            </Card>
                            <Text style={{ fontSize: "18px", fontWeight: "500", color: "grey", textAlign: "left", justifyContent: "left" }}>
                                Build with WooCommerce.
                            </Text>
                        </HStack>
                    </Card>
                    <HStack>
                        <Button style={{padding:"20px" ,backgroundColor:"#007FFF", color:"white"}}>Create a campaigns</Button>
                        <Button style={{padding:"20px", color:"#007FFF", border:"2px solid #007FFF",marginRight:"776px"}} >Add channels</Button>
                    </HStack>
                </VStack>
            </Card>
        </Card>
    );
};

export default Newpattern;