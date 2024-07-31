/**
 * External dependencies.
 */
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

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

    const location = useLocation();
    const [newClass, setNewClass] = useState('none');
    const [header, setheader] = useState('wpui-header')

    useEffect(() => {
        if (location.pathname === '/') {
            const handleScroll = () => {
                if (window.scrollY > 550) {
                    setNewClass('');
                } else {
                    setNewClass('none');
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
        if (location.pathname != '/') {
            setheader('not-sticky')
        }
    }, [location.pathname]);

    return (
        <Card className={header} isBorderless borderBottom>
            <HStack>
                <Link to={"/"} className='wpui-site-logo'>
                    <Logo />
                </Link>
                <HStack justify="center" className='wpui-header-button'>
                    <Link className={newClass} to="getting-started">
                        <Button
                            variant="primary"
                            style={{ backgroundColor: '#3858E9' }}
                        >
                            Getting started
                        </Button>
                    </Link>
                    <Button
                        className={newClass}
                        style={{ border: '1.5px solid #ffffff' }}
                        href='https://github.com/lubusIN/wpui/discussions'
                        color="white"
                    >
                        Join discussion
                    </Button>
                </HStack>
            </HStack>
        </Card>
    );
};

export default Header;
