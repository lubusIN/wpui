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
import { edit } from '@wordpress/icons';

/**
 * Render Page Heading 3
 */
function Heading3() {
    return (
        <Grid columns={[1, 2]} rowGap={35}>
            <HStack alignment="center" justify="left" spacing={5}>
                <Surface as={'img'} src="https://placehold.co/80" style={{ borderRadius: '100%' }} />
                <VStack expanded={false}>
                    <Heading level={2}>Ricardo Cooper</Heading>
                    <Text size={14} color="grey">Applied for <Text weight={500}>Front End Developer</Text> on August 25, 2020</Text>
                </VStack>
            </HStack>
            <HStack spacing={3} justify="right">
                <Button icon={edit} variant="secondary">Edit</Button>
                <Button variant="primary">Publish</Button>
            </HStack>
        </Grid>
    );
}

export default Heading3;
