/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    Icon,
    CardBody,
    DropdownMenu,
    MenuGroup,
    MenuItem,
    __experimentalHStack as HStack,
    CardHeader,
    CardFooter,
    ExternalLink,
} from "@wordpress/components";
import { blockTable, postList, tag, chevronDown, category, color, textColor } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell2() {
    return (
        <Card>
            <CardHeader style={{ backgroundColor: "rgb(51 70 94)" }}>
                <HStack expanded={false}>
                    <img height={20} width={70} src="https://raw.githubusercontent.com/lubusIN/wpui/add/new-patterns/src/img/demo-logo/Logo%20-%20%235.png"></img>
                    <MenuGroup>
                        <HStack expanded={false}>
                        <MenuItem style={{ color: "white" }}><Icon size={20} icon={blockTable}></Icon>Feild Groups</MenuItem>
                        <MenuItem style={{ color: "white" }}><Icon size={20} icon={postList}></Icon>Post Types</MenuItem>
                        <MenuItem style={{ color: "white" }}><Icon size={20} icon={tag}></Icon>Taxonomies</MenuItem>
                        <MenuItem style={{ color: "white" }}><Icon size={20} icon={category}></Icon>More
                            <DropdownMenu icon={chevronDown}>
                                {() => (
                                    <>
                                        <MenuGroup><MenuItem>View</MenuItem>
                                            <MenuItem>Dismiss</MenuItem>
                                        </MenuGroup>
                                    </>
                                )}
                            </DropdownMenu></MenuItem>
                                </HStack>
                    </MenuGroup>
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
    path: '/NewPatterns/shell2',
};
// @meta-end
export default Shell2;