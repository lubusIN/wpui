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
import * as Components from '.';

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
                            <Surface as={'img'} src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                            <VStack>
                                <Heading level={4} weight={500}>John Doe</Heading>
                                <Text size={16} variant="muted">Administrator</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
                <Card style={{ borderRadius: '4px' }}>
                    <CardBody>
                        <HStack spacing={3} alignment="left">
                            <Surface as={'img'} src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                            <VStack>
                                <Heading level={4} weight={500}>Jane Smith</Heading>
                                <Text size={16} variant="muted">Editor</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
                <Card style={{ borderRadius: '4px' }}>
                    <CardBody>
                        <HStack spacing={3} alignment="left">
                            <Surface as={'img'} src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                            <VStack>
                                <Heading level={4} weight={500}>Emily Davis</Heading>
                                <Text size={16} variant="muted">Author</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
                <Card style={{ borderRadius: '4px' }}>
                    <CardBody>
                        <HStack spacing={3} alignment="left">
                            <Surface as={'img'} src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                            <VStack>
                                <Heading level={4} weight={500}>Kevin Lee</Heading>
                                <Text size={16} variant="muted">Contributor</Text>
                            </VStack>
                        </HStack>
                    </CardBody>
                </Card>
            </Grid>
        </Card>
    );
};

Grid3.meta = {
    title: 'Grid 3',
    path: '/GridLists/grid3',
    component: Components.Grid3
};


export default Grid3;