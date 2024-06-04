/**
 * Internal dependencies.
 */
import { Footer, Header } from './cards';
import { WpuiProvider } from './data';
import Navigator from './navigator';
import ScrollToTop from './scrolltitop';


/**
 * Render App
 */
function App() {
    return (
        <WpuiProvider>
            <div className='wpui_container'>
                <ScrollToTop/>
            <Header/>
                <Navigator />
                <Footer />
            </div>
        </WpuiProvider>
    );
};

export default App;