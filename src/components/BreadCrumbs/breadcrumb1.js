/**
 * WordPress dependencies.
 */
import {
    Icon,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { chevronRight, home } from "@wordpress/icons";

/**
 * Render Breadcrumb
 */
function Breadcrumb1() {
    return (
        <HStack alignment="center" spacing={4}>
            <Icon icon={home}></Icon>
            <Icon size={20} icon={chevronRight}></Icon>
            <Heading level={4}>Posts</Heading>
            <Icon size={20} icon={chevronRight}></Icon>
            <Heading level={4}>Add new</Heading>
        </HStack>
    );
};

export default Breadcrumb1;