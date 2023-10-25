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
        path: '/pageheading/heading1',
        src: '/pageheading.png',
        variations: Components.PageHeading,
    },
    {
        title: 'Card Heading',
        path: '/cardheading/cardheading1',
        src: '/cardheading.png',
        variations: Components.CardHeadings,
    },
    {
        title: 'Breadcrumbs',
        path: '/breadcrumbs/breadcrumb1',
        src: '/breadcrumb.png',
        variations: Components.Breadcrumb,
    },
    {
        title: 'Empty State',
        path: '/emptstate/emptystate1',
        src: '/emptystate.png',
        variations: Components.EmptyState,
    },
    {
        title: 'FAQS',
        path: '/faq/faq1',
        src: '/faqs.png',
        variations: Components.Faqs,
    },
    {
        title: 'Action Panels',
        path: '/actionpanels/panel1',
        src: '/actionpanel.png',
        variations: Components.ActionPanels,
    },
    {
        title: 'Feeds',
        path: '/feed/feed1',
        src: '/feed.png',
        variations: Components.Feeds,
    },
    {
        title: 'Forms',
        path: '/form/form',
        src: '/form.png',
        variations: Components.Forms,
    },
    {
        title: 'Hero Section',
        path: '/herosection/section1',
        src: '/herosection.png',
        variations: Components.HeroSection,
    },
    {
        title: 'Sign-in and Registration',
        path: '/signin/signIn1',
        src: '/signin.png',
        variations: Components.SignIn,
    },
    {
        title: 'Stats',
        path: '/stats/stats1',
        src: '/stats.png',
        variations: Components.Stats,
    },
    {
        title: 'Grid Lists',
        path: '/gridlists/grid1',
        src: '/cards.png',
        variations: Components.GridLists,
    },
    {
        title: 'Lists',
        path: '/lists/list1',
        src: '/list.png',
        variations: Components.Lists,
    },
    {
        title: 'Tables',
        path: '/tables/table1',
        src: '/table.png',
        variations: Components.Tables,
    },
    {
        title: 'Sidebar Navigation',
        path: '/sidebarnavigation/sidebar1',
        src: '/sidebarnavigation.png',
        variations: Components.SidebarNavigation,
    },
    // {
    //     title: 'Modals',
    //     path: '/modals/modal1',
    //     src: '/modal.png',
    //     variations: Components.Modals,
    // },
    {
        title: 'Navigations',
        path: '/navigations/navigate1',
        src: '/navigation.png',
        variations: Components.Navigations,
    },
    {
        title: 'Plugin Shell',
        path: '/pluginshell/shell1',
        src: '',
        variations: Components.PluginShell,
    }
];

export default components;