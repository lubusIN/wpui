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
                    <VStack spacing={2}>
                        <Heading level={4}>Backup Your Website Automatically</Heading>
                        <HStack direction={['column', 'row']} alignment={'start'} justify='left' >
                            <VStack>
                                <Text
                                    size={14}
                                    lineHeight={1.6}
                                    weight={400}
                                    style={{ maxWidth: '600px' }}
                                    variant="muted"
                                >
                                    Automate the safeguarding of your valuable content with scheduled automatic backups, ensuring the continuous protection of your website data against unforeseen events.
                                </Text>
                            </VStack>
                            <ToggleControl
                                __nextHasNoMarginBottom
                                checked={value}
                                onChange={() => setValue((state) => !state)}
                            />
                        </HStack>
                    </VStack>
                </CardBody>
            </Card>
        </HStack >
    );
};

// @meta-start
Panel3.meta = {
    title: 'Panel 3',
    name: 'Panel3',
    category: 'ActionPanels',
    path: '/ActionPanels/panel3',
};
// @meta-end

export default Panel3;