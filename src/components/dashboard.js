/**
 * WordPress dependencies.
 */
import {
    Card,
    CardBody,
    __experimentalGrid as Grid,
    __experimentalVStack as VStack,
    __experimentalNavigation as Navigation,
    __experimentalNavigationGroup as NavigationGroup,
    __experimentalNavigationItem as NavigationItem,
    __experimentalNavigationMenu as NavigationMenu,
} from "@wordpress/components";
import { cog, home, file, calendar, pages, people } from "@wordpress/icons";

/**
 * Internal dependencies.
 */
import { HeroSection } from '../components';

/**
 * Render Dashboard
 */
function Dashboard() {

    const items = [
        {
            name: 'Dashboard',
            slug: 'dashboard',
            icon: home
        },
        {
            name: 'Teams',
            slug: 'teams',
            icon: people
        },
        {
            name: 'Projects',
            slug: 'projects',
            icon: file
        },
        {
            name: 'Calendar',
            slug: 'calendar',
            icon: calendar
        },
        {
            name: 'Documents',
            slug: 'documents',
            icon: pages
        }
    ];

    return (
        <Grid
            columns={2}
            templateColumns="1fr 3fr"
        >
            <Card>
                <Navigation activeItem="dashboard">
                    <NavigationMenu title='Home' hasSearch>
                        <NavigationGroup>
                            {items.map((item, index) => (
                                <NavigationItem
                                    key={index}
                                    item={item.slug}
                                    icon={item.icon}
                                    title={item.name}
                                    onClick={() => { }}
                                />
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
                    <NavigationMenu>
                        <NavigationItem
                            icon={cog}
                            title="Settings"
                        />
                    </NavigationMenu>
                </Navigation>
            </Card>
            <Card>
                <VStack expanded>
                    <CardBody>
                        <HeroSection />
                    </CardBody>
                </VStack>
            </Card>
        </Grid>
    );
};

export default Dashboard;