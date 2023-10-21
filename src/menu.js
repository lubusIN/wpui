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
import { components } from "./data";
import { Banner } from "./cards";

/**
 * Render Component Menu
 */
function ComponentsMenu() {

    return (
        <>
            <Banner />
            <VStack className="wpui_lcont" spacing={5}>
                <Heading>UI Patterns</Heading>
                <Grid
                    className="wpui_cl"
                    alignment="bottom"
                    columns={3}
                    columnGap={30}
                    rowGap={25}
                >
                    {
                        components.map((component, index) => (
                            <NavigatorButton
                                key={index}
                                path={component.path}
                                variant="tertiary"
                            >
                                <VStack style={{ width: '100%' }}>
                                    <Card className="wpui_preview" size="large" isBorderless>
                                        <img src={'/src/img' + component.src} />
                                    </Card>
                                    <VStack spacing={0}>
                                        <Heading
                                            adjustLineHeightForInnerControls={'small'}
                                            align="left"
                                            level={4}
                                            weight={500}
                                        >
                                            {component.title}
                                        </Heading>
                                        <Text align="left" size={13} weight={400} color="grey">
                                            {component.variations.length} components
                                        </Text>
                                    </VStack>
                                </VStack>
                            </NavigatorButton>
                        ))}
                </Grid>
            </VStack>
        </>
    );
};

export default ComponentsMenu;