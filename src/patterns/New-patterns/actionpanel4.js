/**
 * WordPress dependencies.
 */
import {
    DropdownMenu,
    MenuGroup, MenuItem,
    Icon,
    Card,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    Button,
} from "@wordpress/components";
import { info, moreVertical } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function actionpanel4() {
    return (
        <VStack alignment="center" spacing={5}>
            <Card>
                <Card isBorderless style={{ padding: "15px", borderBottom: "0.5px solid #DCDCDC" }}>
                    <HStack>
                        <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                            Inbox
                        </Text>
                        <DropdownMenu icon={moreVertical}>
                            {() => (
                                <>
                                    <MenuGroup>
                                        <MenuItem>
                                            Data
                                        </MenuItem>
                                        <MenuItem>
                                            Data
                                        </MenuItem>
                                    </MenuGroup>
                                </>
                            )}
                        </DropdownMenu>
                    </HStack>
                </Card>

                <VStack style={{ padding: "25px" }} alignment="left" spacing={5}>
                    <VStack spacing={4}>
                        <Text style={{ color: "grey", fontWeight: "500" }}>
                            4 Minutes ago
                        </Text>
                        <Text style={{ fontSize: "20px", fontWeight: "600" }}>
                            Setup a Refund and Retuns Policy page to boost your store's credibility.
                        </Text>
                        <Text style={{ color: "grey", fontWeight: "500", fontSize: "15px" }}>
                            We have created a sample draft Refund and Return Policy page for you. Please have a look and Update it to fic your store.
                        </Text>
                        <HStack alignment="left">
                            <Button style={{ color: "rgb(0 137 210)", border: "2px solid #007FFF", fontWeight: "500" }}>Edit Page</Button>
                            <Button style={{ color: "grey", fontWeight: "500" }}>Dismiss</Button>
                        </HStack>
                    </VStack>
                </VStack>

                <VStack style={{ padding: "25px" }} alignment="left" spacing={5}>
                    <VStack spacing={4}>
                        <Text style={{ color: "grey", fontWeight: "500" }}>
                            4 Minutes ago
                        </Text>
                        <Text style={{ fontSize: "20px", fontWeight: "600" }}>
                            Connect to your Website
                        </Text>
                        <Text style={{ color: "grey", fontWeight: "500", fontSize: "15px" }}>
                            Connect to get important notifications and updates.
                        </Text>
                        <HStack alignment="left">
                            <Button style={{ color: "rgb(0 137 210)", border: "2px solid #007FFF", fontWeight: "500" }}>Connect</Button>
                            <Button style={{ color: "grey", fontWeight: "500" }}>Dismiss</Button>
                        </HStack>
                    </VStack>
                </VStack>
            </Card>
        </VStack>
    );
};

export default actionpanel4;