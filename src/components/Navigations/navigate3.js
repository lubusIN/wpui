/**
 * WordPress dependencies.
 */
import {
    __experimentalVStack as VStack,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalNavigation as Navigation,
    __experimentalNavigationGroup as NavigationGroup,
    __experimentalNavigationItem as NavigationItem,
    __experimentalNavigationMenu as NavigationMenu,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { comment, home, pages, people, post, settings } from "@wordpress/icons";

/**
 * Render Dashboard
 */
function Navigation3() {

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
                                        icon={item.icon}
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

export default Navigation3;