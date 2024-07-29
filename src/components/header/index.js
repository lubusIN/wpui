/**
 * External dependencies.
 */
import { Link } from "react-router-dom";

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    Card,
    Button,

    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import Logo from '../logo';
import './style.scss'

/**
 * Render Header
 */
function Header() {
    return (
        <Card className="wpui-header" isBorderless borderBottom>
            <HStack>
                <Link to={"/"} className='wpui-site-logo'>
                    <Logo />
                    <Heading color="white">WPUI</Heading>
                </Link>
            </HStack>
        </Card>

    );
};

export default Header;