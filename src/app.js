/**
 * Internal dependencies.
 */
import { Footer, Header,ScrollToTop } from './components';
import { WpuiProvider } from './data';
import Patterns from './pages/patterns';

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