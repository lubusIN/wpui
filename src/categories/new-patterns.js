/**
 * External dependencies.
 */
import React from 'react'

/**
 * Wordpress dependencies.
 */
import { addCard, Icon } from '@wordpress/icons';

/**
 * Internal dependencies.
 */
import * as patterns from '../patterns/';


/**
 * Render ActionPanels
 */

function NewPatterns() {
    return (
      <Icon icon={addCard} size={50}></Icon>
    );
};

NewPatterns.meta = {
    title: 'Shells',
    path: '/new-patterns',
    patterns: patterns.NewPatterns,
};

export default NewPatterns;
