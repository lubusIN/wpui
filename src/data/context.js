/**
 * WordPress dependencies.
 */
import { useState, createContext, useEffect } from '@wordpress/element';

/**
 * Context Component.
 */
export const WpuiContext = createContext();

const WpuiProvider = ({ children }) => {

    const [width, setWidth] = useState();
    const [activePath, setActivePath] = useState('');
    const [hasCopied, setHasCopied] = useState(false);
    const [view, setView] = useState('preview');
    const [content, setContent] = useState('');
    const [selectedIndex, setIndex] = useState(0);

    return (
        <WpuiContext.Provider
            value={{
                width,
                setWidth,
                activePath,
                setActivePath,
                hasCopied,
                setHasCopied,
                view,
                setView,
                content,
                setContent,
                selectedIndex,
                setIndex
            }}
        >
            {children}
        </WpuiContext.Provider>
    );
};

export default WpuiProvider;