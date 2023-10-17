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
    const [direction, setDirection] = useState();

    useEffect(() => {
        if (width <= 480) {
            setDirection('column');
        }
        // else if (width <= 920) {
        //     setDirection('column'); // You can set a different direction if needed
        // }
        else {
            setDirection(['column', 'row']);
        }
    }, [width])

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
                direction,
                setDirection
            }}
        >
            {children}
        </WpuiContext.Provider>
    );
};

export default WpuiProvider;