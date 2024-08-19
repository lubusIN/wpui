/**
 * WordPress dependencies.
 */
import React, { useState } from 'react';
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
    TextControl,
    TextareaControl,
    SelectControl,
    ToggleControl,
    DateTimePicker
} from "@wordpress/components";
import { alignJustify, desktop, moreVertical, drawerRight, wordpress } from "@wordpress/icons";

// Render TabPanel component
const TabPanel = ({ tab, children }) => {
    return (
        <div>
            {children}
        </div>
    );
}

const tabData = (
    <div style={{ padding: '30px' }}>
        <TextControl
            label="Text Control"
            value="Sample Text"
            onChange={() => { }}
        />
        <TextareaControl
            label="Textarea Control"
            value="Sample Textarea"
            onChange={() => { }}
        />
        <SelectControl
            label="Select Control"
            value="Select"
            options={[
                { label: 'Select 1' },
                { label: 'Select 2' },
                { label: 'Select 3' }
            ]}
            onChange={() => { }}
        />
        <ToggleControl
            label="Toggle Control"
            checked={true}
            onChange={() => { }}
        />
        <DateTimePicker
            currentDate={new Date()}
            onChange={() => { }}
        />
    </div>
);

/**
 * Render Shell 3
 */
function Shell3() {
    return (
        <Card>
            <CardHeader>
                <HStack expanded={false}>
                    <Icon size={30} icon={wordpress} />
                    <DropdownMenu icon={alignJustify}>
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
                <HStack alignment="right">
                    <Button>
                        <Icon icon={desktop} />
                    </Button>
                    <Button variant="primary">Publish</Button>
                    <Button>
                        <Icon icon={drawerRight} />
                    </Button>
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
            </CardHeader>
            <HStack alignment="right" expanded={false} spacing={5}>
                <CardBody style={{ padding: "0px", borderLeft: "1px solid #dfdfdf", borderBottom: "1px solid #dfdfdf" }}>
                    <TabPanel
                        tab={{
                            className: 'tab',
                        }}
                    >
                        {tabData}
                    </TabPanel>
                </CardBody>
            </HStack>
        </Card>
    );
}

// @meta-start
Shell3.meta = {
    title: 'Shell 3',
    name: 'Shell3',
    category: 'Shells',
    path: '/shells/shell3',
};
// @meta-end

export default Shell3;
