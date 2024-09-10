/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ExternalLink,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { blockTable, postList, tag, category } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell2() {
    return (
        <Card>
            <CardHeader style={{ backgroundColor: "rgb(51 70 94)" }}>
                <HStack expanded={false} spacing={3}>
                    <img height={30} width={30} src="https://raw.githubusercontent.com/lubusIN/wpui/19be18fb1ed5a50a79bd08ac4ee28691abf88b52/favicon.svg"></img>
                    <HStack>
                        <Button icon={blockTable} style={{ color: "white" }}> Feild Groups</Button>
                        <Button icon={postList} style={{ color: "white",}}> Post Types</Button>
                        <Button icon={tag} style={{ color: "white" }}> Taxonomies</Button>
                        <Button icon={category} style={{ color: "white" }}> More</Button>
                    </HStack>
                </HStack>
            </CardHeader>
            <CardBody style={{ padding: "150px" }}>
                {/*Enter Your Content*/}
            </CardBody>
            <CardFooter isShady justify="center">
                <HStack expanded={false} spacing={15} alignment="center">
                    <ExternalLink style={{ textDecoration: "none" }}>About us</ExternalLink>
                    <ExternalLink>Help</ExternalLink>
                    <ExternalLink>Contact us</ExternalLink>
                </HStack>
            </CardFooter>
        </Card>
    );
};

// @meta-start
Shell2.meta = {
    title: 'Shell 2',
    name: 'Shell2',
    category: 'NewPatterns',
    path: '/NewPatterns/shell2',
};
// @meta-end
export default Shell2;