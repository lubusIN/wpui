/**
 * External dependencies.
 */
import { BrowserRouter } from "react-router-dom";

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
            <BrowserRouter>
                <Header />
                <Navigator/>
                <Footer />
            </BrowserRouter>
        </WpuiProvider>
    );
};

export default App;