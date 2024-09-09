/**
 * WordPress dependencies.
 */
import {
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalGrid as Grid,
    __experimentalText as Text,
    __experimentalSurface as Surface,
} from "@wordpress/components";

/**
 * Render Image card.
 */
function GridList2() {
    const data = [
        {
            title: 'The Icon Block',
            description: 'The Icon Block plugin registers a single, easy-to-use block that allows you to add custom SVG icons and graphics to the WordPress block editor (Gutenberg). The plugin also includes the complete WordPress icon library with 290+ SVG icons.',
            image: 'https://ps.w.org/icon-block/assets/screenshot-3.png?rev=3122589'
        },
        {
            title: 'Advanced Query Loop',
            description: 'This plugin introduces a Query Loop block variation that will empower users to be able to do much more complicated queries with the Query Loop block, such number of posts to display and post meta',
            image: 'https://ps.w.org/advanced-query-loop/assets/screenshot-3.png?rev=2836874'
        },
        {
            title: 'Block Visibility',
            description: 'With this no-code solution, control which blocks are visible on your website and who can see them. Schedule content to show or hide at a specific time.',
            image: 'https://ps.w.org/block-visibility/assets/screenshot-1.png?rev=3122657'
        },
        {
            title: 'Playground Block',
            description: 'This WordPress block embeds WordPress Playground in your posts and pages. You can also include an interactive code editor to demonstrate and teach your readers how WordPress plugins are built.',
            image: 'https://ps.w.org/interactive-code-block/assets/icon-256x256.png?rev=2928574'
        },
    ]
    return (
        <Grid columns={[1, 2, 4]} gap={8} alignment="top">
            {data.map((item, index) => (
                <VStack key={index} spacing={3}>
                    <Surface 
                        as={'img'} 
                        src={item.image} 
                        style={{ objectFit: 'cover', height: '150px', borderRadius: '4px' }} 
                        borderBottom borderLeft borderRight borderTop />
                    <Heading level={4}>{item.title}</Heading>
                    
                    <Text size={14} lineHeight={1.6} variant="muted">{item.description}</Text>
                </VStack>
            ))
            }
        </Grid >
    );
};

// @meta-start
GridList2.meta = {
    title: 'GridList 2',
    name: 'GridList2',
    category: 'GridLists',
    path: '/GridLists/gridlist2',
};
// @meta-end


export default GridList2;