import {
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    __experimentalNavigation as Navigation,
    __experimentalNavigationMenu as NavigationMenu,
    __experimentalNavigationItem as NavigationItem,
} from "@wordpress/components";

import Header from "./Tailwind/header";
import Navigate from "./Tailwind/navigation";
import Cards from "./Tailwind/card";
import Charts from "./Tailwind/chart";
import Dashboard from "./Tailwind/dashboard";
import Form from "./Tailwind/form";
import NewProject from "./Tailwind/new-project";
import SelectBox from "./Tailwind/selectbox";
import SignUp from "./Tailwind/signup";
import Subscription from "./Tailwind/subscription";
import MyTabPanel from "./Tailwind/tabs";
import TaskUpdate from "./Tailwind/tasks-update";
import Users from "./Tailwind/users";
import View from "./Tailwind/view";
import HeroSection from "./Tatva/herosection";
import ImageCard from "./Tatva/imagecard";
import Updates from "./Tatva/updates";
import Questions from "./Tatva/questions";

export default function App() {
    return (
        <Navigation className="navigation-story">
            <NavigationMenu title="Components">
                <NavigationItem
                    navigateToMenu="header"
                    title="Edit Title"
                />
                <NavigationItem
                    navigateToMenu="navigation"
                    title="Page Navigation"
                />
                <NavigationItem
                    navigateToMenu="signup"
                    title="Sign In"
                />
                <NavigationItem
                    navigateToMenu="subscription"
                    title="Subscription"
                />
                <NavigationItem
                    navigateToMenu="new-project"
                    title="Add Project"
                />
                <NavigationItem
                    navigateToMenu="selectbox"
                    title="Select Option"
                />
                <NavigationItem
                    navigateToMenu="chart"
                    title="Charts"
                />
                <NavigationItem
                    navigateToMenu="tabs"
                    title="Custom Tabs"
                />
                <NavigationItem
                    navigateToMenu="dashboard"
                    title="DashBoard"
                />
                <NavigationItem
                    navigateToMenu="view"
                    title="View Tasks"
                />
                <NavigationItem
                    navigateToMenu="form"
                    title="Forms"
                />
                <NavigationItem
                    navigateToMenu="card"
                    title="Invoice Cards"
                />
                <NavigationItem
                    navigateToMenu="users"
                    title="Users Profiles"
                />
                <NavigationItem
                    navigateToMenu="tasks-update"
                    title="Tasks Updates"
                />
                <NavigationItem
                    navigateToMenu="herosection"
                    title="Hero Section"
                />
                <NavigationItem
                    navigateToMenu="imagecard"
                    title="Image Card"
                />
                <NavigationItem
                    navigateToMenu="updates"
                    title="News and Updates"
                />
                <NavigationItem
                    navigateToMenu="questions"
                    title="Asked Questions"
                />
            </NavigationMenu>
            <NavigationMenu
                menu="header"
                parentMenu="root"
            >
                <NavigationItem>
                    <Header />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="navigation"
                parentMenu="root"
            >
                <NavigationItem>
                    <Navigate />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="signup"
                parentMenu="root"
            >
                <NavigationItem>
                    <SignUp />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="subscription"
                parentMenu="root"
            >
                <NavigationItem>
                    <Subscription />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="new-project"
                parentMenu="root"
            >
                <NavigationItem>
                    <NewProject />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="selectbox"
                parentMenu="root"
            >
                <NavigationItem>
                    <SelectBox />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="chart"
                parentMenu="root"
            >
                <NavigationItem>
                    <Charts />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="tabs"
                parentMenu="root"
            >
                <NavigationItem>
                    <MyTabPanel />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="dashboard"
                parentMenu="root"
            >
                <NavigationItem>
                    <Dashboard />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="view"
                parentMenu="root"
            >
                <NavigationItem>
                    <View />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="form"
                parentMenu="root"
            >
                <NavigationItem>
                    <Form />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="card"
                parentMenu="root"
            >
                <NavigationItem>
                    <Cards />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="users"
                parentMenu="root"
            >
                <NavigationItem>
                    <Users />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="tasks-update"
                parentMenu="root"
            >
                <NavigationItem>
                    <TaskUpdate />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="herosection"
                parentMenu="root"
            >
                <NavigationItem>
                    <HeroSection />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="imagecard"
                parentMenu="root"
            >
                <NavigationItem>
                    <ImageCard />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="updates"
                parentMenu="root"
            >
                <NavigationItem>
                    <Updates />
                </NavigationItem>
            </NavigationMenu>
            <NavigationMenu
                menu="questions"
                parentMenu="root"
            >
                <NavigationItem>
                    <Questions />
                </NavigationItem>
            </NavigationMenu>
        </Navigation>

    );
}