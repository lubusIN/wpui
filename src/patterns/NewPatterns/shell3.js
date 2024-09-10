/**
 * WordPress dependencies.
 */
import {
    Card,
    Icon,
    CardBody,
    CardHeader,
    TabPanel,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { starFilled, lifesaver } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell3() {
    return (
        <Card>
            <CardHeader>
                <HStack expanded={false} spacing={3}>
                    <img size={20} src="https://raw.githubusercontent.com/lubusIN/wpui/19be18fb1ed5a50a79bd08ac4ee28691abf88b52/favicon.svg"></img>
                    <Heading size={20}>WPUI </Heading>
                </HStack>
                <HStack expanded={false} alignment="right" spacing={5}>
                    <HStack expanded={false} spacing={1}><Icon size={30} icon={starFilled}></Icon><Text weight={500}>Review</Text></HStack>
                    <HStack expanded={false} spacing={1}><Icon size={30} icon={lifesaver}></Icon> <Text weight={500}>Support</Text></HStack>
                </HStack>
            </CardHeader>
            <CardBody alignment="center" style={{ padding: "0px" }}>


                <TabPanel
                    className="my-tab-panel"
                    tabs={[
                        {
                            name: 'tab1',
                            title: 'Main Menu',
                            className: 'tab-one',
                        },
                        {
                            name: 'tab2',
                            title: 'Controls',
                            className: 'tab-two',
                        },
                        {
                            name: 'tab3',
                            title: '    Setting',
                            className: 'tab-two',
                        },
                    ]}
                >
                    {(tab) => <div style={{ padding: "200px", backgroundColor: "#e3e3e3" }}></div>}
                </TabPanel>

            </CardBody>
        </Card>
    );
};

// @meta-start
Shell3.meta = {
    title: 'Shell 3',
    name: 'Shell3',
    category: 'NewPatterns',
    path: '/NewPatterns/shell3',
};
// @meta-end
export default Shell3;