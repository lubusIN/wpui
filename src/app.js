import {
    __experimentalNavigatorScreen as NavigatorScreen,
    __experimentalNavigatorProvider as NavigatorProvider,
    __experimentalNavigatorBackButton as NavigatorBackButton,
} from "@wordpress/components";

import { chevronLeft } from "@wordpress/icons";

import components from './data';
import ComponentsMenu from "./menu";

export default function App() {
    return (
        <NavigatorProvider initialPath="/" style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <NavigatorScreen path="/">
                <ComponentsMenu />
            </NavigatorScreen>

            {
                components.map(({ path, component }, index) =>
                    <NavigatorScreen 
                        path={path} 
                        key={index} 
                        style={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'column'

                        }}>
                        <NavigatorBackButton
                            icon={chevronLeft}
                            style={{ 
                                boxShadow: 'none',  
                                alignSelf: 'flex-start'
                                }}>
                            Go back
                        </NavigatorBackButton>
                        {component()}
                    </NavigatorScreen>
                )
            }
        </NavigatorProvider>
    );
}