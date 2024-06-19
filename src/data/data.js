/**
 * Internal Dependencies
 */
import * as Components from '../patterns';

/**
 * Component Mapping
 */
const components = [
    {
        title: 'Page Heading',
        path:'/pageheading',
        src: '/pageheading.png',
        variations: Components.PageHeading,
    },
    {
        title: 'Card Heading',
        path:'/cardheading',
        src: '/cardheading.png',
        variations: Components.CardHeadings,
    },
    {
        title: 'Breadcrumbs',
        path:'/breadcrumbs',
        src: '/breadcrumb.png',
        variations: Components.Breadcrumb,
    },
    {
        title: 'Empty State',
        path:'/emptstate',
        src: '/emptystate.png',
        variations: Components.EmptyState,
    },
    {
        title: 'Action Panels',
        path:'/actionpanels',
        src: '/actionpanel.png',
        variations: Components.ActionPanels,
    },
    {
        title: 'Feeds',
        path:'/feed',
        src: '/feed.png',
        variations: Components.Feeds,
    },
    {
        title: 'Forms',
        path:'/form',
        src: '/form.png',
        variations: Components.Forms,
    },
    {
        title: 'Sign-in and Registration',
        path:'/signin',
        src: '/signin.png',
        variations: Components.SignIn,
    },
    {
        title: 'Stats',
        path:'/stats',
        src: '/stats.png',
        variations: Components.Stats,
    },
    {
        title: 'Grid Lists',
        path:'/gridlists',
        src: '/cards.png',
        variations: Components.GridLists,
    },
    {
        title: 'Lists',
        path:'/lists',
        src: '/list.png',
        variations: Components.Lists,
    },
    {
        title: 'Tables',
        path:'/tables',
        src: '/table.png',
        variations: Components.Tables,
    },
    {
        title: 'Navigations',
        path:'/navigations',
        src: '/navigation.png',
        variations: Components.Navigations,
    },
    {
        title: 'actionpanel2',
        path:'/actionpanel2',
        variations: Components.Actionpanel2,
    },
];

export default components;