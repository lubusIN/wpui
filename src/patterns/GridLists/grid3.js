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
    __experimentalSurface as Surface,
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
                            <Surface as={'img'} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar3.png" style={{ borderRadius: '100%', maxWidth:"45px" }} />
                            <VStack>
                                <Heading level={4} weight={500}>Rahul Sharma</Heading>
                                <Text size={16} variant="muted">Administrator</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
                <Card style={{ borderRadius: '4px' }}>
                    <CardBody>
                        <HStack spacing={3} alignment="left">
                            <Surface as={'img'} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar4.png" style={{ borderRadius: '100%', maxWidth:"45px" }} />
                            <VStack>
                                <Heading level={4} weight={500}>Lalit Rana</Heading>
                                <Text size={16} variant="muted">Editor</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
                <Card style={{ borderRadius: '4px' }}>
                    <CardBody>
                        <HStack spacing={3} alignment="left">
                            <Surface as={'img'} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar5.png" style={{ borderRadius: '100%', maxWidth:"45px" }} />
                            <VStack>
                                <Heading level={4} weight={500}>Anna Morgan</Heading>
                                <Text size={16} variant="muted">Author</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
                <Card style={{ borderRadius: '4px' }}>
                    <CardBody>
                        <HStack spacing={3} alignment="left">
                            <Surface as={'img'} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar6.png" style={{ borderRadius: '100%', maxWidth:"45px" }} />
                            <VStack>
                                <Heading level={4} weight={500}>Neha Jain</Heading>
                                <Text size={16} variant="muted">Contributor</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
            </Grid>
        </Card>
    );
};

// @meta-start
Grid3.meta = {
    title: 'Grid 3',
    path: '/GridLists/grid3',
};
// @meta-end


export default Grid3;