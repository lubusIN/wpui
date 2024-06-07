/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    CardMedia,
    Icon,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalGrid as Grid,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { chevronRight } from "@wordpress/icons";

/**
 * Render Hero Section
 */
function Section2() {
    return (
        <Card isBorderless>
            <Grid gap={40} rowGap={20} columns={[1, 2]}>
                <VStack spacing={8}>
                    <VStack spacing={6}>
                        <HStack alignment="left">
                            <Text size={15}>From the House of LUBUS </Text>
                            <Icon icon={chevronRight} />
                        </HStack>
                        <Heading size={40} lineHeight={1.3} weight={600}>
                            Lorem Ipsum is simply dummy text of the printing.
                        </Heading>
                        <Text size={16} lineHeight={1.5}>
                            Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book.
                        </Text>
                    </VStack>
                    <HStack alignment="left">
                        <Button variant="primary" isPressed>
                            Browse Components
                        </Button>
                        <Button href="#">
                            Subscribe NewsLetter
                        </Button>
                    </HStack>
                </VStack>
                <CardMedia>
                    <img src="https://placehold.co/600x600" />
                </CardMedia>
            </Grid>
        </Card>
    );
};

export default Section2;