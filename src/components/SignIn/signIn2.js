/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    Icon,
    Button,
    TextControl,
    CheckboxControl,
    __experimentalHeading as Heading,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    CardDivider,
    Card,
} from "@wordpress/components";
import { wordpress } from "@wordpress/icons"

/**
 * Render Sign in Form
 */
function SignIn2() {
    return (
        <VStack alignment="center" spacing={8}>
            <Icon icon={wordpress} size={50}></Icon>
            <Heading>Sign in to your account</Heading>

            <VStack spacing={5}>
                <Card isRounded style={{width: '350px' }}>
                    <TextControl placeholder='Username or Email Address' style={{ border: 'none' }} />
                    <CardDivider></CardDivider>
                    <TextControl type='password' placeholder='Password' style={{ border: 'none' }} />
                </Card>

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

export default SignIn2;