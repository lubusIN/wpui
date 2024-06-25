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
} from "@wordpress/components";

/**
 * Render Navigation
 */
function Navigation1() {

    const [activeItem, setItemActive] = useState('dashboard');

    const items = [
        {
            name: 'Dashboard',
            slug: 'dashboard',
        },
        {
            name: 'Posts',
            slug: 'posts',
        },
        {
            name: 'Pages',
            slug: 'pages',
        },
        {
            name: 'Users',
            slug: 'users',
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
        <Navigation activeItem={activeItem}>
            <NavigationMenu>
                <HStack alignment="center">
                    <NavigationGroup>
                        <VStack spacing={2}>
                            {items.map((item, index) => (
                                <NavigationItem
                                    key={index}
                                    item={item.slug}
                                    title={item.name}
                                    onClick={() => setItemActive(item.slug)}
                                    style={{ width: '20rem' }}
                                />
                            ))}
                        </VStack>
                    </NavigationGroup>
                </HStack>
            </NavigationMenu>
        </Navigation>
    );
};

Navigation1.meta = {
    title: 'Navigate 1',
    path: '/Navigations/navigate1',
};

export default Navigation1;