/**
 * WordPress dependencies.
 */
import { 
    chevronRight, 
    home 
} from "@wordpress/icons";
import {
    Card,
    Icon,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Breadcrumb
 */
function Breadcrumb3() {
    return (
        <HStack alignment="center" spacing={4}>
            <Card
                isBorderless
                variant="secondary"
                style={{ borderRadius: '6px', padding: '15px 20px' }}>
                <HStack alignment="center" spacing={3}>
                    <HStack expanded={false} alignment="center">
                        <Icon icon={home}></Icon>
                        <Heading size={14}>Home</Heading>
                    </HStack>
                    <Icon size={30} icon={chevronRight}></Icon>
                    <Heading size={14}>Posts</Heading>
                    <Icon size={30} icon={chevronRight}></Icon>
                    <Heading size={14}>Add new</Heading>
                </HStack>
            </Card>
        </HStack>
    );
};

// @meta-start
Breadcrumb3.meta = {
    title: 'Breadcrumb 3',
    path: '/BreadCrumbs/breadcrumb3',
};
// @meta-end

export default Breadcrumb3;