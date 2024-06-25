/**
 * External dependencies.
 */
import { useState } from "react";

/**
 * WordPress dependencies.
 */
import {
    __experimentalNavigation as Navigation,
    __experimentalNavigationGroup as NavigationGroup,
    __experimentalNavigationItem as NavigationItem,
    __experimentalNavigationMenu as NavigationMenu,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalText as Text,
} from "@wordpress/components";

/**
 * Render Navigation
 */
function Navigation2() {

    const [activeItem, setItemActive] = useState('dashboard');

    const items = [
        {
            name: 'Dashboard',
            slug: 'dashboard',
        },
        {
            name: 'Posts',
            slug: 'posts',
            count: 5
        },
        {
            name: 'Pages',
            slug: 'pages',
            count: '20+'
        },
        {
            name: 'Users',
            slug: 'users',
            count: 7
        },
        {
            name: 'Comments',
            slug: 'comments',
        },
        {
            name: 'Settings',
            slug: 'settings',
        }
    ];

    return (
        <>
            <Navigation activeItem={activeItem}>
                <NavigationMenu>
                    <HStack alignment="center">
                        <NavigationGroup>
                            <VStack spacing={4}>
                                {items.map((item, index) => (
                                    <NavigationItem
                                        className="wpui_nav_item"
                                        key={index}
                                        item={item.slug}
                                        title={item.name}
                                        badge={
                                            item.count && (
                                                <Text
                                                    style={{
                                                        padding: '5px 10px',
                                                        borderRadius: '20px',
                                                        border: '1px solid grey',
                                                        background: 'white',
                                                    }}
                                                >
                                                    {item.count}
                                                </Text>
                                            )
                                        }
                                        onClick={() => setItemActive(item.slug)}
                                        style={{ width: '20rem' }}
                                    />
                                ))}
                            </VStack>
                        </NavigationGroup>
                    </HStack>
                </NavigationMenu>
            </Navigation>
            <style>
                {`
                       .wpui_nav_item .components-navigation__item-badge {
                             padding: 0px;
                        }
                    `}
            </style>
        </>
    );
};

Navigation2.meta = {
    title: 'Navigate 2',
    path: '/Navigations/navigate2',
};

export default Navigation2;