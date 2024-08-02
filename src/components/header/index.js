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
    const { pathname } = useLocation();
    const [showButtons, setShowButton] = useState('none');
    const headerClass = pathname === '/' ? 'wpui-header' : 'not-sticky';

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            const showButtons = entries[0].isIntersecting;
            setShowButton(showButtons ? 'none' : '');
        })

        if (pathname === '/') {
            setShowButton('none');
            observer.observe(document.querySelector('.wpui-hero-card'));
        }
        else {
            setShowButton('');
        }
    }, [pathname]);

    return (
        <Card className={headerClass} isBorderless borderBottom>
            <HStack>
                <Link to={"/"} className='wpui-site-logo'>
                    <Logo />
                </Link>
                <HStack expanded={false} className={`wpui-header-button ${showButtons}`}>
                    <Link  to="getting-started">
                        <Button
                            variant="primary"
                            style={{ backgroundColor: '#3858E9' }}
                        >
                            Getting started
                        </Button>
                    </Link>
                    <Button
                        
                        style={{ border: '1.5px solid #ffffff', color:'white'}}
                        href='https://github.com/lubusIN/wpui/discussions'
                    >
                        Join discussion
                    </Button>
                </HStack>
            </HStack>
        </Card>
    );
};

export default Header;
