/**
 * WordPress dependencies.
 */
import {
    Card,
    CardBody,
    __experimentalGrid as Grid,
    __experimentalVStack as VStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalNavigation as Navigation,
    __experimentalNavigationGroup as NavigationGroup,
    __experimentalNavigationItem as NavigationItem,
    __experimentalNavigationMenu as NavigationMenu,
    Button,
} from "@wordpress/components";
import { cog, home, file, calendar, pages, people } from "@wordpress/icons";

/**
 * Render Dashboard
 */
function Navigation3() {

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
        <Navigation activeItem="dashboard">
            <NavigationMenu>
                <NavigationGroup>
                    {items.map((item, index) => (
                        <HStack>
                            <NavigationItem
                                key={index}
                                item={item.slug}
                                title={item.name}
                                onClick={() => { }}
                                text=''
                            />
                            <Text>{item.notificationCount}</Text>
                        </HStack>

                    ))}
                </NavigationGroup>
            </NavigationMenu>
            <NavigationMenu title='Clients'>
                <NavigationGroup>
                    <NavigationItem
                        item="heroicons"
                        title="HeroIcons"
                    />
                    <NavigationItem
                        item="tailwind"
                        title="Tailwind"
                    />
                    <NavigationItem
                        item="workations"
                        title="Workations"
                    />
                </NavigationGroup>
            </NavigationMenu>
        </Navigation>
    );
};

export default Navigation3;