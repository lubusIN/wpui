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
import { trendingUp } from "@wordpress/icons";

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
                <HStack expanded={false} spacing={50} style={{border:'1px solid black'}}>
                    <Button>Settings</Button>
                    <Button>Addons</Button>
                    <Button>License</Button>
                    <Button>Support</Button>
                </HStack>
            </CardBody>
             <CardBody style={{ padding: "100px" }}>
                {/*Display Your Content Here*/}
            </CardBody>
        </Card>
    );
}

// @meta-start
Shell4.meta = {
    title: 'Shell 4',
    name: 'Shell4',
    category: 'Shells',
    path: '/shells/shell4',
};
// @meta-end

export default Shell4;
