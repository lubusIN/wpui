
/**
 * External dependencies.
 */
import React from 'react'

/**
 * Internal dependencies.
 */
import * as patterns from '../patterns/';

/**
 * Render SignIn
 */

function SignIn() {
    return (
        <svg width="307" height="230" viewBox="0 0 307 230" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="307" height="230" rx="6" fill="#F0F5FF" />
            <rect x="88" y="72" width="130" height="106" rx="6" fill="white" />
            <rect x="96.6005" y="95.1182" width="113.799" height="15.1957" rx="2.19494" stroke="#B8CFFF" strokeWidth="1.01305" />
            <rect x="96.6005" y="122.133" width="113.799" height="15.1957" rx="2.19494" stroke="#B8CFFF" strokeWidth="1.01305" />
            <rect x="175" y="148.981" width="36" height="12" rx="6" fill="#3858E9" />
            <rect x="96.5" y="153.481" width="3" height="3" stroke="#B8CFFF" />
            <path d="M0 6C0 2.68629 2.68629 0 6 0H301C304.314 0 307 2.68629 307 6V33.4545H0V6Z" fill="#B8CFFF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.7454 20.9091C19.0575 20.9091 20.9318 19.0368 20.9318 16.7273C20.9318 14.4177 19.0575 12.5455 16.7454 12.5455C14.4334 12.5455 12.5591 14.4177 12.5591 16.7273C12.5591 19.0368 14.4334 20.9091 16.7454 20.9091ZM30.7 20.9091C33.0121 20.9091 34.8864 19.0368 34.8864 16.7273C34.8864 14.4177 33.0121 12.5455 30.7 12.5455C28.3879 12.5455 26.5136 14.4177 26.5136 16.7273C26.5136 19.0368 28.3879 20.9091 30.7 20.9091ZM48.8409 16.7273C48.8409 19.0368 46.9666 20.9091 44.6545 20.9091C42.3425 20.9091 40.4682 19.0368 40.4682 16.7273C40.4682 14.4177 42.3425 12.5455 44.6545 12.5455C46.9666 12.5455 48.8409 14.4177 48.8409 16.7273Z" fill="white" />
            <rect x="104" y="153" width="45" height="4" rx="1.84725" fill="#D6E4FF" />
            <rect x="104" y="187" width="71" height="4" rx="1.84725" fill="#D6E4FF" />
            <rect x="104" y="198" width="45" height="4" rx="1.84725" fill="#D6E4FF" />
        </svg>
    );
};

SignIn.meta = {
    title: 'Sign In',
    path: '/signin',
    patterns: patterns.SignIn
};

export default SignIn;
