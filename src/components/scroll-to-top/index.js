/**
 * External dependencies.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Render Scroll To Top
 */
function ScrollToTop({ children }) {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children || null;
};

export default ScrollToTop;