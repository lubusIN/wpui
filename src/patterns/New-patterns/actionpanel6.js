/**
 * WordPress dependencies.
 */
import {
    DropdownMenu,
    MenuGroup, MenuItem,
    Card,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    Button,
} from "@wordpress/components";
import { moreVertical } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Actionpanel6() {
    return (
        <VStack alignment="center" spacing={5}>
            <Card>
                <Card isBorderless style={{ padding: "15px", borderBottom: "0.5px solid #DCDCDC" }}>
                    <HStack>
                        <Heading>Inbox</Heading>
                        <DropdownMenu icon={moreVertical}>
                            {() => (
                                <>
                                    <MenuGroup>
                                        <MenuItem>View</MenuItem>
                                        <MenuItem>Dismiss</MenuItem>
                                    </MenuGroup>
                                </>
                            )}
                        </DropdownMenu>
                    </HStack>
                </Card>
                <VStack style={{ padding: "25px" }} alignment="left" spacing={5}>
                        <Text variant="muted" weight={500}>
                            4 Minutes ago
                            </Text>
                        <Text weight={550}>
                            Setup a Refund and Retuns Policy page to boost your store's credibility.
                            </Text>
                        <Text variant="muted" weight={500}>
                            We have created a sample draft Refund and Return Policy page for you. Please have a look and Update it to fic your store.
                            </Text>
                        <HStack alignment="left">
                            <Button variant="secondary">Edit Page</Button>
                            <Button>Dismiss</Button>
                        </HStack>
                </VStack>
                <VStack style={{ padding: "25px" }} alignment="left" spacing={5}>
                        <Text variant="muted" weight={500}>
                            4 Minutes ago</Text>
                        <Text weight={550}>
                            Connect to your Website</Text>
                        <Text variant="muted" weight={500}>
                            Connect to get important notifications and updates.</Text>
                        <HStack alignment="left">
                            <Button variant="secondary">Connect</Button>
                            <Button>Dismiss</Button>
                        </HStack>
                </VStack>
            </Card>
        </VStack>
    );
};

Actionpanel6.meta = {
    title: 'Action Panel 6',
    path: '/New-patterns/actionpanel6',
};

export default Actionpanel6;