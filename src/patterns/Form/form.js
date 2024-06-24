/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { cloudUpload } from "@wordpress/icons";
import {
    Icon,
    Card,
    DropZone,
    TextControl,
    TextareaControl,
    FormFileUpload,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
    __experimentalSurface as Surface,
} from "@wordpress/components";

/**
 * Render Profile Form
 */
function Form() {

    return (
        <VStack spacing={10} style={{ maxWidth: '40rem', margin: 'auto' }}>
            <VStack>
                <Heading level={3}>Profile</Heading>
                <Text variant='muted' size={14}>"This information will be displayed publicly, so be careful about what you share"</Text>
            </VStack>
            <TextControl
                label={__("Username")}
                onChange={function noRefCheck() { }}
                style={{ borderRadius: '6px', padding: '10px 8px' }}
            />
            <TextareaControl
                label={__("About")}
                help="Write a few sentences about yourself"
                onChange={function noRefCheck() { }}
                style={{ borderRadius: '6px' }}
            />
            <VStack>
                <Heading level={4}>Photo</Heading>
                <HStack alignment="left">
                    <Surface as={'img'} src="https://placehold.co/50" style={{ borderRadius: '100%' }} />
                    <FormFileUpload
                        variant="primary"
                        isPressed
                        accept="image/*"
                        onChange={function noRefCheck() { }}>
                        Change
                    </FormFileUpload>
                </HStack>
            </VStack>
            <Card isBorderless style={{ border: '3px dashed #E5E5E5', borderRadius: '8px' }}>
                <FormFileUpload style={{ width: '100%', justifyContent: 'center', height: '200px', borderRadius: '8px' }}>
                    <VStack alignment="center" spacing={2}>
                        <Icon icon={cloudUpload} size={60} />
                        <Text><Text weight={500}>Click to upload</Text> or drag and drop</Text>
                        <Text>SVG, PNG, JPG or GIF (MAX. 800x400px)</Text>
                    </VStack>
                    <DropZone onDrop={function noRefCheck() { }} onFilesDrop={function noRefCheck() { }} />
                </FormFileUpload>
            </Card>
        </VStack>
    );
};

export default Form;


