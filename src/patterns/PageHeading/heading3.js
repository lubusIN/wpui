/**
 * WordPress dependencies.
 */
import {
    Button,
    __experimentalSurface as Surface,
    __experimentalHStack as HStack,
    __experimentalGrid as Grid,
    __experimentalVStack as VStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Render Page Heading 3
 */
function Heading3() {
    return (
        <Grid columns={[1, 2]} rowGap={35}>
            <HStack alignment="center" justify="left" spacing={5}>
                <Surface as={'img'} src="https://placehold.co/80" style={{ borderRadius: '100%', minWidth: 'fit-content' }} />
                <VStack expanded={false}>
                    <Heading level={2}>Sarah Weaver</Heading>
                    <Text size={14} color="grey"><Text weight={500}>"WordPress Developer:</Text> Contributing to WordPress community since 2015."</Text>
                </VStack>
            </HStack>
            <HStack spacing={3} justify="right">
                <Button variant="secondary">Profile</Button>
                <Button variant="primary">Contact</Button>
            </HStack>
        </Grid>
    );
};

// @meta-start
Heading3.meta = {
    title: 'Heading 3',
    path: '/PageHeading/heading3',
};
// @meta-end

export default Heading3;