import {
    CardDivider,
    ExternalLink,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    __experimentalText as Text,
    __experimentalNavigatorScreen as NavigatorScreen,
    __experimentalNavigatorProvider as NavigatorProvider,
    __experimentalNavigatorBackButton as NavigatorBackButton,
} from "@wordpress/components";

import { chevronLeft } from "@wordpress/icons";

import components from './data';
import ComponentsMenu from "./menu";

export default function App() {
    return (
        <VStack>
            <HStack justify="space-around" direction={['column', 'row']}>
                <Heading>WPUI Components</Heading>
                <ExternalLink href="#">join us</ExternalLink>
            </HStack>

            <CardDivider margin={2}></CardDivider>

            <NavigatorProvider initialPath="/" style={{
                height: '100vh',
                width: '100vw',
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

            <CardDivider margin={2}></CardDivider>

            <VStack alignment="center" spacing={5}>
                <Heading>WPUI Components</Heading>
                <Text size={20} style={{ width: '650px' }} align="center">
                    WPUI is a #BuildInPublic project from the house of LUBUS. We love getting
                    feedback from you! It really helps us know how we're doing, what you're
                    interested in, and what you'd like to see next. So please, don't hesitate to shareyour thoughts with us! We're all ears.
                </Text>
                <HStack alignment="center" direction={['column', 'row']}>
                    <ExternalLink href="#">Join us on Github</ExternalLink>
                    <ExternalLink href="#">Send us a message</ExternalLink>
                </HStack>
            </VStack>

            <CardDivider margin={4}></CardDivider>

            <HStack justify="space-around" direction={['column', 'row']}>
                <Text>@ 2023 WPUI. All Rights Reserved</Text>
                <Text>Made in India</Text>
            </HStack>

        </VStack>
    );
}