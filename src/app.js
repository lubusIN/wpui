/**
 * Internal dependencies.
 */
import { Footer, Header, NewsLetter } from './cards';
import { WpuiProvider } from './data';
import Navigator from './navigator';

/**
 * Render App
 */
function App() {
    return (
        <WpuiProvider>
            <Header />
            <Navigator />
            <NewsLetter />
            <Footer />
        </WpuiProvider>
    );
};

export default App;