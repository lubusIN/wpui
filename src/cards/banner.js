/**
 * WordPress dependencies.
 */
import {
    Card,
    Button,
    CardBody,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Render Banner
 */
function Banner() {
    return (
        <Card className="wpui_hero_Section" isBorderless>
            <CardBody>
                <VStack spacing={12}>
                    <VStack spacing={3}>
                        <Text size={15} align="center">From the House of LUBUS</Text>
                        <Heading size={40} align="center" lineHeight={1.3} weight={500}>
                            Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
                        </Heading>
                        <Text size={16} align="center" lineHeight={1.5}>
                            Lorem Ipsum has been the industry's standard dummy text
                            ever since the <br /> 1500s, when an unknown printer took a galley
                            of type and scrambled it to <br /> make a type specimen book.
                        </Text>
                    </VStack>
                    <HStack alignment="center">
                        <Button variant="primary" isPressed>
                            Browse Components
                        </Button>
                        <Button>
                            Subscribe NewsLetter
                        </Button>
                    </HStack>
                </VStack>
            </CardBody>
        </Card>
    );
};

export default Banner;