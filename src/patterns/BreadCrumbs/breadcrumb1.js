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
            <Icon size={30} icon={chevronRight}></Icon>
            <Heading size={14}>Posts</Heading>
            <Icon size={30} icon={chevronRight}></Icon>
            <Heading size={14}>Add new</Heading>
        </HStack>
    );
};

export default Breadcrumb1;