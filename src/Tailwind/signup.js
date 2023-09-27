import {
    Icon,
    Button,
    TextControl,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,

} from "@wordpress/components";

import { wordpress } from "@wordpress/icons"

export default function SignUp() {
    return (
        <VStack alignment="center" spacing={5}>
            <Icon icon={wordpress} size={50} ></Icon>
            <Heading level={2}>Sign in to your account</Heading>

            <VStack alignment="stretch" spacing={3} style={{ width: '350px' }}>
                <TextControl label='Email address' />
                <TextControl label='Password' />
                <a style={{ textAlign: 'right', marginTop: '-10px', fontSize: '13px' }} href="#">Forgot Password?</a>
            </VStack>

            <Button variant="primary" style={{ width: '350px', justifyContent: 'center' }} > Sign in </Button>
            <Heading level={5} variant="muted" >
                Not a member?
                <a href="#" style={{ color: '#6e74c1' }}>Start a 14 day free trial</a>
            </Heading>
        </VStack>
    );
}