/**
 * External dependencies.
 */
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";

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
    const {pathname} = useLocation();
    const [newClass, setNewClass] = useState('');
    const headerClass = pathname === '/' ? 'wpui-header' : 'not-sticky';

    useEffect(() => {
        const isHome = pathname === '/';
        isHome ? setNewClass('none') : setNewClass('');
        const handleScroll = () => { console.log(pathname);
            const showButtons = pathname == '/' && window.scrollY > 583;
            showButtons ? setNewClass('') : (console.log('test'),setNewClass('none'));
        };


        pathname == '/' ? window.addEventListener('scroll', handleScroll) : window.removeEventListener('scroll', handleScroll);
    }, [pathname]);

    return (
        <Card className={headerClass} isBorderless borderBottom>
            <HStack>
                <Link to={"/"} className='wpui-site-logo'>
                    <Logo />
                </Link>
                <HStack expanded={false} style={{  }} className={`wpui-header-button ${newClass}`}>
                    <Link  to="getting-started">
                        <Button
                            variant="primary"
                            style={{ backgroundColor: '#3858E9' }}
                        >
                            Getting started
                        </Button>
                    </Link>
                    <Button
                        
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
