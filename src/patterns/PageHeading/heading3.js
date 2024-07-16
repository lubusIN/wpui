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
                <Surface as={'img'} src='https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar3.png' style={{ borderRadius: '100%', maxWidth:"50px" }} />
                <VStack expanded={false}>
                    <Heading>Rahul Sharma</Heading>
                    <Text size={14} variant="muted"><Text weight={500}>"WordPress Developer:</Text> Contributing to WordPress community since 2015."</Text>
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