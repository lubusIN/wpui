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
import { navigation, styles, drawerLeft, page, addTemplate } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell4() {
    return (
        <>
            <Card>
                <CardBody style={{ backgroundColor: "black",padding:"10px"}}>
                    <HStack>
                    <Card style={{ backgroundColor: "black", padding: "10px",paddingBottom:"200px" }}>
                        <VStack spacing={4}>
                            <Heading color="white">Design</Heading>
                            <Text color="white">Customize the appearance of your website using the block  editor.</Text>
                            <VStack expanded={false} spacing={2}>
                                    <Button style={{ color: "white" }}><Icon size={20} icon={navigation}></Icon>Navigations</Button>
                                    <Button style={{ color: "white" }}><Icon size={20} icon={styles}></Icon>Styles</Button>
                                    <Button style={{ color: "white" }}><Icon size={20} icon={page}></Icon>Pages</Button>
                                    <Button style={{ color: "white" }}><Icon size={20} icon={drawerLeft}></Icon>Templates</Button>
                                    <Button style={{ color: "white" }}><Icon size={20} icon={addTemplate}></Icon>Patterns</Button>
                            </VStack>
                        </VStack>
                    </Card>
                        <Card size="large" style={{ borderRadius: "10px", height:"500px", width:"100%" }}>
                        </Card>
                    </HStack>
                </CardBody>
            </Card>
        </>
    );
};

// @meta-start
Shell4.meta = {
    title: 'Shell 4',
    path: '/NewPatterns/shell4',
};
// @meta-end
export default Shell4;