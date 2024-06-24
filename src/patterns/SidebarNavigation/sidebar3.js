/**
 * WordPress dependencies.
 */
import { 
    home, 
    file, 
    calendar, 
    pages, 
    people, 
    commentAuthorAvatar 
} from "@wordpress/icons";

import {
    Icon,
    Card,
    __experimentalGrid as Grid,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalNavigation as Navigation,
    __experimentalNavigationGroup as NavigationGroup,
    __experimentalNavigationItem as NavigationItem,
    __experimentalNavigationMenu as NavigationMenu,
} from "@wordpress/components";

/**
 * Render Dashboard
 */
function Sidebar3() {

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
                        <NavigationItem style={{ marginTop: '30px' }}>
                            <HStack alignment="left">
                                <Icon size={45} icon={commentAuthorAvatar}></Icon>
                                <Text size={15} >Your Name</Text>
                            </HStack>
                        </NavigationItem>
                    </NavigationMenu>
                </Navigation>

            </Card>
            <Card>
                <Card variant="grid" style={{ margin: '15px', height: '70vh', width: 'auto' }}></Card>
            </Card>
        </Grid>
    );
};

export default Sidebar3;