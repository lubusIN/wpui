/**
 * WordPress dependencies.
 */
import {
    Icon,
    FormFileUpload,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    __experimentalText as Text,
} from "@wordpress/components";
import { file, plus } from "@wordpress/icons";

/**
 * Render File uploader empty stats
 */
function EmptyState1() {
    return (
        <VStack alignment="center" spacing={6}>
            <VStack alignment="center" spacing={2}>
                <Icon size={40} icon={file}></Icon>
                <Heading level={3}>No Projects</Heading>
                <Text size={15}>Get started by creating a new project</Text>
            </VStack>
            <FormFileUpload variant="primary" icon={plus}>
                New Project
            </FormFileUpload>
        </VStack>
    );
};

export default EmptyState1;