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
        <HStack alignment="center">
            <Card size="large" style={{ borderRadius: '8px' }}>
                <CardBody>
                    <HStack direction={['column', 'row']} alignment={'start'}  justify='left' >
                        <VStack>
                            <Heading level={4}>Renew Subscription automatically</Heading>
                            <Text
                                size={14}
                                lineHeight={1.6}
                                weight={400}
                                style={{ maxWidth: '600px' }}
                                variant="muted"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Explicabo totam non cumque deserunt officiis ex maiores nostrum.
                            </Text>
                        </VStack>
                        <ToggleControl
                            __nextHasNoMarginBottom
                            checked={value}
                            onChange={() => setValue((state) => !state)}
                        />
                    </HStack>
                </CardBody>
            </Card>
        </HStack >
    );
};

export default Panel3;