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
    TextControl,
    TextareaControl,
    SelectControl,
    ToggleControl,
    CheckboxControl,
    TabPanel,
    ColorPicker,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
    __experimentalNumberControl as NumberControl
} from "@wordpress/components";
import { moreVertical, drawerRight } from "@wordpress/icons";

/**
 * Render Shell 3
 */
function Shell3() {
    const data = {
        tab1: (
            <>
                <TextControl label="Text Control" value="Sample Text" />
                <TextareaControl label="Textarea Control" value="Sample Textarea" />
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
                <ToggleControl label="Toggle Control" checked={true} />
                <NumberControl
                    label="Scroll offset"
                />
                <NumberControl
                    label="Animation Speed"
                />
            </>

        ),
        tab2: (
            <>
                <CheckboxControl
                    checked
                    label="Enable"
                    onChange={function noRefCheck() { }}
                />
                <ColorPicker onChange={function noRefCheck() { }} />
            </>
        )
    };

    return (
        <Card>
            <CardHeader>
                <HStack expanded={false}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.12 95.12" style={{ width: '2.5em', height: '2.5em' }}>
                            <rect fill="#3858e9" width="93.73" height="93.73" rx="19.38" ry="19.38" />
                            <path fill="#fefefe" d="m38.37,50.15c-3.67-.01-7.33-.06-11-.02-4.67.05-8.41-3.59-9.27-7.24-.2-.85-.33-1.71-.33-2.59,0-4.21,0-8.41,0-12.62.02-5.66,4.24-9.86,9.91-9.87,12.25-.02,24.49,0,36.74-.01.4,0,.81-.02,1.21-.03,2.77-.02,5.24.77,7.27,2.71,1.97,1.88,3,4.21,3.02,6.92.04,4.34.04,8.68,0,13.02-.04,5.42-4.27,9.66-9.7,9.68-8.89.03-17.77,0-26.66.01-.4,0-.81.02-1.21.03Zm1.63-6.53c8.78.01,17.56.03,26.34.02,1.78,0,3.12-1.38,3.13-3.17.03-4.34.03-8.68,0-13.02-.01-1.79-1.35-3.15-3.12-3.17-2.52-.03-5.05,0-7.57.02-1.65,0-3.3-.03-4.95-.03-8.72,0-17.43,0-26.15,0-2.01,0-3.42,1.28-3.44,3.17-.03,4.34-.03,8.68,0,13.02.01,1.79,1.35,3.16,3.13,3.17,4.21.03,8.41,0,12.62-.02Z" />
                            <path fill="#fefefe" d="m25.45,63.07c-1.16-.1-2.39.17-3.36-.85-.98-1.03-1.35-2.31-.86-3.58.48-1.25,1.63-2.05,3.05-2.06,2.82-.03,5.63-.02,8.45-.03.4.01.81.03,1.21.03,11.74,0,23.49,0,35.23,0,2.55,0,4.2,2.14,3.34,4.36-.49,1.27-1.47,1.97-2.84,2.09-.43.04-.87.01-1.31.01-13.9,0-27.79,0-41.69,0-.4,0-.81.02-1.21.03Z" />
                            <path fill="#fefefe" d="m46.74,75.96c-7.47,0-14.93,0-22.4,0-1.56,0-2.74-.88-3.18-2.3-.41-1.33.07-2.74,1.22-3.56.72-.52,1.54-.6,2.4-.6,13.72,0,27.44,0,41.17,0,1.14,0,2.29-.01,3.43,0,1.88.03,3.32,1.41,3.34,3.19.02,1.83-1.42,3.26-3.37,3.26-7.53.01-15.07,0-22.6,0Z" />
                        </svg>
                        <Heading style={{ marginLeft: '10px' }}>WPUI</Heading>
                    </div>
                </HStack>
                <HStack alignment="right">
                    <Button variant="primary">Publish</Button>
                    <Button><Icon icon={drawerRight} /></Button>
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
                        {(tab) => (
                            <div style={{ padding: '10px', width: '15vw', height: '100vh' }}>
                                {data[tab.name]}
                            </div>
                        )}
                    </TabPanel>
                </CardBody>
            </HStack>
        </Card>
    );
};

// @meta-start
Shell3.meta = {
    title: 'Shell 3',
    name: 'Shell3',
    category: 'Shells',
    path: '/shells/shell3',
};
// @meta-end

export default Shell3;
