/**
 * Internal dependencies.
 */
import { WpuiProvider } from './data';
import { Patterns } from './pages';
import { Footer, Header, ScrollToTop } from './components';

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