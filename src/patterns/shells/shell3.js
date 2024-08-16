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
 * Render Shell 3
 */
function Shell3() {
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
Shell3.meta = {
    title: 'Shell 3',
    name: 'Shell3',
    category: 'Shells',
    path: '/shells/shell3',
};
// @meta-end

export default Shell3;
