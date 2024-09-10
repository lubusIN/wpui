/**
 * External dependencies.
 */
import React from 'react'
import { addTemplate } from "@wordpress/icons";
import { Icon } from '@wordpress/components';

/**
 * Internal dependencies.
 */
import * as patterns from '../patterns';

/**
 * Render ActionPanels
 */

function NewPatterns() {
    return (
        <Icon size={50} icon={addTemplate}></Icon>
    );
};

NewPatterns.meta = {
    title: 'New Patterns',
    path: '/newpatterns',
    patterns: patterns.NewPatterns,
};

export default NewPatterns;
