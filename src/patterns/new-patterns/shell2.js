/**
 * WordPress dependencies.
 */
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { home, cog, plugins, key, external, trendingUp } from "@wordpress/icons";

/**
 * Render Subscription Shell
 */
function Shell2() {
    return (
        <Card>
            <CardHeader >
                <HStack>
                    <Heading size={20}>WPUI</Heading>
                    <HStack expanded={false} spacing={5} className='btn'>
                        <Button icon={home}>Dashboard</Button>
                        <Button icon={cog}>Settings</Button>
                        <Button icon={plugins}>Addons</Button>
                        <Button icon={key}>License</Button>
                        <Button icon={external}>Support</Button>
                    </HStack>
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
Shell2.meta = {
    title: 'Shell 2',
    name: 'Shell2',
    category: 'NewPatterns',
    path: '/new-patterns/shell2',
};
// @meta-end

export default Shell2;
