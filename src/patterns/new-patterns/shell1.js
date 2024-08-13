/**
 * WordPress dependencies.
 */
import {
    Icon,
    Card,
    CardHeader,
    CardBody,
    TabPanel,
    Button,
    __experimentalHStack as HStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { home, cog, plugins, key, external,trendingUp } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell1() {
    return (
        <Card>
            <CardHeader>
                <HStack>
                    <Heading size={20}>WPUI</Heading>
                    <TabPanel
                        tabs={[
                            {
                                name: 'tab1',
                                title: (
                                    <HStack spacing={2}>
                                        <Icon icon={home} />
                                        <Text>Dashboard</Text>
                                    </HStack>
                                ),
                            },
                            {
                                name: 'tab2',
                                title: (
                                    <HStack spacing={2}>
                                        <Icon icon={cog} />
                                        <Text>Settings</Text>
                                    </HStack>
                                ),
                            },
                            {
                                name: 'tab3',
                                title: (
                                    <HStack spacing={2}>
                                        <Icon icon={plugins} />
                                        <Text> Addons</Text>
                                    </HStack>
                                ),
                            },
                            {
                                name: 'tab4',
                                title: (
                                    <HStack spacing={2}>
                                        <Icon icon={key} />
                                        <Text>License</Text>
                                    </HStack>
                                ),
                            },
                            {
                                name: 'tab5',
                                title: (
                                    <HStack spacing={2}>
                                        <Icon icon={external} />
                                        <Text>Support</Text>
                                    </HStack>
                                ),
                            },
                        ]}
                    >
                        {(tab) => <div></div>}
                    </TabPanel>
                    <Button variant="primary" icon={trendingUp}>Gro Pro</Button>
                </HStack>
            </CardHeader>
            <CardBody style={{ padding: "100px" }}>
                {/*Display Your Content Here*/}
            </CardBody>
        </Card>
    );
}


// @meta-start
Shell1.meta = {
    title: 'Shell 1',
    name: 'Shell1',
    category: 'NewPatterns',
    path: '/new-patterns/shell1',
};
// @meta-end

export default Shell1;
