/**
 * Internal dependencies.
 */
import { Footer, Header } from './cards';
import { WpuiProvider } from './data';
import Navigator from './navigator';
import { BrowserRouter, Routes, Route, router, Link } from "react-router-dom";

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