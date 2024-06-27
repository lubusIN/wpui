/**
 * WordPress dependencies.
 */
import {
    __experimentalGrid as Grid,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Internal dependencies.
 */
import { Banner, CategoryCard } from "@wpui/components";
import * as categories from '@wpui/categories';

/**
 * Render Component Menu
 */
function Home() {

    return (
        <>
            <Banner />
            <VStack className="wpui-lcont" spacing={5}>
                <Heading>UI Patterns</Heading>
                <Grid
                    className="wpui-column"
                    alignment="bottom"
                    columns={3}
                    columnGap={30}
                    rowGap={25}
                >
                    {
                        Object.values(categories).map((category, index) => {
                            const {title, path, patterns} = category.meta;
                            return (
                                <CategoryCard
                                    key={`${index}-${path}`}
                                    thumbnail={category}
                                    title={title}
                                    path={path}
                                    patterns={patterns}
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