/**
 * Internal Dependencies
 */
import * as Components from '../components';

/**
 * Component Mapping
 */
const components = [
    {
        title: 'Page Heading',
        routepath:'/pageheading',
        path: '/pageheading/heading1',
        src: '/pageheading.png',
        variations: Components.PageHeading,
    },
    {
        title: 'Card Heading',
        routepath:'/cardheading',
        path: '/cardheading/cardheading1',
        src: '/cardheading.png',
        variations: Components.CardHeadings,
    },
    {
        title: 'Breadcrumbs',
        routepath:'/breadcrumbs',
        path: '/breadcrumbs/breadcrumb1',
        src: '/breadcrumb.png',
        variations: Components.Breadcrumb,
    },
    {
        title: 'Empty State',
        routepath:'/emptstate',
        path: '/emptstate/emptystate1',
        src: '/emptystate.png',
        variations: Components.EmptyState,
    },
    {
        title: 'Action Panels',
        routepath:'/actionpanels',
        path: '/actionpanels/panel1',
        src: '/actionpanel.png',
        variations: Components.ActionPanels,
    },
    {
        title: 'Feeds',
        routepath:'/feed',
        path: '/feed/feed1',
        src: '/feed.png',
        variations: Components.Feeds,
    },
    {
        title: 'Forms',
        routepath:'/form',
        path: '/form/form',
        src: '/form.png',
        variations: Components.Forms,
    },
    {
        title: 'Sign-in and Registration',
        routepath:'/signin',
        path: '/signin/signIn1',
        src: '/signin.png',
        variations: Components.SignIn,
    },
    {
        title: 'Stats',
        routepath:'/stats',
        path: '/stats/stats1',
        src: '/stats.png',
        variations: Components.Stats,
    },
    {
        title: 'Grid Lists',
        routepath:'/gridlists',
        path: '/gridlists/grid1',
        src: '/cards.png',
        variations: Components.GridLists,
    },
    {
        title: 'Lists',
        routepath:'/lists',
        path: '/lists/list1',
        src: '/list.png',
        variations: Components.Lists,
    },
    {
        title: 'Tables',
        routepath:'/tables',
        path: '/tables/table1',
        src: '/table.png',
        variations: Components.Tables,
    },
    {
        title: 'Navigations',
        routepath:'/navigations',
        path: '/navigations/navigate1',
        src: '/navigation.png',
        variations: Components.Navigations,
    },
];

export default components;