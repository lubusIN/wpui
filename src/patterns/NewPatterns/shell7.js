/**
 * WordPress dependencies.
 */
import {
    Icon,
    Card,
    CardBody,
    CardFooter,
    ExternalLink,
    MenuGroup, MenuItem,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    Button,
} from "@wordpress/components";
import { navigation, styles, drawerLeft, page, addTemplate, store, category, tag, currencyDollar, reusableBlock, keyboardReturn } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell7() {
    return (
        <>
            <Card>
                <CardBody style={{ backgroundColor: "rgb(0 27 40)", padding: "10px" }}>
                    <HStack>
                        <Card style={{ backgroundColor: "rgb(0 27 40)", paddingBottom: "200px", width: "15%" }}>
                            <VStack spacing={4}>
                                <VStack expanded={false} spacing={2}>
                                    <Button style={{ color: "white" }}><Icon size={20} icon={store}></Icon>Overview</Button>
                                    <Button style={{ color: "white" }}><Icon size={20} icon={category}></Icon>Sites</Button>
                                    <Button style={{ color: "white" }}><Icon size={20} icon={tag}></Icon>Marketplace</Button>
                                    <Button style={{ color: "white" }}><Icon size={20} icon={currencyDollar}></Icon>Purchases</Button>
                                    <Button style={{ color: "white" }}><Icon size={20} icon={reusableBlock}></Icon>referrals</Button>
                                    <Button style={{ color: "white" }}><Icon size={20} icon={keyboardReturn}></Icon> Migrations</Button>
                                </VStack>
                            </VStack>
                        </Card>
                        <Card size="large" style={{ borderRadius: "10px", height: "500px", width: "100%", padding: "20px" }}>
                            <HStack>
                                <Heading>Agency Overflow</Heading>
                                <HStack expanded={false}>
                                    <Button variant="secondary">Add Sites</Button>
                                    <Button variant="primary">Add Products</Button>
                                </HStack>
                            </HStack>
                            <VStack spacing={2} style={{margin:"10px"}}>
                                <Card style={{ padding: "100px", borderRadius: "10px" }}></Card>
                                <Card style={{ padding: "100px", borderRadius: "10px" }}></Card>
                            </VStack>
                        </Card>
                    </HStack>
                </CardBody>
            </Card>
        </>
    );
};

// @meta-start
Shell7.meta = {
    title: 'Shell 7',
    path: '/NewPatterns/shell7',
};
// @meta-end

export default Shell7;