/**
 * WordPress dependencies.
 */
import { useState } from 'react';

/**
 * WordPress dependencies.
 */
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
                    <HStack justify='left' >
                        <VStack>
                            <Heading level={4}>Lorem ipsum</Heading>
                            <Text
                                size={14}
                                lineHeight={1.6}
                                weight={400}
                                style={{ maxWidth: '600px' }}
                                variant="muted"
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex maiores nostrum.
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

// @meta-start
Panel3.meta = {
    title: 'Panel 3',
    name:'Panel3',
    category:'ActionPanels',
    path: '/ActionPanels/panel3',
};
// @meta-end

export default Panel3;