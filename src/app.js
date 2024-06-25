/**
 * External dependencies.
 */
import { Routes, Route } from "react-router-dom";

/**
 * Internal dependencies.
 */
import { WpuiProvider } from '@wpui/data';
import * as categories from '@wpui/categories';
import { Home, Patterns, GettingStarted } from '@wpui/pages'
import { Footer, Header, ScrollToTop } from '@wpui/components';

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
                            const { title, path, patterns } = category.meta;
                            return (
                                <Route key={index} title={title} path={path} element={<Patterns patterns={patterns} />} />
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