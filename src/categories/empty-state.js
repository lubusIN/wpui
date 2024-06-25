/**
 * External dependencies.
 */
import React from 'react'

/**
 * Internal dependencies.
 */
import * as patterns from '../patterns/';

/**
 * Render EmptyState
 */
function EmptyState() {
    return (
        <svg width="307" height="230" viewBox="0 0 307 230" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="307" height="230" rx="6" fill="#F0F5FF" />
            <path d="M0 6C0 2.68629 2.68629 0 6 0H301C304.314 0 307 2.68629 307 6V33.4545H0V6Z" fill="#B8CFFF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.7454 20.9091C19.0575 20.9091 20.9318 19.0368 20.9318 16.7273C20.9318 14.4177 19.0575 12.5455 16.7454 12.5455C14.4334 12.5455 12.5591 14.4177 12.5591 16.7273C12.5591 19.0368 14.4334 20.9091 16.7454 20.9091ZM30.7 20.9091C33.0121 20.9091 34.8864 19.0368 34.8864 16.7273C34.8864 14.4177 33.0121 12.5455 30.7 12.5455C28.3879 12.5455 26.5136 14.4177 26.5136 16.7273C26.5136 19.0368 28.3879 20.9091 30.7 20.9091ZM48.8409 16.7273C48.8409 19.0368 46.9666 20.9091 44.6545 20.9091C42.3425 20.9091 40.4682 19.0368 40.4682 16.7273C40.4682 14.4177 42.3425 12.5455 44.6545 12.5455C46.9666 12.5455 48.8409 14.4177 48.8409 16.7273Z" fill="white" />
            <rect x="118.614" y="157.686" width="69.7727" height="11.1636" rx="2" fill="#D6E4FF" />
            <rect x="83.7273" y="139.545" width="139.545" height="11.1636" rx="2" fill="#B8CFFF" />
            <rect x="119" y="188" width="69" height="23" rx="11.5" fill="#3858E9" />
            <rect x="142" y="198" width="38" height="4" rx="2" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M153.677 117C168.215 117 180 105.215 180 90.6773C180 76.1396 168.215 64.3546 153.677 64.3546C139.14 64.3546 127.355 76.1396 127.355 90.6773C127.355 105.215 139.14 117 153.677 117Z" fill="#B8CFFF" />
            <g clipPath="url(#clip0_41_78)">
                <path d="M163.634 89.4057C163.634 88.8101 163.397 88.2389 162.976 87.8178C162.555 87.3966 161.984 87.16 161.388 87.16H153.903L151.747 82.6688H146.417C145.822 82.6688 145.251 82.9054 144.829 83.3265C144.408 83.7477 144.172 84.3189 144.172 84.9144V96.8911C144.172 97.4866 144.408 98.0578 144.829 98.4789C145.251 98.9001 145.822 99.1367 146.417 99.1367H161.388C161.984 99.1367 162.555 98.9001 162.976 98.4789C163.397 98.0578 163.634 97.4866 163.634 96.8911V89.4057Z" stroke="white" strokeWidth="0.698637" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <path d="M136.25 199.5H133.5C133.224 199.5 133 199.276 133 199V196.25C133 195.836 132.664 195.5 132.25 195.5C131.836 195.5 131.5 195.836 131.5 196.25V199C131.5 199.276 131.276 199.5 131 199.5H128.25C127.836 199.5 127.5 199.836 127.5 200.25C127.5 200.664 127.836 201 128.25 201H131C131.276 201 131.5 201.224 131.5 201.5V204.25C131.5 204.664 131.836 205 132.25 205C132.664 205 133 204.664 133 204.25V201.5C133 201.224 133.224 201 133.5 201H136.25C136.664 201 137 200.664 137 200.25C137 199.836 136.664 199.5 136.25 199.5Z" fill="white" />
            <defs>
                <clipPath id="clip0_41_78">
                    <rect width="20.9591" height="20.9591" fill="white" transform="translate(143.423 80.4232)" />
                </clipPath>
            </defs>
        </svg>
    );
};

EmptyState.meta = {
    title: 'Empty State',
    path: '/emptystate',
    pattern: patterns.EmptyState,
};


export default EmptyState;
