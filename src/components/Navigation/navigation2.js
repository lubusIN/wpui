/**
 * WordPress dependencies.
 */
import {
    Card,
    Icon,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalNavigation as Navigation,
    __experimentalNavigationGroup as NavigationGroup,
    __experimentalNavigationItem as NavigationItem,
    __experimentalNavigationMenu as NavigationMenu,

} from "@wordpress/components";
import { home, file, calendar, pages, people } from "@wordpress/icons";

/**
 * Render Dashboard
 */
function Navigation2() {

    const items = [
        {
            name: 'Dashboard',
            slug: 'dashboard',
            icon: home,
            notificationCount: '5',
        },
        {
            name: 'Teams',
            slug: 'teams',
            icon: people
        },
        {
            name: 'Projects',
            slug: 'projects',
            icon: file,
            notificationCount: '12',
        },
        {
            name: 'Calendar',
            slug: 'calendar',
            icon: calendar,
            notificationCount: '20+',
        },
        {
            name: 'Documents',
            slug: 'documents',
            icon: pages
        }
    ];

    return (
        <Card isBorderless>
            <Navigation activeItem="dashboard">
                <NavigationMenu>
                    <NavigationGroup>
                        {items.map((item, index) => (
                            <HStack alignment="left">
                                <NavigationItem
                                    key={index}
                                    item={item.slug}
                                    title={item.name}
                                    onClick={() => { }}
                                    text={item.notificationCount}
                                />
                                
                            </HStack>

                        ))}
                    </NavigationGroup>
                </NavigationMenu>
            </Navigation>
        </Card>

    );
};

export default Navigation2;