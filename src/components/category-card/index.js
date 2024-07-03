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
 * Internal dependencies.
 */
import './style.scss'

/**
 * Render Category Card 
 */
function CategoryCard({ thumbnail: Thumbnail, title, path, patterns }) {
    return (
        <VStack className="wpui-preview" style={{ width: '100%' }}>
            <Link to={path}>
                <Card className="wpui-card-preview" size="large" isBorderless >
                    <Thumbnail />
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
                    {`${Object.keys(patterns).length} components`}
                </Text>
            </VStack>
        </VStack>
    );
}

export default CategoryCard;