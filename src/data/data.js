/**
 * Internal Dependencies
 */
import * as Components from '../patterns';
import {ActionPanels, BreadCrumbs,CardHeading,EmptyState,Feed,Form,GridList,Lists,Navigations,PageHeading,SignIn,Stats,Tables} from "../categories"

/**
 * Component Mapping
 */
const components = [
    {
        title: 'Page Heading',
        path:'/pageheading',
        src: <PageHeading/>,
        variations: Components.PageHeading,
    },
    {
        title: 'Card Heading',
        path:'/cardheading',
        src: <CardHeading/>,
        variations: Components.CardHeadings,
    },
    {
        title: 'Breadcrumbs',
        path:'/breadcrumbs',
        src: <BreadCrumbs/>,
        variations: Components.Breadcrumb,
    },
    {
        title: 'Empty State',
        path:'/emptstate',
        src: <EmptyState/>,
        variations: Components.EmptyState,
    },
    {
        title: 'Action Panels',
        path:'/actionpanels',
        src: <ActionPanels/>,
        variations: Components.ActionPanels,
    },
    {
        title: 'Feeds',
        path:'/feed',
        src: <Feed/>,
        variations: Components.Feeds,
    },
    {
        title: 'Forms',
        path:'/form',
        src: <Form/>,
        variations: Components.Forms,
    },
    {
        title: 'Sign-in and Registration',
        path:'/signin',
        src: <SignIn/>,
        variations: Components.SignIn,
    },
    {
        title: 'Stats',
        path:'/stats',
        src: <Stats/>,
        variations: Components.Stats,
    },
    {
        title: 'Grid Lists',
        path:'/gridlists',
        src: <GridList/>,
        variations: Components.GridLists,
    },
    {
        title: 'Lists',
        path:'/lists',
        src: <Lists/>,
        variations: Components.Lists,
    },
    {
        title: 'Tables',
        path:'/tables',
        src: <Tables/>,
        variations: Components.Tables,
    },
    {
        title: 'Navigations',
        path:'/navigations',
        src: <Navigations/>,
        variations: Components.Navigations,
    },
];

export default components;