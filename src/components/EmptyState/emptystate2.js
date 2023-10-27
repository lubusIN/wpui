/**
 * WordPress dependencies.
 */
import {
    Icon,
    Card,
    FormFileUpload,
    __experimentalVStack as VStack,
    __experimentalText as Text,
    DropZone,
} from "@wordpress/components";
import { cloudUpload } from "@wordpress/icons";

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
                        <Text>SVG, PNG, JPG or GIF (MAX. 800x400px)</Text>
                    </VStack>
                    <DropZone onDrop={function noRefCheck() { }} onFilesDrop={function noRefCheck() { }} />
                </FormFileUpload>
            </Card>
        </VStack>
    );
};

export default EmptyState2;