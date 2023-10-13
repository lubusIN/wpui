/**
 * WordPress dependencies.
 */
import {
    Card,
    __experimentalGrid as Grid,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalNavigatorButton as NavigatorButton,
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import components from "./data";
import { Banner } from "./cards";

/**
 * Render Component Menu
 */
function ComponentsMenu({setActivePath }) {

    return (
        <>
            <Banner />

            <VStack className="wpui_lcont" spacing={5}>
                <HStack>
                    <Heading>Latest Components</Heading>
                    <Text>See all</Text>
                </HStack>
                <Grid
                    className="wpui_cl"
                    alignment="bottom"
                    columns={3}
                    columnGap={30}
                    rowGap={25}
                >
                    {
                        components.map((component, index) =>
                            <NavigatorButton key={index} path={component.path} onClick={() => setActivePath(component.path)} >
                                <VStack style={{ width: '100%' }}>
                                    <Card className="wpui_preview" size="large" variant="secondary"></Card>
                                    <Heading
                                        adjustLineHeightForInnerControls={'small'}
                                        align="left"
                                        level={4}
                                        weight={500}
                                    >
                                        {component.title}
                                    </Heading>
                                </VStack>
                            </NavigatorButton>
                        )
                    }
                </Grid>
            </VStack>
        </>
    );
};

export default ComponentsMenu;