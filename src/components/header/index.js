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
import './style.scss';

/**
 * Render Header
 */
function Header() {
    const location = useLocation();
    const [newClass, setNewClass] = useState('none');
    const [header, setHeader] = useState('wpui-header');

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/' && window.scrollY > 550) {
                setNewClass('');
            } else {
                setNewClass('none');
            }
        };

        if (location.pathname === '/') {
            window.addEventListener('scroll', handleScroll);
            handleScroll();

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, [location.pathname]);

    useEffect(() => {
        if (location.pathname === '/') {
            setHeader('wpui-header');
        } else {
            setHeader('not-sticky');
        }
    }, [location.pathname]);

    return (
        <Card className={header} isBorderless borderBottom>
            <HStack>
                <Link to={"/"} className='wpui-site-logo'>
                    <Logo />
                </Link>
                <HStack expanded={false} className='wpui-header-button'>
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
