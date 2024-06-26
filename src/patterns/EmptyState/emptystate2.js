/**
 * WordPress dependencies.
 */
import { cloudUpload } from "@wordpress/icons";
import {
    Icon,
    Card,
    DropZone,
    FormFileUpload,
    __experimentalVStack as VStack,
    __experimentalText as Text,
} from "@wordpress/components";

/**
 * Render File uploader empty stats
 */
function EmptyState2() {
    return (
        <VStack alignment="center" spacing={6}>
            <Card isBorderless style={{ border: '3px dashed #E5E5E5', borderRadius: '8px' }}>
                <FormFileUpload style={{ padding: '10px 14vw', height: '200px', margin: '-8px', borderRadius: '8px' }}>
                    <VStack alignment="center" spacing={2}>
                        <Icon icon={cloudUpload} size={60} />
                        <Text><Text weight={500}>Click to upload</Text> or drag and drop</Text>
                        <Text>SVG, PNG, JPG or GIF <br /> (MAX. 800x400px)</Text>
                    </VStack>
                    <DropZone onDrop={function noRefCheck() { }} onFilesDrop={function noRefCheck() { }} />
                </FormFileUpload>
            </Card>
        </VStack>
    );
};

// @meta-start
EmptyState2.meta = {
    title: 'EmptyState 2',
    path: '/EmptyState/emptystate2',
};
// @meta-end

export default EmptyState2;