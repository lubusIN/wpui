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
function Emptystate3() {
    return (
        <VStack alignment="center" spacing={5}>
            <Icon icon={info} size={100}></Icon>
            <Text style={{ fontWeight: "600", fontSize: "20px" }}>Ready to start selling something awesome?</Text>
            <HStack alignment="center" spacing={3}>
                <Button style={{ padding: "25px", backgroundColor: "rgb(0 166 255)", color: "White", fontWeight: "550" }}>
                    Create Product
                </Button>
                <Button style={{ padding: "25px", color: "#007FFF", fontWeight: "550", border: "1.5px solid #007FFF" }}>
                    Start Import
                </Button>
            </HStack>

            <Card>
                <Card isBorderless style={{ padding: "20px", borderBottom: "0.5px solid #DCDCDC" }}>
                    <Text style={{ fontSize: "20px", fontWeight: "600" }}>
                        Other types of products
                    </Text>
                </Card>

                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                                Product Bundles
                            </Text>
                            <Text style={{ fontSize: "15px",fontWeight: "450" }}>
                               Offer other customizable bundles and assembled products
                            </Text>
                        </VStack>
                    </HStack>

                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button style={{ color: "#007FFF",border: "2px solid #007FFF" }} >Learn More</Button>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                                Product Vendors
                            </Text>
                            <Text style={{ fontSize: "15px",fontWeight: "450" }}>
                               Turn your store into multi-vendor marketplace
                            </Text>
                        </VStack>
                    </HStack>

                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button style={{ color: "#007FFF",border: "2px solid #007FFF" }} >Learn More</Button>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                                Bookings
                            </Text>
                            <Text style={{ fontSize: "15px",fontWeight: "450" }}>
                               Allow customers to book appointments, make reservations or rent equipment without leaving your site
                            </Text>
                        </VStack>
                    </HStack>

                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button style={{ color: "#007FFF",border: "2px solid #007FFF" }} >Learn More</Button>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                                Subscription
                            </Text>
                            <Text style={{ fontSize: "15px",fontWeight: "450" }}>
                               Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis
                            </Text>
                        </VStack>
                    </HStack>

                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button style={{ color: "#007FFF",border: "2px solid #007FFF" }} >Learn More</Button>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                                Membership
                            </Text>
                            <Text style={{ fontSize: "15px",fontWeight: "450" }}>
                               Give members access to restricted content or products, for a fee or for free
                            </Text>
                        </VStack>
                    </HStack>
                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button style={{ color: "#007FFF",border: "2px solid #007FFF" }} >Learn More</Button>
                    </HStack>
                </HStack>

                <Card isBorderless style={{ padding: "20px", borderTop: "0.5px solid #DCDCDC" }}>
                    <ExternalLink href="" style={{ fontSize: "20px", fontWeight: "600", color:"#007FFF" }}>
                        Browse all extension
                    </ExternalLink>
                </Card>

            </Card>
        </VStack>
    );
};

// @meta-start
Emptystate3.meta = {
    title: 'Empty State 3',
    path: '/New-patterns/emptystate3',
};
// @meta-end

export default Emptystate3;