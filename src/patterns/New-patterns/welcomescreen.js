/**
 * WordPress dependencies.
 */
import {
    ExternalLink,
    Icon,
    Card,
    __experimentalText as Text,
    __experimentalHeading as Heading,
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
                    <Heading size={40} color="white">Welcome To Wordpress!</Heading>
                    <ExternalLink href="" style={{ color: "white" }}>
                        Learn more about the 6.3.2 Version
                    </ExternalLink>
                </Card>
            </VStack>

            <HStack>
                <Card isBorderless style={{ padding: "30px" }}>
                    <HStack>
                        <Icon size={50} icon={edit}></Icon>
                        <VStack spacing={3  }>
                            <Text size={17} weight={600}>Author rich content  with block and patterns</Text>
                            <Text >Block patterns are pre-configured block layout. use them to get inspired or create new pages in a flash.</Text>
                            <ExternalLink href="">Add a new page</ExternalLink>
                        </VStack>
                    </HStack>
                </Card>

                <Card isBorderless style={{ padding: "30px" }}>
                    <HStack>
                        <Icon size={50} icon={layout}></Icon>
                        <VStack spacing={3  }>
                            <Text size={17} weight={600}>Customize your site with block themes</Text>
                            <Text >Design everything on your site - from the header down to the footer, all using blocks and patterns.</Text>
                            <ExternalLink href="">Open site editor.</ExternalLink>
                        </VStack>
                    </HStack>
                </Card>

                <Card isBorderless style={{ padding: "30px" }}>
                    <HStack>
                        <Icon size={50} icon={styles}></Icon>
                        <VStack spacing={3  }>
                            <Text size={17} weight={600}>Switch up your site's look and feel with style.</Text>
                            <Text >Tweak your site, or give it a whole new look! Get creative-how about a new color palette or font?</Text>
                            <ExternalLink href="">Edit Styles.</ExternalLink>
                        </VStack>
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