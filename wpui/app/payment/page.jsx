'use client';

import {
    Card,
    Modal,
    Icon,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    Button,
} from "@wordpress/components";


export default function Payment() {
    return (
        <Card>
            <Modal>
                <VStack alignment="center" spacing={3}>
                    <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8zm-.615 12.66h-1.34l-3.24-4.54l1.341-1.25l2.569 2.4l5.141-5.931l1.34.94l-5.811 8.381z" /></svg>} size={65} ></Icon>
                    <Heading level={3} align="center">Payment Successful</Heading>
                    <Heading level={6} align="center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Heading>

                    <Button variant="primary"
                        style={{
                            marginTop: '15px',
                            alignItems: 'center',
                            background: '#6e74c1',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    > Go back to dashboard</Button>
                </VStack>
            </Modal>
        </Card >
    );
}
