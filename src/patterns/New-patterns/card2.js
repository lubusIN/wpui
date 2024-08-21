/**
 * WordPress dependencies.
 */
import {
    Card,
    ExternalLink,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Subscription action panel
 */
function Card2() {
    return (
        <HStack>
            <Card>
                <img width={420} src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png"></img>
                <Card>
                    <VStack style={{ padding: "20px" }}>
                        <Text size={15} weight={600}>Astra Pro</Text>
                        <Text size={15}>By  <ExternalLink href="">Brainstrom Force US LLC</ExternalLink></Text>
                        <HStack alignment="left">
                            <Text weight={500}>$47 </Text>
                            <Text>Anually</Text>
                        </HStack>
                    </VStack>
                </Card>
            </Card>
            <Card>
                <img width={420} src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png"></img>
                <Card>
                    <VStack style={{ padding: "20px" }}>
                        <Text size={15} weight={600}>Swag</Text>
                        <Text size={15}>By  <ExternalLink href="">Viva Themes</ExternalLink></Text>
                        <HStack alignment="left">
                            <Text weight={500}>$47 </Text>
                            <Text>Anually</Text>
                        </HStack>
                    </VStack>
                </Card>
            </Card>
            <Card>
                <img width={420} src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png"></img>
                <Card>
                    <VStack style={{ padding: "20px" }}>
                        <Text size={15} weight={600}>Eben</Text>
                        <Text size={15}>By  <ExternalLink href="">Theme Harbor</ExternalLink></Text>
                        <HStack alignment="left">
                            <Text weight={500}>$47 </Text>
                            <Text>Anually</Text>
                        </HStack>
                    </VStack>
                </Card>
            </Card>
        </HStack>
    );
};

Card2.meta = {
    title: 'Card 2',
    path: '/New-patterns/card2',
    name: 'Card2',
    category: 'NewPatterns',
};

export default Card2;