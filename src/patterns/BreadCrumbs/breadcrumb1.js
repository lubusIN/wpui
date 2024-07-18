/**
 * WordPress dependencies.
 */
import {
    chevronRight,
    home
} from "@wordpress/icons";
import {
    Icon,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
} from "@wordpress/components";

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

// @meta-start
Breadcrumb1.meta = {
    title: 'Breadcrumb 1',
    name:'Breadcrumb1',
    category:'Breadcrumbs',
    path: '/BreadCrumbs/breadcrumb1',
};
// @meta-end

export default Breadcrumb1;