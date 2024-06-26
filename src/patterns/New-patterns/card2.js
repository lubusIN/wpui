/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    ExternalLink,
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
                    <VStack style={{padding:"20px"}}>
                        <Text style={{ fontSize: "20px", fontWeight: "700" }}>Astra Pro</Text>
                        <Text style={{fontWeight:"400"}}>By  <ExternalLink style={{ fontWeight: "500", color: "blue" }}>Brainstrom Force US LLC</ExternalLink></Text>
                        <HStack alignment="left">
                            <Text style={{ fontWeight: "500" }}>$47 </Text>
                            <Text style={{fontWeight:"400"}}>Anually</Text>
                        </HStack>
                    </VStack>
                </Card>
            </Card>
            <Card>
                <img width={420} src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png"></img>
                <Card>
                    <VStack style={{padding:"20px"}}>
                        <Text style={{ fontSize: "20px", fontWeight: "700" }}>Swag</Text>
                        <Text style={{fontWeight:"400"}}>By  <ExternalLink style={{ fontWeight: "500", color: "blue" }}>Viva Themes</ExternalLink></Text>
                        <HStack alignment="left">
                            <Text style={{ fontWeight: "500" }}>$47 </Text>
                            <Text style={{fontWeight:"400"}}>Anually</Text>
                        </HStack>
                    </VStack>
                </Card>
            </Card>
            <Card>
                <img width={420} src="https://www.webfx.com/wp-content/uploads/2022/08/github-logo.png"></img>
                <Card>
                    <VStack style={{padding:"20px"}}>
                        <Text style={{ fontSize: "20px", fontWeight: "700" }}>Eben</Text>
                        <Text style={{fontWeight:"400"}}>By  <ExternalLink style={{ fontWeight: "500", color: "blue" }}>Theme Harbor</ExternalLink></Text>
                        <HStack alignment="left">
                            <Text style={{ fontWeight: "500" }}>$47 </Text>
                            <Text style={{fontWeight:"400"}}>Anually</Text>
                        </HStack>
                    </VStack>
                </Card>
            </Card>
        </HStack>
    );
};

// @meta-start
Card2.meta = {
    title: 'Card 1',
    path: '/New-patterns/card2',
};
// @meta-end

export default Card2;