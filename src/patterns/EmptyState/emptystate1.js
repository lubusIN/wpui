/**
 * WordPress dependencies.
 */
import {
    file,
    plus
} from "@wordpress/icons";
import {
    Icon,
    FormFileUpload,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    __experimentalText as Text,
} from "@wordpress/components";

/**
 * Render File uploader empty stats
 */
function EmptyState1() {
    return (
        <VStack alignment="center" spacing={6}>
            <VStack alignment="center" spacing={2}>
                <Icon size={40} icon={file}></Icon>
                <Heading level={3}>No items found</Heading>
                <Text size={15}>Maximum upload file size: 200 MB.</Text>
            </VStack>
            <FormFileUpload variant="primary" icon={plus}>
                Upload File
            </FormFileUpload>
        </VStack>
    );
};

// @meta-start
EmptyState1.meta = {
    title: 'EmptyState 1',
    path: '/EmptyState/emptystate1',
};
// @meta-end

export default EmptyState1;