/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    chevronRight,
} from "@wordpress/icons";
import {
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalText as Text,
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import { PatternView } from '../components';

/**
 * Render Patterns Page
 */
function Patterns({ title, patterns }) {
    return (
        <VStack className='wpui-com-page' spacing={8}>
            <HStack className="wpui-back-button" alignment='left' spacing={0}>
                <Link to="/" style={{ boxShadow: 'none', textDecoration: 'none' }}>
                    <div>
                        <span className="home" style={{ display: "flex" }}>
                            Home
                            <div style={{ width: '20px', height: '20px' }}>
                                {chevronRight}
                            </div> </span>
                    </div>
                </Link>
                <Text>{title}</Text>
            </HStack>

            <VStack spacing={24}>
                {
                    Object.values(patterns).map((Pattern, index) => {
                        const { title, path } = Pattern.meta;
                        return (
                            <PatternView
                                key={index}
                                title={title}
                                path={path}
                                component={Pattern} />
                        )
                    })
                }
            </VStack>
        </VStack>
    );
};

export default Patterns;