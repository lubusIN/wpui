/**
 * WordPress dependencies.
 */
import {
    Card,
    CardHeader,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Render Card Heading.
 */
function CardHeading1() {
    return (
        <Card size="medium" style={{ borderRadius: '4px' }}>
            <CardHeader style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                <Heading level={4}>Latest Blog Posts</Heading>
            </CardHeader>
            <Card style={{ opacity: '0.5', height: '200px' }} variant="grid" backgroundSize={20} isBorderless ></Card>
        </Card>
    );
}

export default CardHeading1;