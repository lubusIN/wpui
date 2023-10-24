/**
 * WordPress dependencies.
 */
import {
    Card,
    Button,
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
} from "@wordpress/components";
import { cog, home, file, calendar, pages, people } from "@wordpress/icons";

/**
 * Render Dashboard
 */
function Sidebar1() {

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
                        <VStack spacing={12}>
                            <VStack spacing={3}>
                                <Text size={15} align="center">From the House of LUBUS</Text>
                                <Heading size={40} align="center" lineHeight={1.3} weight={500}>
                                    Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry.
                                </Heading>
                                <Text size={16} align="center" lineHeight={1.5}>
                                    Lorem Ipsum has been the industry's standard dummy text
                                    ever since the <br /> 1500s, when an unknown printer took a galley
                                    of type and scrambled it to <br /> make a type specimen book.
                                </Text>
                            </VStack>
                            <HStack alignment="center">
                                <Button variant="primary" isPressed>
                                    Browse Components
                                </Button>
                                <Button>
                                    Subscribe NewsLetter
                                </Button>
                            </HStack>
                        </VStack>
                    </CardBody>
                </VStack>
            </Card>
        </Grid>
    );
};

export default Sidebar1;