/**
 * WordPress dependencies.
 */
import {
    ExternalLink,
    Icon,
    Button,
    Card,
    CardBody,
    __experimentalText as Text,
    __experimentalGrid as Grid,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    CardHeader,
} from "@wordpress/components";
import { currencyDollar, store, starEmpty, edit, layout, styles, color } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Panel1() {
    return (
        <HStack>
            <Card isBorderless style={{ padding: "15px", fontWeight: "600", width: "35%" }}>
                <VStack>
                    <Card isBorderless style={{ height: "350px" }}>
                        <img style={{ height: "350px", width: "471px", borderRadius: "10px" }} src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8="></img>
                    </Card>
                    <Card isBorderless style={{ fontWeight: "bold", fontSize: "20px", marginLeft:"15px" }}>
                        Astra Pro<br />
                        <Text style={{ fontSize: "15px" }}>By  <ExternalLink style={{ fontWeight: "500", textDecoration: "none", color: "#4094e8" }} href="">Brainstrom Force US LLC</ExternalLink></Text>
                    </Card>
                </VStack><br />
                <Text style={{ fontWeight: "bold", marginLeft:"15px" }}>$47 <Text>anually</Text> </Text>
            </Card>
            <Card isBorderless style={{ padding: "15px", fontWeight: "600", width: "35%" }}>
                <VStack>
                    <Card isBorderless style={{ height: "350px" }}>
                        <img style={{ height: "350px", width: "471px", borderRadius: "10px" }} src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8="></img>
                    </Card>
                    <Card isBorderless style={{ fontWeight: "bold", fontSize: "20px", marginLeft:"15px" }}>
                        Swag<br />
                        <Text style={{ fontSize: "15px" }}>By  <ExternalLink style={{ fontWeight: "500", textDecoration: "none", color: "#4094e8" }} href="">Viva Themes</ExternalLink></Text>
                    </Card>
                </VStack><br />
                <Text style={{ fontWeight: "bold", marginLeft:"15px" }}>$79 <Text>anually</Text> </Text>
            </Card>
            <Card isBorderless style={{ padding: "15px", fontWeight: "600", width: "35%" }}>
                <VStack>
                    <Card isBorderless style={{ height: "350px" }}>
                        <img style={{ height: "350px", width: "471px", borderRadius: "10px" }} src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?s=612x612&w=0&k=20&c=jlYes8ZfnCmD0lLn-vKvzQoKXrWaEcVypHnB5MuO-g8="></img>
                    </Card>
                    <Card isBorderless style={{ fontWeight: "bold", fontSize: "20px", marginLeft:"15px" }}>
                        Eben<br />
                        <Text style={{ fontSize: "15px" }}>By  <ExternalLink style={{ fontWeight: "500", textDecoration: "none", color: "#4094e8" }} href="">Themes Harbor</ExternalLink></Text>
                    </Card>
                </VStack><br />
                <Text style={{ fontWeight: "bold", marginLeft:"15px" }}>$99 <Text>anually</Text> </Text>
            </Card>
        </HStack>
    );
};

export default Panel1;