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
    ToolbarGroup,
    ToolbarItem
} from "@wordpress/components";
import { home, cog, plugins, key, external, trendingUp, menu } from "@wordpress/icons";
import { useViewportMatch } from '@wordpress/compose';

/**
 * Render Subscription Shell
 */
function Shell2() {
    const isMobile = useViewportMatch('mobile');
    const desktop = (
        <>
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
                <CardBody style={{ padding: "100px",display:'flex',justifyContent:'center' }}>
                    {/*Display Your Content Here*/}This is Output Panel
                </CardBody>
        </>
    )
    const mobile = (
        <>
                <CardHeader >
                    <HStack>
                        <Heading size={20}>WPUI</Heading>
                        <ToolbarGroup
                        style={{width:'100%'}}
                            controls={[
                                {
                                    icon: home,
                                    title: 'Dashboard'
                                },
                                {
                                    icon: cog,
                                    title: 'Settings'
                                },
                                {
                                    icon: plugins,
                                    title: 'Addons'
                                },
                                {
                                    icon: key,
                                    title: 'License'
                                },
                                {
                                    icon: external,
                                    title: 'Support'
                                },
                            ]}
                            isCollapsed
                            title="Align"
                        />
                        <ToolbarItem />
                    </HStack>
                </CardHeader>
                <CardBody style={{ padding: "100px" ,display:'flex',justifyContent:'center'}}>
                    {/*Display Your Content Here*/}This is Output Panel
                </CardBody>
                <Button variant="primary" icon={trendingUp} style={{width:'100%', justifyContent:'center'}}>Gro Pro</Button>
        </>
    )
    return (
<Card>
    {isMobile ? desktop : mobile}
</Card>

    );
}



// @meta-start
Shell2.meta = {
    title: 'Shell 2',
    name: 'Shell2',
    category: 'Shells',
    path: '/shells/shell2',
};
// @meta-end

export default Shell2;
