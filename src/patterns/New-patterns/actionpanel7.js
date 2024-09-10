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
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { info } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Actionpanel7() {
    return (
        <>
            <VStack>
                <VStack spacing={4} style={{ padding: "20px" }}>
                    <VStack>
                        <Heading>Start customizing your Store</Heading>
                        <Text variant="muted" weight={600} size={18}>Quickly Create a beautiful looking store using our built-in-store designer, or select a pre-build theme and customize it to fit your brand.</Text>
                    </VStack>
                    <HStack>
                        <Button variant="primary">Start customizing</Button>
                    </HStack>
                </VStack>
                <VStack>
                    <Card className="hover">
                        <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                            <Icon size={50} icon={info}></Icon>
                            <VStack spacing={3}>
                                <Text weight={700} size={20} color="blue">Customizing Your Store</Text>
                            </VStack>
                        </HStack>
                    </Card>
                    <Card className="hover">
                        <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                            <Icon size={50} icon={info}></Icon>
                            <VStack spacing={3}>
                                <Text weight={700} size={20} color="blue">Add Your Product</Text>
                            </VStack>
                        </HStack>
                    </Card>
                    <Card className="hover">
                        <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                            <Icon size={50} icon={info}></Icon>
                            <VStack spacing={3}>
                                <Text weight={700} size={20} color="blue">Get Paid</Text>
                            </VStack>
                        </HStack>
                    </Card>
                    <Card className="hover">
                        <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                            <Icon size={50} icon={info}></Icon>
                            <VStack spacing={3}>
                                <Text weight={700} size={20} color="blue">Collect Sales Tax</Text>
                            </VStack>
                        </HStack>
                    </Card>
                    <Card className="hover">
                        <HStack style={{ padding: "15px" }} alignment="left" spacing={5} expanded={false}>
                            <Icon size={50} icon={info}></Icon>
                            <VStack spacing={3}>
                                <Text weight={700} size={20} color="blue">Grow Your Business</Text>
                            </VStack>
                        </HStack>
                    </Card>
                </VStack>

            </VStack>
            <style>
                {`
                .hover:hover{background-color:#ADD8E6;}
                `}
            </style>
        </>
    );
};

Actionpanel7.meta = {
    title: 'Action Panel 7',
    path: '/New-patterns/actionpanel7',
    name: 'Actionpanel7',
    category: 'NewPatterns',
};

export default Actionpanel7;