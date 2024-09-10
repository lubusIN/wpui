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
    __experimentalHeading as Heading,
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
                        <Heading>Things to do next</Heading>
                    <DropdownMenu icon={moreVertical}>
                        {() => (
                            <>
                                <MenuGroup><MenuItem>View</MenuItem>
                                    <MenuItem>Dismiss</MenuItem>
                                </MenuGroup>
                            </>
                        )}
                    </DropdownMenu>
                    </HStack>
                </Card>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={3}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text weight={700} size={20} color="blue">
                                Manage Your website.com Marketplace Subscription
                            </Text>
                            <Text variant="muted" weight={700} size={15}>
                                Make sure cart and checkout flows are configured correctly for your Shoppers.
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={3}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text weight={700} size={20} color="blue">
                                Get the free Mobile App
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={3}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text weight={700} size={20} color="blue">
                                Review Shipping Options
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={3}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text weight={700} size={20} color="blue">
                                Review your checkout Experience
                            </Text>
                            <Text variant="muted" weight={700} size={15}>
                                Make sure cart and checkout flows are configured correctly for your Shoppers.
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={3}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text weight={700} size={20} color="blue">
                                Setup Google listing & Ads
                            </Text>
                            <Text variant="muted" weight={700} size={15}>
                                20 Minutes.
                            </Text>
                        </VStack>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack style={{ padding: "15px" }} alignment="left" spacing={3}>
                        <Icon size={50} icon={info}></Icon>
                        <VStack spacing={3}>
                            <Text weight={700} size={20} color="blue">
                                Get your  in front of engaged shoopers with our website
                            </Text>
                            <Text variant="muted" weight={700} size={15}>
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
    path: '/New-patterns/actionpanel5',
    name: 'Actionpanel5',
    category: 'NewPatterns',
};

export default Actionpanel5;