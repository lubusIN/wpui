/**
 * WordPress dependencies.
 */
import { __experimentalNavigatorProvider as NavigatorProvider } from "@wordpress/components";

/**
 * Internal dependencies.
 */
import { Footer, Header } from './cards';
import { WpuiProvider } from './data';
import Navigator from './navigator';

/**
 * Render App
 */
function App() {
    return (
        <WpuiProvider>
            <NavigatorProvider className="wpui_navigator" initialPath="/">
                <Header />
                <Navigator />
                <Footer />
            </NavigatorProvider>
        </WpuiProvider>
    );
};

export default App;