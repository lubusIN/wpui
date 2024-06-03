/**
 * WordPress dependencies.
 */
import { createRoot, render } from '@wordpress/element';
import '@wordpress/components/build-style/style.css';

/**
 * Internal dependencies.
 */
import './app.css';
import App from './app';


const root = document.getElementById('root');

if (createRoot) {
    createRoot(root).render(<App />);
} else {
    render(<App />, root);
}
