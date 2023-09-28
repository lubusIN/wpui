import {
    Icon,
    Card,
    CardBody,
    CardHeader,
    ResponsiveWrapper,
    __experimentalNavigation as Navigation,
    __experimentalNavigationGroup as NavigationGroup,
    __experimentalNavigationItem as NavigationItem,
    __experimentalNavigationMenu as NavigationMenu,
    __experimentalGrid as Grid,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    __experimentalText as Text,
} from "@wordpress/components";
import { search, wordpress, trash, cog } from "@wordpress/icons";


export default function Dashboard() {
    return (
        <Grid
            columns={2}
            templateColumns="repeat(1,1fr) 3fr"
        >
            <Card>
                <CardBody>
                    <Icon icon={wordpress} size={50}></Icon>
                    <Navigation>
                        <NavigationMenu hasSearch >
                            <NavigationGroup>
                                <NavigationItem
                                    icon={<Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /></svg>}></Icon>}
                                    title="Dashboard"
                                />
                                <NavigationItem
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>}
                                    title="Teams"
                                />
                                <NavigationItem
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>}
                                    title="Projects"
                                />
                                <NavigationItem
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM72 48v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24v32H48V48Zm136 160H48V96h160v112Zm-96-88v64a8 8 0 0 1-16 0v-51.06l-4.42 2.22a8 8 0 0 1-7.16-14.32l16-8A8 8 0 0 1 112 120Zm59.16 30.45L152 176h16a8 8 0 0 1 0 16h-32a8 8 0 0 1-6.4-12.8l28.78-38.37a8 8 0 1 0-13.31-8.83a8 8 0 1 1-13.85-8A24 24 0 0 1 176 136a23.76 23.76 0 0 1-4.84 14.45Z" /></svg>}
                                    title="Calendar"
                                />
                                <NavigationItem
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C21 19.657 21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172ZM8 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5H8Zm0 4a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5H8Z" clip-rule="evenodd" /></svg>}
                                    title="Documents"
                                />
                                <NavigationItem
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8l6.5 3.78Z" /></svg>}
                                    title="Reports"
                                />
                            </NavigationGroup>
                        </NavigationMenu>
                    </Navigation>
                </CardBody>
                <CardBody>
                    <Heading level={5} style={{ marginBottom: '25px', marginTop: '25px' }}>Your Teams</Heading>
                    <Navigation>
                        <NavigationMenu>
                            <NavigationGroup>
                                <NavigationItem
                                    icon={<Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><g clip-path="url(#healthiconsHNegative0)"><path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48V0ZM18 12a2 2 0 1 0-4 0v24a2 2 0 1 0 4 0V26h12v10a2 2 0 1 0 4 0V12a2 2 0 1 0-4 0v10H18V12Z" clip-rule="evenodd" /></g><defs><clipPath id="healthiconsHNegative0"><path d="M0 0h48v48H0z" /></clipPath></defs></g></svg>}></Icon>}
                                    title="HeroIcons"
                                />
                                <NavigationItem
                                    icon={<Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><g clip-path="url(#healthiconsTNegative0)"><path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48V0ZM16 10a2 2 0 1 0 0 4h6v22a2 2 0 1 0 4 0V14h6a2 2 0 1 0 0-4H16Z" clip-rule="evenodd" /></g><defs><clipPath id="healthiconsTNegative0"><path d="M0 0h48v48H0z" /></clipPath></defs></g></svg>}></Icon>}
                                    title="Tailwind"
                                />
                                <NavigationItem
                                    icon={<Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><g clip-path="url(#healthiconsWNegative0)"><path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48V0ZM10.027 12.329a2 2 0 0 1 3.946-.658l3.076 18.46l5.214-9.123a2 2 0 0 1 3.473 0l5.214 9.124l3.077-18.461a2 2 0 0 1 3.946.658l-4 24a2 2 0 0 1-3.71.663L24 26.031l-6.264 10.961a2 2 0 0 1-3.709-.663l-4-24Z" clip-rule="evenodd" /></g><defs><clipPath id="healthiconsWNegative0"><path d="M0 0h48v48H0z" /></clipPath></defs></g></svg>}></Icon>}
                                    title="Workations"
                                />
                            </NavigationGroup>
                        </NavigationMenu>
                    </Navigation>
                </CardBody>

                <Navigation>
                    <NavigationMenu>
                        <NavigationGroup>
                            <NavigationItem
                                icon={cog}
                                title="Settings"
                            />
                        </NavigationGroup>
                    </NavigationMenu>
                </Navigation>

            </Card>
            <Card>
                <CardHeader>
                    <HStack alignment="left">
                        <Icon icon={search} size={30}></Icon>
                        <Text size={20}>Search...</Text>
                    </HStack>
                    <Icon icon={trash} size={20}></Icon>
                </CardHeader>
                <CardBody>
                    <ResponsiveWrapper
                        naturalHeight={400}
                        naturalWidth={900}
                    >
                        <img
                            alt="WordPress"
                            src="https://s.w.org/style/images/about/WordPress-logotype-standard.png"
                        />
                    </ResponsiveWrapper>
                </CardBody>
            </Card>
        </Grid >
    );
}

