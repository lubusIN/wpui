/**
 * WordPress dependencies.
 */
import React, { useState } from 'react';

// TabPanel component
const TabPanel = ({ tabs, children }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };
    return (
        <div className="tab-panel-container">
            <div className="tab-titles">
                {tabs.map((tab) => (
                    <Button
                        key={tab.name}
                        className={tab.className}
                        onClick={() => handleTabChange(tab.name)}
                    >
                        {tab.title}
                    </Button>
                ))}
            </div>
            <div className="tab-content">
                {children({ activeTab })}
            </div>
        </div>
    );

}
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
} from "@wordpress/components";

import { alignJustify, desktop, moreVertical, drawerRight, wordpress, border } from "@wordpress/icons";
const data = {
    tab1: 'Tab 1 Component',
    tab2: 'Tab 2 Component',
};
/**
 * Render Subscription Shell
 */
function Shell5() {
    return (
        <Card>
            <CardHeader>
                <HStack expanded={false}>
                    <Icon size={30} icon={wordpress}></Icon>
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
                <CardBody style={{ padding: "0px", borderLeft: "1px solid #dfdfdf", borderBottom: "1px solid #dfdfdf" }}>
                    <TabPanel
                        className="my-tab-panel"
                        tabs={[
                            {
                                name: 'tab1',
                                title: 'Tab 1',
                                className: 'tab-one',
                            },
                            {
                                name: 'tab2',
                                title: 'Tab 2',
                                className: 'tab-two',
                            },
                        ]}
                    >
                        {({ activeTab }) => (
                            <div style={{ backgroundColor: 'rgb(245, 245, 245)', padding: '50px' }}>
                                <p>{data[activeTab]}</p>
                            </div>
                        )}
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