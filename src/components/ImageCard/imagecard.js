/**
 * WordPress dependencies.
 */
import {
    Icon,
    Card,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalGrid as Grid,
    __experimentalText as Text,
} from "@wordpress/components";
import { moreHorizontalMobile } from "@wordpress/icons";

/**
 * Render Image card.
 */
function ImageCard() {
    return (
        <Grid columns={[1, 2, 4]} gap={8} alignment="center">
            {Array.from({ length: 8 }, (_, index) => (
                <VStack key={index} spacing={3}>
                    <Card variant="secondary" style={{ height: '150px', borderRadius: '4px' }}>
                        <VStack alignment="center" expanded>
                            <HStack justify="center">
                                <Icon icon={moreHorizontalMobile} size={50}></Icon>
                            </HStack>
                        </VStack>
                    </Card>
                    <Heading level={4}>Ping</Heading>
                    <Text size={12}>Animating Ping Notification</Text>
                </VStack>
            ))}
        </Grid>
    );
};

export default ImageCard;