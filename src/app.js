/**
 * Internal dependencies.
 */
import { Footer, Header } from './cards';
import { WpuiProvider } from './data';
import Component_page from './component_page';
import ScrollToTop from './scrolltotop';


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