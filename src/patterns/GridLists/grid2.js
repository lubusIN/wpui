/**
 * WordPress dependencies.
 */
import {
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalGrid as Grid,
    __experimentalText as Text,
    __experimentalSurface as Surface,
} from "@wordpress/components";

/**
 * Render Image card.
 */
function Grid2() {
    return (
        <Grid columns={[1, 2, 4]} gap={8} alignment="center">
            {Array.from({ length: 8 }, (_, index) => (
                <VStack key={index} spacing={3}>
                    <Surface as={'img'} src="https://placehold.co/150?text=Coming+Soon" style={{ objectFit: 'cover', height: '150px', borderRadius: '4px' }} />
                    <Heading level={4}>Ping</Heading>
                    <Text size={12}>Animating Ping Notification</Text>
                </VStack>
            ))
            }
        </Grid >
    );
};

// @meta-start
Grid2.meta = {
    title: 'Grid 2',
    name:'Grid2',
    category:'GridLists',
    path: '/GridLists/grid2',
};
// @meta-end


export default Grid2;