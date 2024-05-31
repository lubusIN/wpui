/**
 * WordPress dependencies.
 */
import {
    Card,
    __experimentalGrid as Grid,
    __experimentalVStack as VStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import { components } from "./data";
import { Banner } from "./cards";
import { BrowserRouter , Routes, Route, router , Link } from "react-router-dom";

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
                            
                                <VStack style={{ width: '100%' }}>
                                    <Link to={component.routepath}>
                                    <Card className="wpui_preview" size="large" isBorderless>
                                        <img src={'/src/img' + component.src} />
                                    </Card>
                                    </Link>
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
                        ))}
                </Grid>
            </VStack>
        </>
    );
};

export default ComponentsMenu;