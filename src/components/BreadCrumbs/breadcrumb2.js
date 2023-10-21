/**
 * WordPress dependencies.
 */
import {
    Icon,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { home } from "@wordpress/icons";

/**
 * Render Breadcrumb
 */
function Breadcrumb2() {
    return (
        <HStack alignment="center" spacing={5}>
            <Icon icon={home}></Icon>
            <Heading level={4}>/</Heading>
            <Heading level={4}>Posts</Heading>
            <Heading level={4}>/</Heading>
            <Heading level={4}>Add new</Heading>
        </HStack>
    );
};

export default Breadcrumb2;