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
function Breadcrumb() {
    return (
        <HStack alignment="center" spacing={4}>
            <Icon icon={home}></Icon>
            <Icon size={20} icon={chevronRight}></Icon>
            <Heading level={4}>Projects</Heading>
            <Icon size={20} icon={chevronRight}></Icon>
            <Heading level={4}>Lubus</Heading>
        </HStack>
    );
};

export default Breadcrumb;