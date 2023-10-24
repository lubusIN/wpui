import {
    Card,
    Icon,
    CardBody,
    CardHeader,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalNavigation as Navigation,
    __experimentalNavigationGroup as NavigationGroup,
    __experimentalNavigationItem as NavigationItem,
    __experimentalNavigationMenu as NavigationMenu,
} from "@wordpress/components";
import { wordpress, commentAuthorAvatar } from "@wordpress/icons";
import { useState } from "@wordpress/element";

function Shell3() {

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
        }
    ];

    const [activeItem, setActiveItem] = useState('Dashboard');
    const [cardBodyContent, setCardBodyContent] = useState('');

    const handleNavigationClick = (slug, content) => {
        setActiveItem(slug);
        setCardBodyContent(content);
    };

    return (
        <Card>
            <CardHeader style={{ backgroundColor: '#000000' }}>
                <HStack direction={['column', 'row']}>
                    <Icon fill="white" icon={wordpress} size={35}></Icon>
                    <Navigation>
                        <NavigationMenu>
                            <NavigationGroup>
                                <HStack alignment="left" direction={['column', 'row']}>
                                    {items.map((item, index) => (
                                        <NavigationItem
                                            key={index}
                                            item={item.slug}
                                            title={item.name}
                                            onClick={() => handleNavigationClick(item.name, item.content)}
                                            style={{ color: 'white' }}
                                        />
                                    ))}
                                </HStack>
                            </NavigationGroup>
                        </NavigationMenu>
                    </Navigation>
                </HStack>
                <HStack alignment="right">
                    <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="white" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 19v-9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v9M6 19h12M6 19H4m14 0h2m-9 3h2"/><circle cx="12" cy="3" r="1"/></g></svg>} size={25} ></Icon>
                    <Icon fill="white" icon={commentAuthorAvatar} size={35}></Icon>
                </HStack>
            </CardHeader>
            <CardBody><Heading>{activeItem}</Heading></CardBody>
            <CardBody isShady>
                <Card
                    variant="grid"
                    style={{
                        minWidth: '100px',
                        height: '250px'
                    }}>
                    <CardBody>{cardBodyContent}</CardBody>
                </Card>
            </CardBody>
        </Card>
    );
}

export default Shell3;