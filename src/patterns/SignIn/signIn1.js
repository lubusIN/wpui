/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { wordpress } from "@wordpress/icons"
import {
    Icon,
    Button,
    TextControl,
    CheckboxControl,
    __experimentalHeading as Heading,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Render Sign in Form
 */
function SignIn1() {
    return (
        <VStack alignment="center" spacing={8}>
            <Icon icon={wordpress} size={50}></Icon>
            <Heading>Sign in to your account</Heading>

            <VStack spacing={3}>
                <TextControl label={__('Username or Email Address')} style={{ borderRadius: '4px', padding: '8px' }} />
                <TextControl type='password' label={__('Password')} style={{ borderRadius: '4px', padding: '8px' }} />
                <HStack>
                    <CheckboxControl
                        __nextHasNoMarginBottom
                        label={__('Remember me')}
                        checked
                        onChange={function noRefCheck() { }}
                    />
                    <Text size={14} weight={600} as={"a"} href="https://wordpress.org" color='blue' style={{ textDecoration: 'none' }}>
                        Forgot Password?
                    </Text>
                </HStack>
                <Button variant="primary" style={{ justifyContent: 'center' }}>Sign in</Button>
            </VStack>

            <HStack spacing={2} justify='center'>
                <Heading size={14} weight={400} variant="muted">
                    Not a member?
                </Heading>
                <Text size={14} weight={600} as={"a"} href="https://wordpress.org" color='blue' style={{ textDecoration: 'none' }}>
                    Create a new account
                </Text>
            </HStack>
        </VStack>
    );
};

// @meta-start
SignIn1.meta = {
    title: 'Sign In 1',
    name:'SignIn1',
    category:'SignIn',
    path: '/SignIn/signIn1',
};
// @meta-end

export default SignIn1;