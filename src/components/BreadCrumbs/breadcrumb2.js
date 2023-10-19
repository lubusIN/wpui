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
import { chevronRight, home } from "@wordpress/icons";

/**
 * Render Breadcrumb
 */
function Breadcrumb2() {
    return (
        <Card isRounded style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CardBody
                isShady
                style={{
                    width: '400px',
                    height: '35px',
                    margin: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <HStack alignment="center" spacing={4}>
                    <Icon icon={home}></Icon>
                    <Icon size={50} icon={chevronRight}></Icon>
                    <Heading level={4}>Posts</Heading>
                    <Icon size={50} icon={chevronRight}></Icon>
                    <Heading level={4}>Add new</Heading>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default Breadcrumb2;