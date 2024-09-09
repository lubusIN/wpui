/**
 * External dependencies.
 */
import { useState } from "react";

/**
 * WordPress dependencies.
 */
import {
    MenuGroup,
    MenuItem,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack
} from "@wordpress/components";

/**
 * Render Navigation
 */
function Navigation1() {
    const [activeItem, setItemActive] = useState('dashboard');

    const items = [
        { name: 'Dashboard', slug: 'dashboard' },
        { name: 'Posts', slug: 'posts' },
        { name: 'Pages', slug: 'pages' },
        { name: 'Users', slug: 'users' },
        { name: 'Comments', slug: 'comments' },
        { name: 'Settings', slug: 'settings' }
    ];

    return (
        <MenuGroup>
            <HStack alignment="center">
                <VStack spacing={2}>
                    {items.map((item) => (
                        <MenuItem
                            key={item.slug}
                            onClick={() => setItemActive(item.slug)}
                            isPressed={activeItem === item.slug}
                            style={{
                                width: '20rem', backgroundColor: activeItem === item.slug ? '#3858e9' : '',
                            }}>
                            {item.name}
                        </MenuItem>
                    ))}
                </VStack>
            </HStack>
        </MenuGroup>
    );
}

// @meta-start
Navigation1.meta = {
    title: 'Navigate 1',
    name: 'Navigation1',
    category: 'Navigations',
    path: '/Navigations/navigate1',
};
// @meta-end

export default Navigation1;