/**
 * WordPress dependencies.
 */
import {
    Button,
    Icon,
    Card,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    ExternalLink,
} from "@wordpress/components";
import { info } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Actionpanel7() {
    return (
        <>
            <VStack spacing={5}>
                <HStack>
                <VStack spacing={5} style={{ padding: "20px" }}>
                    <VStack>
                        <Text style={{ fontWeight: "600", fontSize: "25px" }}>Start customizing your Store</Text>
                        <Text style={{ fontSize: "20px", fontWeight: "500", color: "grey" }}>Quickly Create a beautiful looking store using our built-in-store designer, or select a pre-build theme and customize it to fit your brand.</Text>
                    </VStack>
                    <HStack>
                        <Button style={{ padding: "25px", backgroundColor: "rgb(0 120 223)", color: "White", fontWeight: "550" }}>
                            Start customizing
                        </Button>
                    </HStack>
                </VStack>
                <Card isBorderless expanded={false}>
                <Icon size={200} icon={info}></Icon>
                </Card>
                </HStack>

                <VStack>
                    <Card className="a">
                        <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                            <Icon size={50} icon={info}></Icon>
                            <VStack spacing={3}>
                                
                                    <Text style={{ fontSize: "20px", fontWeight: "700",color: "rgb(0 120 223)" }}>
                                        Customizing Your Store
                                    </Text>
                                
                            </VStack>
                        </HStack>
                    </Card>
                    <Card className="a">
                        <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                            <Icon size={50} icon={info}></Icon>
                            <VStack spacing={3}>
                                
                                    <Text style={{ fontSize: "20px", fontWeight: "700",color: "rgb(0 120 223)" }}>
                                        Add Your Product
                                    </Text>
                                
                            </VStack>
                        </HStack>
                    </Card>
                    <Card className="a">
                        <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                            <Icon size={50} icon={info}></Icon>
                            <VStack spacing={3}>
                                
                                    <Text style={{ fontSize: "20px", fontWeight: "700",color: "rgb(0 120 223)" }}>
                                        Get Paid
                                    </Text>
                                
                            </VStack>
                        </HStack>
                    </Card>
                    <Card className="a">
                        <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                            <Icon size={50} icon={info}></Icon>
                            <VStack spacing={3}>
                                
                                    <Text style={{ fontSize: "20px", fontWeight: "700",color: "rgb(0 120 223)" }}>
                                        Collect Sales Tax
                                    </Text>
                                
                            </VStack>
                        </HStack>
                    </Card>
                    <Card className="a">
                        <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                            <Icon size={50} icon={info}></Icon>
                            <VStack spacing={3}>
                                
                                    <Text style={{ fontSize: "20px", fontWeight: "700",color: "rgb(0 120 223)" }}>
                                        Grow Your Business
                                    </Text>
                                
                            </VStack>
                        </HStack>
                    </Card>
                </VStack>

            </VStack>
            <style>
                {`
                .a:hover{background-color:#ADD8E6;}
                `}
            </style>
        </>
    );
};

// @meta-start
Actionpanel7.meta = {
    title: 'Action Panel 7',
    path: '/New-patterns/actionpanel7',
};
// @meta-end

export default Actionpanel7;