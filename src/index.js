/**
 * External dependencies.
 */
import React from "react"
import ReactDom from "react-dom/client"
import { BrowserRouter } from "react-router-dom";

/**
 * WordPress dependencies.
 */
import '@wordpress/components/build-style/style.css';

/**
 * Internal dependencies.
 */
import './app.css';
import App from './app';

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <App/>
        </BrowserRouter>
    </React.StrictMode>
)