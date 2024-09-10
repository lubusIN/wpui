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
    CardHeader,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from "@wordpress/components";
import { settings, globe, copy, download } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell6() {
    return (
        <Card>
            <CardHeader>
                <HStack expanded={false}>
                    <img src="https://raw.githubusercontent.com/lubusIN/wpui/19be18fb1ed5a50a79bd08ac4ee28691abf88b52/favicon.svg"></img>
                    <Heading>WPUI</Heading>
                </HStack>
                <HStack alignment="right" expanded={false}>
                    <Button variant="secondary" icon={globe}>Launch</Button>
                    <Button variant="secondary" icon={copy}>Copy</Button>
                    <Button variant="secondary" icon={download}>Download</Button>
                    <DropdownMenu icon={settings}>
                        {() => (
                            <>
                                <MenuGroup><MenuItem>View</MenuItem>
                                    <MenuItem>Dismiss</MenuItem>
                                </MenuGroup>
                            </>
                        )}
                    </DropdownMenu>
                </HStack>
            </CardHeader>
            <CardBody style={{ padding: "0px" }}>
                <Card>
                    <HStack expanded={false}>
                        <CardBody style={{ backgroundColor: "black", width: "25%", padding: "20px" }}>
                            <VStack spacing={4}>
                                <Heading color="white">Steps</Heading>
                                <VStack expanded={false} spacing={2}>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Login</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Install Plugin</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Install Theme</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Activate Plugin</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Activate Theme</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Copy File Directory</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Define Site URL</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Import File</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Create Directory</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Move file/directory</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Replace Site</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Remove file</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Run PHP</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Set PHP</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Unzip</Button>
                                    <Button style={{ color: "white" }}><Icon size={20}></Icon>Write File</Button>
                                </VStack>
                            </VStack>
                        </CardBody>
                        <Card size="large" style={{ backgroundColor: "#eeeeee" }}>
                            {/*Enter Your Content Here*/}
                        </Card>
                    </HStack>
                </Card>
            </CardBody>
        </Card>
    );
};

// @meta-start
Shell6.meta = {
    title: 'Shell 6',
    name: 'Shell6',
    category: 'NewPatterns',
    path: '/NewPatterns/shell6',
};
// @meta-end

export default Shell6;