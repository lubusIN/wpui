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
import { ContentLoader, CopyButton } from '.';

/**
 * Render Pattern Code
 */
function PatternCode({ path }) {
    const [isLoading, setIsLoading] = useState(false);
    const [patternCode, setPatternCode] = useState('');

    useEffect(() => {
        setIsLoading(true);
        fetchCode(path);
    }, [])

    const fetchCode = async (path) => {
        try {
            const response = await fetch(`/src/patterns${path}.js`);
            if (!response.ok) {
                throw new Error('Failed to fetch file');
            }

            const content = await response.text();
            const codeText = content.replace(/^\s*\/\/ @meta-start[\s\S]*?\/\/ @meta-end\s*$/gm, '');
            setPatternCode(codeText);
        } catch (error) {
            console.error('Error loading file:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <VStack style={{ position: 'relative' }}>
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