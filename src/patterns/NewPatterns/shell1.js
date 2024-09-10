/**
 * WordPress dependencies.
 */
import {
    Icon,
    Card,
    CardHeader,
    CardBody,
    TabPanel,
    ExternalLink,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { check } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell1() {
    return (
        <Card>
            <CardHeader style={{ backgroundColor: "rgb(208 230 255)" }}>
                <HStack expanded={false} spacing={3}>
                    <img src="https://raw.githubusercontent.com/lubusIN/wpui/19be18fb1ed5a50a79bd08ac4ee28691abf88b52/favicon.svg"></img>
                    <Heading size={20}>WPUI</Heading>
                </HStack>
                <VStack alignment="right">
                    <HStack expanded={false} spacing={1}>
                        <Icon size={30} icon={check}></Icon>
                        <ExternalLink href="">PRO License</ExternalLink>
                    </HStack>
                    <Text>support@wpui.com</Text>
                </VStack>
            </CardHeader>
            <CardBody style={{ padding: "0px" }}>
                <TabPanel
                    className="my-tab-panel"
                    tabs={[
                        {
                            name: 'tab1',
                            title: 'Media',
                            className: 'tab-one',
                        },
                        {
                            name: 'tab2',
                            title: 'Assets',
                            className: 'tab-two',
                        },
                        {
                            name: 'tab3',
                            title: 'Tools',
                            className: 'tab-two',
                        },
                        {
                            name: 'tab4',
                            title: 'License',
                            className: 'tab-two',
                        },
                        {
                            name: 'tab5',
                            title: 'Support',
                            className: 'tab-two',
                        },
                    ]}
                >
                    {(tab) => <div style={{ padding: "200px", backgroundColor: "#e3e3e3", border: "1px solid #d2d0d0" }}></div>}
                </TabPanel>
            </CardBody>
        </Card>
    );
};

// @meta-start
Shell1.meta = {
    title: 'Shell 1',
    path: '/NewPatterns/shell1',
};
// @meta-end
export default Shell1;