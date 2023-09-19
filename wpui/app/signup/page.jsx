'use client';

import {
    Icon,
    Card,
    Button,
    TextControl,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
} from "@wordpress/components";

import { wordpress } from "@wordpress/icons"

export default function SignUp() {
    return (
        <Card>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}
            >
                <VStack alignment="center" >
                    <div style={{
                        fill: '#6e74c1',
                        marginBottom: '20px',
                    }}>
                        <Icon icon={wordpress} size={50} ></Icon>
                    </div>
                    <Heading align="center" level={2}>Sign in to your account</Heading>
                    <div style={{ marginTop: '30px', width: '400px' }}>
                        <TextControl label='Email address' />
                        <div>
                            <div style={{ textAlign: 'right', marginBottom: '-15px', fontSize: '13px', color: '#6e74c1' }}>
                                <a href="#">Forgot Password?</a>
                            </div>
                            <TextControl label='Password' />
                        </div>
                        <Button variant="primary"
                            style={{
                                marginTop: '15px',
                                width: '400px',
                                alignItems: 'center',
                                background: '#6e74c1',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        > Sign in </Button>
                    </div>

                    <div style={{ marginTop: '15px' }}>
                        <Heading level={5} variant="muted" >
                            Not a member?
                            <a href="#" style={{ color: '#6e74c1' }}>Start a 14 day free trial</a>
                        </Heading>
                    </div>
                </VStack>
            </div>
        </Card>
    );
}
