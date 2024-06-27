/**
 * External dependencies.
 */
import { useState } from 'react';

/**
 * WordPress dependencies.
 */
import { useCopyToClipboard } from '@wordpress/compose';
import {
    check,
    copy,
} from "@wordpress/icons";
import {
    Popover,
    Button,
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import './style.scss'

/**
 * Render Copy Button
 */
function CopyButton({ content }) {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopyClick = () => {
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 1000);
    };

    return (
        <Button
            className='wpui-copy'
            icon={hasCopied ? check : copy}
            onClick={handleCopyClick}
            ref={useCopyToClipboard(content)}
        >
            {hasCopied && (
                <Popover
                    className='copied-pop'
                    position='middle left'
                >
                    Copied
                </Popover>
            )}
        </Button>
    );
}

export default CopyButton;