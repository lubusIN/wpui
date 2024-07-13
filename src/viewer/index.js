/**
 * External dependencies.
 */
import React from "react"
import ReactDom from "react-dom/client"

/**
 * WordPress dependencies.
 */
import '@wordpress/components/build-style/style.css';

/**
 * Internal dependencies.
 */
import App from '@wpui/viewer/app';
import './style.scss';

// Mount react app
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)