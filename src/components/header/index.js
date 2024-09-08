/**
 * External dependencies.
 */
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
import './style.scss';
import Logo from '../logo';

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
        <Card className={headerClass} isBorderless>
            <HStack className="header_cont">
                <Link to={"/"} className='wpui-site-logo'>
                    <Logo />
                </Link>
                <HStack expanded={false} className={`wpui-header-button ${showButtons}`}>
                    <Link  to="getting-started">
                        <Button variant="primary">
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
