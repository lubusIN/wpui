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
import '@wpui/app.scss';
import App from '@wpui/app';
import * as Patterns from '@wpui/patterns'

const queryParams = new URLSearchParams(window.location.search)
const mode = queryParams.get("mode");
const category = queryParams.get("category");
const pattern = queryParams.get("pattern");

const root = ReactDom.createRoot(document.getElementById('root'))

if (mode) {
    const Pattern = Patterns[category][pattern];
    const embedStyle = category !== 'Shells' ? { marginTop: '1px' } : {};

    root.render(
        <div className="wpui-pattern-embed" style={embedStyle}>
            <Pattern />
        </div>
    )
} else {
    root.render(
        <React.StrictMode>
            <BrowserRouter> 
                <App />
            </BrowserRouter>
        </React.StrictMode>
    )
}
