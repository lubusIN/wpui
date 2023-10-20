/**
 * WordPress dependencies.
 */
import { useState } from '@wordpress/element';
import {
    Card,
    CardBody,
    ToggleControl,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Subscription action panel
 */
function Panel3() {
    const [value, setValue] = useState(false);

    return (
        <VStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <CardBody>
                    <VStack spacing={6} alignment="baseline">
                        <VStack spacing={3}>
                            <Heading level={3}>Renew Subscription automatically</Heading>
                            <HStack>
                                <Text size={15} weight={400} style={{ maxwidth: '600px' }} variant="muted">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam.
                                </Text>
                                <ToggleControl
                                    checked={value}
                                    onChange={() => setValue((state) => !state)}
                                />
                            </HStack>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>
        </VStack>
    );
};

export default Panel3;