/**
 * WordPress dependencies.
 */
import {
    Button,
    Icon,
    Card,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    ExternalLink,
} from "@wordpress/components";
import { info } from "@wordpress/icons";

/**
 * Render Subscription empty state 3
 */
function Emptystate3() {
    return (
        <VStack alignment="center" spacing={4}>
            <Icon icon={info} size={80}></Icon>
            <Heading>Ready to start selling something awesome?</Heading>
            <HStack alignment="center" spacing={3}>
                <Button variant="primary">Create Product</Button>
                <Button variant="secondary">Start Import</Button>
            </HStack>

            <Card>
                <Card isBorderless style={{ padding: "20px", borderBottom: "0.5px solid #DCDCDC" }}>
                    <Text weight={600}>Other types of products</Text>
                </Card>

                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={2}>
                            <Text weight={650}>Product Bundles</Text>
                            <Text weight={500}>Offer other customizable bundles and assembled products</Text>
                        </VStack>
                    </HStack>
                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button variant="secondary" >Learn More</Button>
                    </HStack>
                </HStack>

                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={2}>
                            <Text weight={650}>Product Vendors</Text>
                            <Text weight={500}>Turn your store into multi-vendor marketplace</Text>
                        </VStack>
                    </HStack>
                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button variant="secondary" >Learn More</Button>
                    </HStack>
                </HStack>

                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={2}>
                            <Text weight={650}>Bookings</Text>
                            <Text weight={500}>Allow customers to book appointments, make reservations or rent equipment without leaving your site</Text>
                        </VStack>
                    </HStack>
                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button variant="secondary">Learn More</Button>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text weight={650}>Subscription</Text>
                            <Text weight={500}>Let customers subscribe to your products or services and pay on a weekly, monthly or annual basis</Text>
                        </VStack>
                    </HStack>
                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button variant="secondary">Learn More</Button>
                    </HStack>
                </HStack>

                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text weight={650}>Membership</Text>
                            <Text weight={500}>Give members access to restricted content or products, for a fee or for free</Text>
                        </VStack>
                    </HStack>
                    <HStack style={{ padding: "20px" }} expanded={false}>
                        <Button variant="secondary">Learn More</Button>
                    </HStack>
                </HStack>

                <Card isBorderless style={{ padding: "20px", borderTop: "0.5px solid #DCDCDC" }}>
                    <ExternalLink href="">Browse all extension</ExternalLink>
                </Card>
            </Card>
        </VStack>
    );
};

Emptystate3.meta = {
    title: 'Empty State 3',
    path: '/New-patterns/emptystate3',
    name: 'Emptystate3',
    category: 'NewPatterns',
};

export default Emptystate3;