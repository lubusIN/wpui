'use client';

import {
    Card,
    CardHeader,
    Button,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";

export default function Header() {
    return (
        <Card>
            <CardHeader>
                <HStack justify="space-between">
                    <Heading level={2}>Back End Developer</Heading>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <Button variant="secondary">Edit</Button>
                        <Button variant="primary">Publish</Button>
                    </div>
                </HStack >
            </CardHeader>
        </Card>

    );
}
