/**
 * Internal dependencies.
 */
import { Footer, Header } from './components';
import { WpuiProvider } from './data';
import Component_page from './pages/component_page';
import ScrollToTop from './pages/scrolltotop';


/**
 * Render App
 */
function App() {
    return (
        <WpuiProvider>
            <ScrollToTop>
                <div className='wpui_container'>
                    <Header />
                    <Component_page />
                    <Footer />
                </div>
            </ScrollToTop>
        </WpuiProvider>
    );
};

export default App;