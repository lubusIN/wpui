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
    __experimentalVStack as VStack,
    CardHeader,
    CardFooter,
    ExternalLink,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Render Subscription Shell
 */
function Shell4() {
    return (
        <>
            <Card style={{ backgroundColor: "black", color: "white" }}>
                <CardBody>
                    <VStack>
                        <Heading color="white">Design</Heading>
                        <Text color="white">Customize the appearance of your website using the block  editor.</Text>
                        <TabPanel
                            orientation="vertical"
                            className="my-tab-panel"
                            tabs={[
                                {
                                    name: 'tab1',
                                    title: 'Navigation',
                                    className: 'tab-one',
                                },
                                {
                                    name: 'tab2',
                                    title: 'Styles',
                                    className: 'tab-two',
                                },
                                {
                                    name: 'tab3',
                                    title: 'Pages',
                                    className: 'tab-two',
                                },
                                {
                                    name: 'tab4',
                                    title: 'Templates',
                                    className: 'tab-two',
                                },
                                {
                                    name: 'tab5',
                                    title: 'Patterns',
                                    className: 'tab-two',
                                },
                            ]}
                        >
                            {(tab) => <HStack style={{ width: "auto", padding: "100px", backgroundColor: "white" }}></HStack>}
                        </TabPanel>
                    </VStack>
                </CardBody>
            </Card>
            <style>
                {`
                    
                    .components-button{
                    color:white;
                    }
                `}
            </style>
        </>
    );
};

// @meta-start
Shell4.meta = {
    title: 'Shell 4',
    path: '/NewPatterns/shell4',
};
// @meta-end

export default Shell4;