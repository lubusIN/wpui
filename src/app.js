/**
 * External dependencies.
 */
import { Routes, Route } from "react-router-dom";

/**
 * Internal dependencies.
 */
import { WpuiProvider } from './data';
import * as categories from './categories';
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
                        {Object.values(categories).map((category, index) => {
                            const { title, path, pattern } = category.meta;
                            return (
                                <Route key={index} title={title} path={path} element={<Patterns patterns={pattern} />} />
                            )
                        })}
                    </Routes >

                    <Footer />
                </div>
            </ScrollToTop>
        </WpuiProvider>
    );
};

export default App;