/**
 * WordPress dependencies.
 */
import {
    Card,
    Icon,
    CardBody,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { formatItalic, home } from "@wordpress/icons";

/**
 * Render Breadcrumb
 */
function Breadcrumb1() {
    return (
        <Card>
            <CardBody>
                <HStack alignment="center" spacing={4}>
                    <Icon icon={home}></Icon>
                    <Icon size={20} icon={formatItalic}></Icon>
                    <Heading level={4}>Posts</Heading>
                    <Icon size={20} icon={formatItalic}></Icon>
                    <Heading level={4}>Add new</Heading>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default Breadcrumb1;