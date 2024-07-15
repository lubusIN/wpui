/**
 * WordPress dependencies.
 */
import {
    Card,
    Icon,
    __experimentalText as Text,
    CardBody,
    TabPanel,
    __experimentalHStack as HStack,
    __experimentalvStack as VStack,
    CardHeader,
    CardFooter,
    ExternalLink,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { starFilled,lifesaver,store } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell3() {
    return (
        <Card>
            <CardHeader>
                <HStack expanded={false} spacing={3}>
                    <img height={20} width={65} src="https://raw.githubusercontent.com/lubusIN/wpui/add/new-patterns/src/img/demo-logo/Logo%20-%20%231.png"></img>
                    <Heading size={20}>Block Visibility</Heading>
                </HStack>
                <HStack expanded={false} alignment="right" spacing={5}>
                    <HStack expanded={false} spacing={1}><Icon size={30} icon={starFilled}></Icon><Text weight={500}>Review</Text></HStack>
                    <HStack expanded={false} spacing={1}><Icon size={30} icon={lifesaver}></Icon> <Text weight={500}>Support</Text></HStack>
                    <HStack expanded={false} spacing={1}><Icon size={30} icon={store}></Icon> <Text weight={500}>Knowledge Base</Text></HStack>
                    </HStack>
            </CardHeader>
            <CardBody alignment="center" style={{padding:"0px"}}>


                <TabPanel
                    className="my-tab-panel"
                    tabs={[
                        {
                            name: 'tab1',
                            title: 'General Setting',
                            className: 'tab-one',
                        },
                        {
                            name: 'tab2',
                            title: 'Visibility Controls',
                            className: 'tab-two',
                        },
                        {
                            name: 'tab3',
                            title: 'Block Manager',
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
Shell3.meta = {
    title: 'Shell 3',
    path: '/NewPatterns/shell3',
};
// @meta-end
export default Shell3;