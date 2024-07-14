/**
 * WordPress dependencies.
 */
import {
    Card,
    CardBody,
    TabPanel,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalText as Text,
    CardHeader,
    CardFooter,
    ExternalLink,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Render Subscription Shell
 */
function Shell1() {
    return (
        <Card>
            <CardHeader style={{backgroundColor:"rgb(247 210 171)"}}>
                <HStack expanded={false} spacing={3}>
                    <img height={20} width={65} src="https://raw.githubusercontent.com/lubusIN/wpui/add/new-patterns/src/img/demo-logo/Logo%20-%20%231.png"></img>
                    <Heading size={20}>WP Offload Media</Heading>
                </HStack>
                <VStack alignment="right">
                    <ExternalLink>License Aggrement</ExternalLink>
                    <Text>Wpui@gmail.com</Text>
                </VStack>
            </CardHeader>
            <CardBody style={{padding:"0px"}}>
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
                    {(tab) => <div style={{ padding: "200px", backgroundColor:"#e3e3e3" }}>{/*Enter Your Content Here*/}</div>}
                </TabPanel>
            </CardBody>
            <CardFooter justify="center">
                <HStack expanded={false} spacing={15} alignment="center">
                    <ExternalLink style={{textDecoration:"none"}}>About us</ExternalLink>
                    <ExternalLink>Help</ExternalLink>
                    <ExternalLink>Contact us</ExternalLink>
                </HStack>
            </CardFooter>
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