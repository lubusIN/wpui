/**
 * External dependencies.
 */
import { Routes, Route } from "react-router-dom";

/**
 * Internal dependencies.
 */
import { components, WpuiProvider } from './data';
import { Home, Patterns, GettingStarted } from './pages'
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

                    <Routes>
                        <Route path="/" element={<Home />} style={{ overflowX: 'visible' }} />
                        <Route path="/getting-started" element={<GettingStarted />} style={{ overflowX: 'visible' }} />
                        {/* Render pattern category routes */}
                        {components.map(({ title, path, variations }, index) => (
                            <Route key={index} title={title} path={path} element={<Patterns patterns={variations} />} />
                        ))}
                    </Routes >

                    <Footer />
                </div>
            </ScrollToTop>
        </WpuiProvider>
    );
};

export default App;