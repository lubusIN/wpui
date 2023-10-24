/**
 * WordPress dependencies.
 */
import {
    Card,
    CardBody,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalGrid as Grid,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Render Cards
 */
function Grid3() {
    return (
        <Card isBorderless>
            <Grid columns={[1, 2]} gap={5}>
                <Card style={{ borderRadius: '4px' }}>
                    <CardBody>
                        <HStack spacing={3} alignment="left">
                            <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                            <VStack>
                                <Heading level={4} weight={500}>Ajit Bohra</Heading>
                                <Text size={16} variant="muted">Founder</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
                <Card style={{ borderRadius: '4px' }}>
                    <CardBody>
                        <HStack spacing={3} alignment="left">
                            <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                            <VStack>
                                <Heading level={4} weight={500}>Pravin Prajapati</Heading>
                                <Text size={16} variant="muted">Founder</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
                <Card style={{ borderRadius: '4px' }}>
                    <CardBody>
                        <HStack spacing={3} alignment="left">
                            <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                            <VStack>
                                <Heading level={4} weight={500}>Punit Verma</Heading>
                                <Text size={16} variant="muted">Developer</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
                <Card style={{ borderRadius: '4px' }}>
                    <CardBody>
                        <HStack spacing={3} alignment="left">
                            <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                            <VStack>
                                <Heading level={4} weight={500}>Nikhil Sharma</Heading>
                                <Text size={16} variant="muted">React Developer</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
            </Grid>
        </Card>
    );
};

export default Grid3;