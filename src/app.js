/**
 * Internal dependencies.
 */
import { Footer, Header } from './components';
import { WpuiProvider } from './data';
import Patterns from './pages/patterns';
import ScrollToTop from './pages/scroll-to-top';


/**
 * Render App
 */
function App() {
    return (
        <WpuiProvider>
            <ScrollToTop>
                <div className='wpui_container'>
                    <Header />
                    <Patterns />
                    <Footer />
                </div>
            </ScrollToTop>
        </WpuiProvider>
    );
};

export default App;