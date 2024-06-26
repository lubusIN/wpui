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
} from "@wordpress/components";
import { info, moreVertical } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Actionpanel5() {
    return (
        <VStack alignment="center" spacing={5}>

            <Card>
                <Card isBorderless style={{ padding: "15px", borderBottom: "0.5px solid #DCDCDC" }}>
                    <HStack>
                        <Text style={{ fontSize: "20px", fontWeight: "700" }}>
                            Things to do next
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


                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text style={{ fontSize: "20px", fontWeight: "700", color: "rgb(0 137 210)" }}>
                                Manage Your website.com Marketplace Subscription
                            </Text>
                        </VStack>
                    </HStack>
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

                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text style={{ fontSize: "20px", fontWeight: "700", color: "rgb(0 137 210)" }}>
                                Get the free Mobile App
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text style={{ fontSize: "20px", fontWeight: "700", color: "rgb(0 137 210)" }}>
                                Review Shipping Options
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text style={{ fontSize: "20px", fontWeight: "700", color: "rgb(0 137 210)" }}>
                                Review your checkout Experience
                            </Text>
                            <Text style={{ fontSize: "15px", fontWeight: "600", color: "grey" }}>
                                Make sure cart and checkout flows are configured correctly for your Shoppers.
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>

                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text style={{ fontSize: "20px", fontWeight: "700", color: "rgb(0 137 210)" }}>
                                Setup Google listing & Ads
                            </Text>
                            <Text style={{ fontSize: "15px", fontWeight: "600", color: "grey" }}>
                                20 Minutes.
                            </Text>
                        </VStack>
                    </HStack>
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

                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={5}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text style={{ fontSize: "20px", fontWeight: "700", color: "rgb(0 137 210)" }}>
                                Get your  in front of engaged shoopers with our website
                            </Text>
                            <Text style={{ fontSize: "15px", fontWeight: "600", color: "grey" }}>
                                20 Minutes.
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>

            </Card>
        </VStack>
    );
};

Actionpanel5.meta = {
    title: 'Action Panel 5',
    path: '/new-patterns/Actionpanel5',
};

export default Actionpanel5;