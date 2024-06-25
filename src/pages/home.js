/**
 * WordPress dependencies.
 */
import {
    __experimentalGrid as Grid,
    __experimentalVStack as VStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import { Banner, CategoryCard } from "../components";
import * as categories from '../categories';

/**
 * Render Component Menu
 */
function Home() {

    return (
        <>
            <Banner />
            <VStack className="wpui_lcont" spacing={5}>
                <Heading>UI Patterns</Heading>
                <Grid
                    className="wpui_column"
                    alignment="bottom"
                    columns={3}
                    columnGap={30}
                    rowGap={25}
                >
                    {
                        Object.values(categories).map((category, index) => {
                            const {title, path, variations} = category.meta;
                            return (
                                <CategoryCard
                                    key={`${index}-${path}`}
                                    thumbnail={category}
                                    title={title}
                                    path={path}
                                    patterns={variations}
                                />
                            )
                        })
                    }
                </Grid>
            </VStack>
        </>
    );
};

export default Home;