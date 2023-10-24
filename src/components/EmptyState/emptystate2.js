/**
 * WordPress dependencies.
 */
import {
    Icon,
    Card,
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
                    <VStack alignment="center">
                        <Icon icon="database-add" size={40} />
                        <Text>Create a new Database</Text>
                    </VStack>
                </FormFileUpload>
            </Card>
        </VStack>
    );
};

export default EmptyState2;