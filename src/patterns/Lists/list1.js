/**
 * WordPress dependencies.
 */
import { edit, moreVertical, trash } from "@wordpress/icons";
import {
    Icon,
    Button,
    CardDivider,
    DropdownMenu,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Render Stacked List View
 */
function List1() {

    const controls = [
        {
            icon: <Icon icon={edit}></Icon>,
            onClick: function noRefCheck() { },
            title: 'Edit Post'
        },
        {
            icon: <Icon icon={trash}></Icon>,
            onClick: function noRefCheck() { },
            title: 'Delete Post'
        },

    ];

    const status = {
        'published': { color: '#166434', backgroundColor: '#EFFDF4', borderRadius: '5px', padding: '5px', minWidth: 'auto' },
        'pending': { color: '#4B5563', backgroundColor: '#F9FAFB', borderRadius: '5px', padding: '5px', minWidth: 'auto' },
        'draft': { color: '#A16207', backgroundColor: '#FEFCE8', borderRadius: '5px', padding: '5px', minWidth: 'auto' }
    };

    const posts = [
        {
            title: '10 Tips for Effective Content Marketing',
            status: 'published',
            date: 'Published on October 10, 2023',
        },
        {
            title: 'How to Optimize Your WordPress Website for SEO',
            status: 'published',
            date: 'Published on August 15, 2023',
        },
        {
            title: 'The Future of Web Development Trends',
            status: 'pending',
            date: 'Submitted for Review on November 5, 2023',
        },
        {
            title: 'Top 5 E-Commerce Plugins for WordPress',
            status: 'draft',
            date: 'Draft Last Saved on November 1, 2023',
        }
    ];

    return (
        <>
            <VStack className="wpui_post_list">
                {posts.map((post, index) => (
                    <>
                        <HStack key={index} className="wpui_list_item">
                            <HStack justify="space-between" direction={['column', 'row']}>
                                <VStack>
                                    <HStack alignment="left">
                                        <Heading level={4}>{post.title}</Heading>
                                        <Text
                                            color={status[post.status].color}
                                            weight={600}
                                            style={status[post.status]}
                                        >
                                            {post.status}
                                        </Text>
                                    </HStack>
                                    <Text>{post.date}</Text>
                                </VStack>
                                <Button variant="secondary">View Post</Button>
                            </HStack>
                            <DropdownMenu
                                controls={controls}
                                icon={moreVertical}
                                onToggle={function noRefCheck() { }}
                            />
                        </HStack>

                        <CardDivider margin={5}></CardDivider>
                    </>
                ))}
            </VStack>
            <style>
                {`
                    @media only screen and (max-width: 640px){
                        .wpui_list_item > .components-h-stack{
                            align-items: start;
                        }
                    }
                    .wpui_post_list hr:last-child{
                        display: none;
                    }
            `}
            </style>
        </>
    );
};

export default List1;