/**
 * External dependencies.
 */
import React from 'react'
import * as Components from '../patterns/';

/**
 * Render ActionPanels
 */

function ActionPanels() {
    return (
        <svg width="307" height="230" viewBox="0 0 307 230" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="307" height="230" rx="6" fill="#F0F5FF" />
            <rect x="112" y="190" width="83.126" height="3.69449" rx="1.84725" fill="#D6E4FF" />
            <rect x="89" y="197" width="132" height="4" rx="1.84725" fill="#D6E4FF" />
            <rect x="112" y="205.083" width="83" height="4" rx="1.84725" fill="#D6E4FF" />
            <path d="M0 6C0 2.68629 2.68629 0 6 0H301C304.314 0 307 2.68629 307 6V33.4545H0V6Z" fill="#B8CFFF" />
            <path fillRule="evenodd" clipRule="evenodd" d="M16.7455 20.9091C19.0575 20.9091 20.9318 19.0368 20.9318 16.7273C20.9318 14.4177 19.0575 12.5454 16.7455 12.5454C14.4334 12.5454 12.5591 14.4177 12.5591 16.7273C12.5591 19.0368 14.4334 20.9091 16.7455 20.9091ZM30.7 20.9091C33.0121 20.9091 34.8864 19.0368 34.8864 16.7273C34.8864 14.4177 33.0121 12.5454 30.7 12.5454C28.3879 12.5454 26.5136 14.4177 26.5136 16.7273C26.5136 19.0368 28.3879 20.9091 30.7 20.9091ZM48.8409 16.7273C48.8409 19.0368 46.9666 20.9091 44.6546 20.9091C42.3425 20.9091 40.4682 19.0368 40.4682 16.7273C40.4682 14.4177 42.3425 12.5454 44.6546 12.5454C46.9666 12.5454 48.8409 14.4177 48.8409 16.7273Z" fill="white" />
            <rect x="18.1212" y="55.7576" width="270.424" height="111.515" rx="4" fill="#DDE8FF" />
            <rect x="225.273" y="82.2424" width="36" height="12" rx="6" fill="#3858E9" />
            <rect x="44.0606" y="82.2424" width="167.273" height="14" rx="4" fill="white" />
            <path fillRule="evenodd" clipRule="evenodd" d="M71.697 118.485C70.5924 118.485 69.697 119.38 69.697 120.485V127.636C69.697 128.741 70.5924 129.636 71.697 129.636H234.97C236.074 129.636 236.97 128.741 236.97 127.636V120.485C236.97 119.38 236.074 118.485 234.97 118.485H71.697ZM88.4242 136.606C87.3197 136.606 86.4242 137.501 86.4242 138.606V145.758C86.4242 146.862 87.3197 147.758 88.4242 147.758H218.242C219.347 147.758 220.242 146.862 220.242 145.758V138.606C220.242 137.501 219.347 136.606 218.242 136.606H88.4242Z" fill="#B8CFFF" />
        </svg>
    );
};

ActionPanels.meta = {
    title: 'Action Panels',
    path: '/actionpanels',
    src: <ActionPanels/>,
    variations: Components.ActionPanels,
};

export default ActionPanels;
