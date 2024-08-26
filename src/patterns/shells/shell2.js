/**
 * WordPress dependencies.
 */
import {
    Card,
    Button,
    CardBody,
    Flex,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalZStack as ZStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { home, cog, plugins, key, external, trendingUp, close, menu } from "@wordpress/icons";
import { useViewportMatch } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import React, { useState } from 'react';

/**
 * Render Shell 2
 */
function Shell2() {

    const isDesktop = useViewportMatch('large');
    const isMobile = useViewportMatch('mobile');
    const [activeButton, setActiveButton] = useState('dashboard');
    const [showButtons, setShowButtons] = useState(false);
    const icon = {
        dashboard: home,
        settings: cog,
        addons: plugins,
        license: key,
        support: external
    };

    const handleButtonClick = (buttonKey) => {
        setActiveButton(buttonKey);
    };

    const MenuList = () => (
        <VStack style={{ boxShadow: 'none', backgroundColor: '#1c1e24' }}>
            {['dashboard', 'settings', 'addons', 'license', 'support'].map(key => (
                <Button
                    key={key}
                    style={{ color: "white", boxShadow: 'none' }}
                    variant={activeButton === key ? "primary" : "secondary"}
                    icon={icon[key]}
                    onClick={() => handleButtonClick(key)}
                >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                </Button>
            ))}
        </VStack>
    );

    return (
        <>
            <Card style={{ backgroundColor: "#1c1e24", padding: "5px", borderRadius: '5px' }}>
                <Flex align='top' direction={['column', 'row']}>
                    <CardBody style={{ width: isDesktop ? '25%' : '100%', padding: '0px' }}>
                        <VStack spacing={15} style={{ marginTop: '15px' }}>
                            {/* Wpui Logo */}
                            <HStack style={{ marginLeft: '20px' }}>
                                <svg width="140" height="38" viewBox="0 0 145 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_dd_622_789)">
                                        <path d="M28.3817 34H9.61834C5.96802 34 3 31.032 3 27.3817V8.61834C3 4.96802 5.96802 2 9.61834 2H28.3817C32.032 2 35 4.96802 35 8.61834V27.3817C35 31.032 32.032 34 28.3817 34Z" fill="white" />
                                        <path d="M16.0912 20C14.8176 20 13.5783 19.9659 12.3046 20C10.6867 20 9.41308 18.774 9.10327 17.548C9.03442 17.2415 9 16.969 9 16.6625C9 15.2322 9 13.8019 9 12.3715C9 10.4303 10.4458 9 12.4079 9C16.6076 9 20.8417 9 25.0413 9C25.179 9 25.3167 9 25.4544 9C26.4182 9 27.2444 9.27245 27.9673 9.9195C28.6558 10.5666 29 11.3498 29 12.2693C29 13.7337 29 15.2322 29 16.6966C29 18.5356 27.5198 20 25.6609 20C22.5972 20 19.5336 20 16.4699 20C16.3666 20 16.2289 20 16.0912 20ZM16.642 17.7864C19.6713 17.7864 22.7005 17.7864 25.6954 17.7864C26.315 17.7864 26.7625 17.3096 26.7625 16.6966C26.7625 15.2322 26.7625 13.7337 26.7625 12.2693C26.7625 11.6563 26.315 11.1796 25.6954 11.1796C24.8348 11.1796 23.9742 11.1796 23.0792 11.1796C22.5284 11.1796 21.9432 11.1796 21.3924 11.1796C18.3976 11.1796 15.4028 11.1796 12.4079 11.1796C11.7194 11.1796 11.2375 11.6223 11.2375 12.2693C11.2375 13.7337 11.2375 15.2322 11.2375 16.6966C11.2375 17.3096 11.685 17.7864 12.3046 17.7864C13.7504 17.7864 15.1962 17.7864 16.642 17.7864Z" fill="black" />
                                        <path d="M11.5761 24.5C11.1572 24.4615 10.7383 24.5769 10.3893 24.1923C10.0402 23.8077 9.90061 23.3077 10.0751 22.8077C10.2497 22.3462 10.6336 22 11.1223 22C12.0997 22 13.077 22 14.0544 22C14.194 22 14.3336 22 14.4732 22C18.5572 22 22.676 22 26.76 22C27.6675 22 28.226 22.8077 27.9118 23.6923C27.7373 24.1923 27.3883 24.4615 26.9345 24.5C26.7949 24.5 26.6203 24.5 26.4807 24.5C21.6289 24.5 16.777 24.5 11.9251 24.5C11.8553 24.5 11.7157 24.5 11.5761 24.5Z" fill="black" />
                                        <path d="M18.9716 28.5C16.3571 28.5 13.7776 28.5 11.1632 28.5C10.6054 28.5 10.222 28.1538 10.0477 27.6154C9.90826 27.1154 10.0826 26.5769 10.466 26.2308C10.71 26.0385 10.9889 26 11.3026 26C16.0783 26 20.8539 26 25.6645 26C26.0479 26 26.4662 26 26.8497 26C27.512 26 28 26.5385 28 27.2308C28 27.9231 27.512 28.5 26.8148 28.5C24.2352 28.5 21.6208 28.5 18.9716 28.5Z" fill="black" />
                                    </g>
                                    <path d="M50.5888 27.5L45 8.8125H48.9028L52.8681 23.665L57.0206 8.8125H61.423L65.5756 23.665L69.4472 8.8125H73.35L67.7612 27.5H63.2964L59.1438 13.2L55.0224 27.5H50.5888Z" fill="black" />
                                    <path d="M76.5898 33.9682V9.03512H79.8931L80.0474 11.6429C80.6648 10.6888 81.4984 9.98919 82.5171 9.51215C83.5359 9.03512 84.6163 8.8125 85.8203 8.8125C87.58 8.8125 89.0618 9.22593 90.204 10.0528C91.3463 10.8797 92.2106 11.9927 92.7663 13.4238C93.322 14.855 93.5998 16.4451 93.5998 18.1942C93.5998 20.0069 93.322 21.5971 92.7355 23.0282C92.1489 24.4275 91.2845 25.5406 90.1114 26.3674C88.9383 27.1625 87.4565 27.5759 85.6351 27.5759C84.7707 27.5759 83.9989 27.4805 83.2889 27.2897C82.5788 27.0989 81.9614 26.8445 81.4366 26.4628C80.9118 26.113 80.4487 25.6678 80.0474 25.1907V34H76.5898V33.9682ZM85.2338 24.3321C86.4377 24.3321 87.4256 24.0458 88.1356 23.4734C88.8457 22.901 89.3705 22.1695 89.6792 21.2472C89.9879 20.325 90.1423 19.3073 90.1423 18.226C90.1423 17.0811 89.9879 16.0634 89.6483 15.1094C89.3088 14.1871 88.7839 13.4238 88.0739 12.8514C87.333 12.279 86.376 11.9927 85.172 11.9927C84.0607 11.9927 83.1345 12.279 82.3628 12.8514C81.591 13.4238 81.0353 14.1871 80.634 15.1094C80.2326 16.0634 80.0474 17.0811 80.0474 18.1942C80.0474 19.3391 80.2326 20.3568 80.6031 21.3108C80.9735 22.2331 81.5601 22.9964 82.3319 23.5052C83.0728 24.0459 84.0607 24.3321 85.2338 24.3321Z" fill="black" />
                                    <path d="M104.94 27.5C102.305 27.5 100.321 26.8245 98.9218 25.4415C97.523 24.0584 96.8398 21.9999 96.8398 19.1694V8.8125H100.483V18.9764C100.483 20.07 100.646 21.035 100.971 21.8069C101.296 22.611 101.784 23.2221 102.435 23.6403C103.086 24.0584 103.931 24.2836 104.94 24.2836C106.013 24.2836 106.859 24.0584 107.51 23.6403C108.16 23.2221 108.648 22.5789 108.941 21.8069C109.234 21.0028 109.396 20.07 109.396 19.0086V8.8125H113.04V19.2016C113.04 22.0642 112.324 24.1549 110.925 25.5058C109.559 26.8245 107.542 27.5 104.94 27.5Z" fill="black" />
                                    <path d="M121.14 8.8125H117.09V27.5H121.14V8.8125Z" fill="black" />
                                    <path d="M50.5888 27.5L45 8.8125H48.9028L52.8681 23.665L57.0206 8.8125H61.423L65.5756 23.665L69.4472 8.8125H73.35L67.7612 27.5H63.2964L59.1438 13.2L55.0224 27.5H50.5888Z" fill="white" />
                                    <path d="M76.5898 33.9682V9.03512H79.8931L80.0474 11.6429C80.6648 10.6888 81.4984 9.98919 82.5171 9.51215C83.5359 9.03512 84.6163 8.8125 85.8203 8.8125C87.58 8.8125 89.0618 9.22593 90.204 10.0528C91.3463 10.8797 92.2106 11.9927 92.7663 13.4238C93.322 14.855 93.5998 16.4451 93.5998 18.1942C93.5998 20.0069 93.322 21.5971 92.7355 23.0282C92.1489 24.4275 91.2845 25.5406 90.1114 26.3674C88.9383 27.1625 87.4565 27.5759 85.6351 27.5759C84.7707 27.5759 83.9989 27.4805 83.2889 27.2897C82.5788 27.0989 81.9614 26.8445 81.4366 26.4628C80.9118 26.113 80.4487 25.6678 80.0474 25.1907V34H76.5898V33.9682ZM85.2338 24.3321C86.4377 24.3321 87.4256 24.0458 88.1356 23.4734C88.8457 22.901 89.3705 22.1695 89.6792 21.2472C89.9879 20.325 90.1423 19.3073 90.1423 18.226C90.1423 17.0811 89.9879 16.0634 89.6483 15.1094C89.3088 14.1871 88.7839 13.4238 88.0739 12.8514C87.333 12.279 86.376 11.9927 85.172 11.9927C84.0607 11.9927 83.1345 12.279 82.3628 12.8514C81.591 13.4238 81.0353 14.1871 80.634 15.1094C80.2326 16.0634 80.0474 17.0811 80.0474 18.1942C80.0474 19.3391 80.2326 20.3568 80.6031 21.3108C80.9735 22.2331 81.5601 22.9964 82.3319 23.5052C83.0728 24.0459 84.0607 24.3321 85.2338 24.3321Z" fill="white" />
                                    <path d="M104.94 27.5C102.305 27.5 100.321 26.8245 98.9218 25.4415C97.523 24.0584 96.8398 21.9999 96.8398 19.1694V8.8125H100.483V18.9764C100.483 20.07 100.646 21.035 100.971 21.8069C101.296 22.611 101.784 23.2221 102.435 23.6403C103.086 24.0584 103.931 24.2836 104.94 24.2836C106.013 24.2836 106.859 24.0584 107.51 23.6403C108.16 23.2221 108.648 22.5789 108.941 21.8069C109.234 21.0028 109.396 20.07 109.396 19.0086V8.8125H113.04V19.2016C113.04 22.0642 112.324 24.1549 110.925 25.5058C109.559 26.8245 107.542 27.5 104.94 27.5Z" fill="white" />
                                    <path d="M121.14 8.8125H117.09V27.5H121.14V8.8125Z" fill="white" />
                                    <defs>
                                        <filter id="filter0_dd_622_789" x="0" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="1" />
                                            <feGaussianBlur stdDeviation="1" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_622_789" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="1" />
                                            <feGaussianBlur stdDeviation="1.5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
                                            <feBlend mode="normal" in2="effect1_dropShadow_622_789" result="effect2_dropShadow_622_789" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_622_789" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                                {!isDesktop && (
                                    <Button
                                        icon={showButtons ? close : menu}
                                        onClick={() => setShowButtons(prevState => !prevState)}
                                        style={{ marginRight: '20px', color: 'white' }}
                                    >
                                    </Button>
                                )}
                            </HStack>
                            {
                                isMobile &&
                                <MenuList activeButton={activeButton} handleButtonClick={handleButtonClick} icon={icon} />
                            }
                        </VStack>
                    </CardBody>
                    <ZStack isReversed style={{ width: '100%' }}>
                        {
                            !isMobile && showButtons &&
                            <MenuList activeButton={activeButton} handleButtonClick={handleButtonClick} icon={icon} />
                        }
                        <CardBody size="large" style={{ padding: '0px', height: '720px', width: "100%", backgroundColor: 'white', borderRadius: '5px' }}>
                            <HStack expanded={false} style={{ borderBottom: '1px solid #D8D8D8', padding: '15px 50px' }}>
                                <Heading>Dashboard</Heading>
                                <Button variant="primary" icon={trendingUp}>Go Pro</Button>
                            </HStack>
                            {/* Display your Component Here */}
                        </CardBody>
                    </ZStack>
                </Flex>
            </Card>
            <style>
                {`
                    .components-z-stack >div{
                        width: 100%;
                    }
                `}
            </style>
        </>
    );
}

// @meta-start
Shell2.meta = {
    title: 'Shell 2',
    name: 'Shell2',
    category: 'Shells',
    path: '/shells/shell2',
};
// @meta-end

export default Shell2;