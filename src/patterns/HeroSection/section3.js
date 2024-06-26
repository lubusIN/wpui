/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Render Hero Section
 */
function Section3() {
    return (
        <Card variant="secondary" style={{padding: '80px 10px', borderRadius: '4px'}}>
            <VStack spacing={12}>
                <VStack spacing={5}>
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
        </Card>
    );
};

Section3.meta = {
    title: 'Section 3',
    path: '/HeroSection/section3',
};

export default Section3;