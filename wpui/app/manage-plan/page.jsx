'use client';

import {
    Card,
    CardBody,
    Button,
    __experimentalTruncate as Truncate,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
} from "@wordpress/components";


export default function ManagePlan() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card isRounded isElevated>
                <CardBody size="large">
                    <VStack>
                        <Heading level={3}>Manage Suscription</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet,consectetur adipiscing elit.facilisis dictum tortor,
                        </Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button variant="primary">Change Plan</Button>
                        </div>
                    </VStack>
                </CardBody>
            </Card>
        </div>

    );
}