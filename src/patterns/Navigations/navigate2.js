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
    __experimentalVStack as VStack,
    __experimentalText as Text,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { comment, home, pages, people, post, settings } from "@wordpress/icons";

/**
 * Render Dashboard
 */
function Navigation2() {
    const [activeItem, setItemActive] = useState('dashboard');

    const items = [
        {
            name: 'Dashboard',
            slug: 'dashboard',
            icon: home
        },
        {
            name: 'Posts',
            slug: 'posts',
            count: 5,
            icon: post
        },
        {
            name: 'Pages',
            slug: 'pages',
            count: '20+',
            icon: pages
        },
        {
            name: 'Users',
            slug: 'users',
            count: 7,
            icon: people
        },
        {
            name: 'Comments',
            slug: 'comments',
            icon: comment
        },
        {
            name: 'Settings',
            slug: 'settings',
            icon: settings
        }
    ];

    return (
        <MenuGroup>
            <HStack alignment="center">
                <VStack spacing={2}>
                    {items.map((item) => (
                        <MenuItem
                            key={item.slug}
                            icon={item.icon}
                            iconPosition="left"

                            onClick={() => setItemActive(item.slug)}
                            isPressed={activeItem === item.slug}
                            style={{
                                width: '20rem',
                                height: '100%',
                                backgroundColor: activeItem === item.slug ? '#3858e9' : '',
                                color: activeItem === item.slug ? 'white' : 'black',
                                
                            }}>
                            {item.name}
                                {item.count && (
                                    <Text
                                        style={{
                                            padding: '2px 5px',
                                            borderRadius: '20px',
                                            border: '1px solid grey',
                                            color: activeItem === item.slug ? 'white' : '',
                                            marginLeft:'12px'
                                        }} >
                                        {item.count}
                                    </Text>
                                )
                            } 
                        </MenuItem>
                    ))}
                </VStack>
            </HStack>
        </MenuGroup>
    );
};

// @meta-start
Navigation2.meta = {
    title: 'Navigate 2',
    name: 'Navigation2',
    category: 'Navigations',
    path: '/Navigations/navigate2',
};
// @meta-end

export default Navigation2;