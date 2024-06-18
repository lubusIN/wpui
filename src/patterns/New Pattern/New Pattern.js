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
    CardHeader,
} from "@wordpress/components";
import { edit, layout, styles } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Newpattern() {
    return (
        <VStack>
            <VStack>
                <Card size="large" style={{ backgroundColor: "black", color: "white", padding: "20px", fontSize: "30px", fontWeight: "600" }}>
                    <CardHeader>
                        Welcome To Wordpress!
                    </CardHeader>
                    <ExternalLink href="" style={{ color: "white", marginLeft: "35px", bottom: "30px", position: "relative", fontSize: "15px" }}>
                        Learn more about the 6.3.2 Version
                    </ExternalLink>
                </Card>
            </VStack>

            <HStack>

                <Card isBorderless style={{ padding: "30px", fontWeight: "600" }}>
                    <HStack>
                        <Icon size={50} icon={edit} style={{ marginBottom: "70px" }}></Icon>
                        <Card isBorderless>
                            Author rich content  with block and patterns<br />
                            <Text >Block patterns are pre-configured block layout. use them to get inspired or create new pages in a flash.</Text><br />
                            <ExternalLink style={{ fontSize: "small", fontWeight: "500", color: "#4094e8" }} href="">Add a new page</ExternalLink>
                        </Card>
                    </HStack>
                </Card>

                <Card isBorderless style={{ padding: "30px", fontWeight: "600" }}>
                    <HStack>
                        <Icon size={50} icon={layout} style={{ marginBottom: "70px" }}></Icon>
                        <Card isBorderless>
                            Customize your site with block themes<br />
                            <Text >Design everything on your site - from the header down to the footer, all using blocks and patterns.</Text><br />
                            <ExternalLink href="" style={{ fontSize: "small", fontWeight: "500", color: "#4094e8" }}>Open site editor.</ExternalLink>
                        </Card>
                    </HStack>
                </Card>

                <Card isBorderless style={{ padding: "30px", fontWeight: "600" }}>
                    <HStack>
                        <Icon size={50} icon={styles} style={{ marginBottom: "70px" }}></Icon>
                        <Card isBorderless>
                            Switch up your site's look and feel with style.<br />
                            <Text >Tweak your site, or give it a whole new look! Get creative-how about a new color palette or font?</Text><br />
                            <ExternalLink href="" style={{ fontSize: "small", fontWeight: "500", color: "#4094e8" }}>Edit Styles</ExternalLink>
                        </Card>
                    </HStack>
                </Card>

            </HStack>
        </VStack>
    );
};

export default Newpattern;