/**
 * External dependencies.
 */
import { useEffect, useState } from 'react';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    __experimentalVStack as VStack,
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import { ContentLoader, CopyButton } from '../index';

/**
 * Render Pattern Code
 */
function PatternCode({ path, style }) {
    const [isLoading, setIsLoading] = useState(false);
    const [patternCode, setPatternCode] = useState('');

    useEffect(() => {
        setIsLoading(true);
        fetchCode(path);
    }, [])

    const fetchCode = async (path) => {
        try {
            const content = await import(/* webpackPrefetch: true */
                `!!raw-loader!/src/patterns${path}.js`)
              .then((pattern) => pattern.default);

            const codeText = content.replace(/^\s*\/\/ @meta-start[\s\S]*?\/\/ @meta-end\s*$/gm, '');
            setPatternCode(codeText);
        } catch (error) {
            console.error('Error loading file:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <VStack style={{ position: 'relative', ...style }}>
            {isLoading && <div ><ContentLoader /></div>}

            {!isLoading &&
                (
                    <>
                        <SyntaxHighlighter
                            language="javascript"
                            style={coldarkDark}
                            customStyle={{ borderRadius: '8px' }}>
                            {patternCode}
                        </SyntaxHighlighter>
                        <CopyButton content={patternCode} />
                    </>
                )
            }
        </VStack>
    );
}

export default PatternCode;