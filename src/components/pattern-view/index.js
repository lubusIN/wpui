/**
 * External dependencies.
 */
import { useState } from 'react';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';

import {
    code,
    seen
} from "@wordpress/icons";
import {
    Card,
    __experimentalHeading as Heading,
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOptionIcon as ToggleGroupControlOptionIcon,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import { PatternCode } from '../index';
import './style.scss'

/**
 * Render Pattern View
 */
function PatternView({ title, path, component: Pattern }) {
    const [view, setView] = useState('preview');

    return (
        <VStack spacing={4}>
            <HStack>
                <Heading level={4} weight={500}>{title}</Heading>
                <HStack expanded={false} justify='right' alignment='center'>
                    <ToggleGroupControl
                        className="wpui-view-toggle"
                        hideLabelFromVision
                        __nextHasNoMarginBottom
                        isBlock
                        value={view}
                        onChange={(value) => setView(value)}
                    >
                        <ToggleGroupControlOptionIcon icon={seen} value="preview" label="Preview" />
                        <ToggleGroupControlOptionIcon icon={code} value="code" label="Code" />
                    </ToggleGroupControl>
                </HStack>
            </HStack>

            {
                view === 'preview' && (
                    <Card className="wpui-variation-card">
                        <Pattern />
                    </Card>
                )
            }

            {view === 'code' && <PatternCode path={path} />}
        </VStack>
    );
}

export default PatternView;