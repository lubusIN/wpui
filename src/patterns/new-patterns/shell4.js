/**
 * WordPress dependencies.
 */
import {
    Card,
    CardHeader,
    CardBody,
    TabPanel,
    Button,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { trendingUp, } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell4() {
    return (
        <Card>
            <CardHeader>
                <HStack>
                    <Heading size={20}>WPUI</Heading>
                    <Button variant="primary" icon={trendingUp}>Gro Pro</Button>
                </HStack>
            </CardHeader>
            <CardBody style={{ display: 'flex', justifyContent: 'center' }}>
                <TabPanel
                    className="my-tab-panel"
                    tabs={[
                        {
                            name: 'tab1',
                            title: 'Settings',
                        },
                        {
                            name: 'tab2',
                            title: 'Addons',
                        },
                        {
                            name: 'tab3',
                            title: 'License',
                        },
                        {
                            name: 'tab4',
                            title: 'Support',
                        },
                    ]}
                >
                    {(tab) => <div></div>}
                </TabPanel>
            </CardBody>
            <CardBody style={{ padding: '100px' }}>
                {/* Display Your Content Here */}
            </CardBody>
        </Card>
    );
}


// @meta-start
Shell4.meta = {
    title: 'Shell 4',
    name: 'Shell4',
    category: 'NewPatterns',
    path: '/new-patterns/shell4',
};
// @meta-end

export default Shell4;
