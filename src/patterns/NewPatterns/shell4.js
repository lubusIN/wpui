/**
 * WordPress dependencies.
 */
import {
    Card,
    Icon,
    CardBody,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    CardFooter,
    ExternalLink,
    __experimentalHeading as Heading,
    __experimentalText as Text,
    MenuGroup, MenuItem
} from "@wordpress/components";
import { navigation, styles, drawerLeft, page, addTemplate } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell4() {
    return (
        <>
        <Card>
            <CardBody style={{ backgroundColor: "black", padding: "30px" }}>
                <HStack>
                    <VStack spacing={3}>
                        <Heading color="white">Design</Heading>
                        <Text color="white">Customize the appearance of your website using the block  editor.</Text>
                        <VStack expanded={false}>
                            <MenuGroup>
                            <MenuItem style={{ color: "white" }}><Icon size={20} icon={navigation}></Icon>Navigations</MenuItem>
                            <MenuItem style={{ color: "white" }}><Icon size={20} icon={styles}></Icon>Styles</MenuItem>
                            <MenuItem style={{ color: "white" }}><Icon size={20} icon={page}></Icon>Pages</MenuItem>
                            <MenuItem style={{ color: "white" }}><Icon size={20} icon={drawerLeft}></Icon>Templates</MenuItem>
                            <MenuItem style={{ color: "white" }}><Icon size={20} icon={addTemplate}></Icon>Patterns</MenuItem>
                            </MenuGroup>
                        </VStack>
                    </VStack>
                    <Card style={{ padding: "300px", borderRadius: "10px" }}>
                    </Card>
                </HStack>
            </CardBody>
            <CardFooter isShady justify="center">
                <HStack expanded={false} spacing={15} alignment="center">
                    <ExternalLink style={{ textDecoration: "none" }}>About us</ExternalLink>
                    <ExternalLink>Help</ExternalLink>
                    <ExternalLink>Contact us</ExternalLink>
                </HStack>
            </CardFooter>
        </Card>
        </>
    );
};

// @meta-start
Shell4.meta = {
    title: 'Shell 2',
    path: '/NewPatterns/shell4',
};
// @meta-end
export default Shell4;