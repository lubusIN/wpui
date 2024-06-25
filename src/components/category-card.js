/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

/**
 * WordPress dependencies.
 */
import {
    Card,
    __experimentalVStack as VStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Render Category Card 
 */
function CategoryCard({ thumbnail, title, path, patterns }) {
    return (
        <VStack className="wpui_preview" style={{ width: '100%' }}>
            <Link to={path}>
                <Card className="wpui_card_preview" size="large" isBorderless >
                    {thumbnail}
                </Card>
            </Link>
            <VStack spacing={0}>
                <Heading
                    adjustLineHeightForInnerControls="small"
                    align="left"
                    level={4}
                    weight={500}
                >
                    {title}
                </Heading>
                <Text align="left" size={13} weight={400} color="grey">
                    {/* {`${patterns.length} components`} */}
                </Text>
            </VStack>
        </VStack>
    );
}

export default CategoryCard;