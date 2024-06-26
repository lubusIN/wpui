/**
 * WordPress dependencies.
 */
import {
    ExternalLink,
    Icon,
    Card,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { edit, layout, styles } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Welcomescreen() {
    return (
        <VStack>
            <VStack>
                <Card style={{ backgroundColor: "black", padding: "50px" }}>
                    <Text size="large" style={{ color: "white", fontSize: "30px", fontWeight: "600" }}>
                        Welcome To Wordpress!
                    </Text><br /><br />
                    <ExternalLink href="" style={{ color: "white", fontSize: "15px" }}>
                        Learn more about the 6.3.2 Version
                    </ExternalLink>
                </Card>
            </VStack>

            <HStack>

                <Card isBorderless style={{ padding: "30px", fontWeight: "600" }}>
                    <HStack>
                        <Icon size={50} icon={edit}></Icon>
                        <Card isBorderless>
                            Author rich content  with block and patterns<br /><br />
                            <Text >Block patterns are pre-configured block layout. use them to get inspired or create new pages in a flash.</Text><br /><br />
                            <ExternalLink href="">Add a new page</ExternalLink>
                        </Card>
                    </HStack>
                </Card>

                <Card isBorderless style={{ padding: "30px", fontWeight: "600" }}>
                    <HStack>
                        <Icon size={50} icon={layout}></Icon>
                        <Card isBorderless>
                            Customize your site with block themes<br /><br />
                            <Text >Design everything on your site - from the header down to the footer, all using blocks and patterns.</Text><br /><br />
                            <ExternalLink href="">Open site editor.</ExternalLink>
                        </Card>
                    </HStack>
                </Card>

                <Card isBorderless style={{ padding: "30px", fontWeight: "600" }}>
                    <HStack>
                        <Icon size={50} icon={styles}></Icon>
                        <Card isBorderless>
                            Switch up your site's look and feel with style.<br /><br />
                            <Text >Tweak your site, or give it a whole new look! Get creative-how about a new color palette or font?</Text><br /><br />
                            <ExternalLink href="">Edit Styles</ExternalLink>
                        </Card>
                    </HStack>
                </Card>

            </HStack>
        </VStack>
    );
};

Welcomescreen.meta = {
    title: 'Welcomescreen',
    path: '/New-patterns/welcomescreen',
};

export default Welcomescreen;