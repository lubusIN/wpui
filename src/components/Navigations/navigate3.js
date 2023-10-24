/**
 * WordPress dependencies.
 */
import {
    Card,
    __experimentalNavigation as Navigation,
    __experimentalNavigationGroup as NavigationGroup,
    __experimentalNavigationItem as NavigationItem,
    __experimentalNavigationMenu as NavigationMenu,
} from "@wordpress/components";
import { home, file, calendar, pages, people } from "@wordpress/icons";

/**
 * Render Dashboard
 */
function Navigation1() {

    const items = [
        {
            name: 'Dashboard',
            slug: 'dashboard',
        },
        {
            name: 'Teams',
            slug: 'teams',
        },
        {
            name: 'Projects',
            slug: 'projects',
        },
        {
            name: 'Calendar',
            slug: 'calendar',
        },
        {
            name: 'Documents',
            slug: 'documents',
        }
    ];

    return (
        <Card isBorderless>
            <Navigation activeItem="dashboard">
                <NavigationMenu>
                    <NavigationGroup>
                        {items.map((item, index) => (
                            <NavigationItem
                                key={index}
                                item={item.slug}
                                title={item.name}
                                onClick={() => { }}
                            />
                        ))}
                    </NavigationGroup>
                </NavigationMenu>
            </Navigation>
        </Card>

    );
};

export default Navigation1;