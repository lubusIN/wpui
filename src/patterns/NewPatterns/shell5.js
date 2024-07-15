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
    TabPanel
} from "@wordpress/components";
import { chevronLeft, alignJustify, desktop, moreVertical, drawerRight, color, create, wordpress, chevronRight } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell5() {
    return (
        <Card>
            <CardHeader>
                <HStack expanded={false}>
                    <Icon size={30} icon={wordpress}></Icon>
                    <Button><Icon size={30} icon={create}></Icon></Button>
                    <Button><Icon size={30} icon={chevronLeft}></Icon></Button>
                    <Button><Icon size={30} icon={chevronRight}></Icon></Button>
                    <DropdownMenu icon={alignJustify}>
                        {() => (
                            <>
                                <MenuGroup><MenuItem>View</MenuItem>
                                    <MenuItem>Dismiss</MenuItem>
                                </MenuGroup>
                            </>
                        )}
                    </DropdownMenu>
                </HStack>
                <HStack alignment="right">
                    <Button variant="secoondary">Save Draft</Button>
                    <Button><Icon icon={desktop}></Icon></Button>
                    <Button variant="primary">Publish</Button>
                    <Button><Icon icon={drawerRight}></Icon></Button>
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
            </CardHeader>
            <HStack alignment="right" expanded={false} spacing={5}>
            <CardBody style={{padding:"0px"}}>
            <TabPanel
                    className="my-tab-panel"
                    tabs={[
                        {
                            name: 'tab1',
                            title: 'Post',
                            className: 'tab-one',
                        },
                        {
                            name: 'tab2',
                            title: 'Block',
                            className: 'tab-two',
                        },
                    ]}
                >
                    {(tab) => <div style={{ backgroundColor:"rgb(245 245 245)", padding:"100px" }}></div>}
                </TabPanel>
            </CardBody>
            </HStack>
        </Card>
    );
};

// @meta-start
Shell5.meta = {
    title: 'Shell 5',
    path: '/NewPatterns/shell5',
};
// @meta-end

export default Shell5;