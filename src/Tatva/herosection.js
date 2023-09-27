import {
    Icon,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    Button,
    SVG,
} from "@wordpress/components";

export default function HeroSection() {
    return (
        <VStack spacing={4}>

            <Text size={35} align="center" isBlock style={{ maxWidth: '400px' }}>
                Custom web elements that will make your life easy
            </Text>
            <HStack alignment="center">
                <Button
                    variant="primary"
                    style={{
                        borderRadius: '25px',
                        backgroundColor: '#000000',
                        color: '#FFFFFF',
                        padding: '10px 20px',
                    }}>
                    Browse Projects
                </Button>
                <Button
                    variant="secondary"
                    style={{
                        border: '1px solid #000000',
                        borderRadius: '25px ',
                        padding: '10px 20px',
                        color: '#000000',
                    }}>
                    Subscribe NewsLetter
                </Button>
            </HStack>
        </VStack>
    );
}