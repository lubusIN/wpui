/**
 * WordPress dependencies.
 */
import {
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Breadcrumb
 */
function Breadcrumb2() {
    return (
        <HStack alignment="center" spacing={5}>
            <Heading size={14}>Home</Heading>
            <Heading size={14}>/</Heading>
            <Heading size={14}>Posts</Heading>
            <Heading size={14}>/</Heading>
            <Heading size={14}>Add new</Heading>
        </HStack>
    );
};

Breadcrumb2.meta = {
    title: 'Breadcrumb 2',
    path: '/BreadCrumbs/breadcrumb2',
};


export default Breadcrumb2;