/**
 * WordPress dependencies.
 */
import { 
    comment, 
    postAuthor, 
    trash 
} from "@wordpress/icons";
import {
    Icon,
    Card,
    CardBody,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalTreeGrid as TreeGrid,
    __experimentalTreeGridRow as TreeGridRow,
    __experimentalSurface as Surface,
} from "@wordpress/components";

/**
 * Render Feeds
 */
function Feed2() {

    return (
        <>
            <HStack className="wpui_post_timeline" justify="center">
                <TreeGrid>
                    <TreeGridRow>
                        <HStack className="timeline_item" alignment="start">
                            <Surface as={'span'}></Surface>
                            <Surface className="timeline_icon">
                                <Icon size={25} icon={postAuthor}></Icon>
                            </Surface>
                            <HStack className="timeline_update">
                                <Card size="medium" style={{ borderRadius: '4px', width: '100%' }}>
                                    <CardBody>
                                        <HStack spacing={4} direction={['column-reverse', 'row']} alignment="start" justify="space-between">
                                            <VStack>
                                                <Text size={14}>Teresa created a post <Text weight={600}>"Tips for Effective Time Management"</Text></Text>
                                            </VStack>
                                            <Text className="timeline_date" variant="muted">just now</Text>
                                        </HStack>
                                    </CardBody>
                                </Card>
                            </HStack>
                        </HStack>
                    </TreeGridRow>
                    <TreeGridRow>
                        <HStack className="timeline_item" alignment="start">
                            <Surface as={'span'}></Surface>
                            <Surface className="timeline_icon">
                                <Icon size={25} icon={comment}></Icon>
                            </Surface>
                            <HStack className="timeline_update">
                                <Card size="medium" style={{ borderRadius: '4px', width: '100%' }}>
                                    <CardBody>
                                        <VStack spacing={5}>
                                            <HStack spacing={4} direction={['column-reverse', 'row']} alignment="start" justify="space-between">
                                                <Text size={14}>Rick M. Walters commented on <Text weight={600}>"Tips for Effective Time Management"</Text></Text>
                                                <Text className="timeline_date" variant="muted">3 hours ago</Text>
                                            </HStack>
                                            <Card size="small" style={{ borderRadius: '4px' }}>
                                                <CardBody>
                                                    <Text size={12}>"Very helpful tips! I struggle with time management, so this is timely advice."</Text>
                                                </CardBody>
                                            </Card>
                                        </VStack>
                                    </CardBody>
                                </Card>
                            </HStack>
                        </HStack>
                    </TreeGridRow>
                    <TreeGridRow>
                        <HStack className="timeline_item" alignment="start">
                            <Surface as={'span'}></Surface>
                            <Surface className="timeline_icon">
                                <Icon size={25} icon={comment}></Icon>
                            </Surface>
                            <HStack spacing={10} className="timeline_update">
                                <Card size="medium" style={{ borderRadius: '4px', width: '100%' }}>
                                    <CardBody>
                                        <VStack spacing={5}>
                                            <HStack spacing={4} direction={['column-reverse', 'row']} alignment="start" justify="space-between">
                                                <Text size={14}>Christopher J. Lockhart commented on <Text weight={600}>"Our Recent Achievements and Milestones"</Text></Text>
                                                <Text className="timeline_date" variant="muted">4 mins ago</Text>
                                            </HStack>
                                            <Card size="small" style={{ borderRadius: '4px' }}>
                                                <CardBody>
                                                    <Text size={12}>"Impressive! How can we be a part of your success story?"</Text>
                                                </CardBody>
                                            </Card>
                                        </VStack>
                                    </CardBody>
                                </Card>
                            </HStack>
                        </HStack>
                    </TreeGridRow>
                    <TreeGridRow>
                        <HStack className="timeline_item" alignment="start">
                            <Surface as={'span'}></Surface>
                            <Surface className="timeline_icon">
                                <Icon size={25} icon={trash}></Icon>
                            </Surface>
                            <HStack spacing={10} className="timeline_update">
                                <Card size="medium" style={{ borderRadius: '4px', width: '100%' }}>
                                    <CardBody>
                                        <HStack spacing={4} direction={['column-reverse', 'row']} alignment="start" justify="space-between">
                                            <VStack>
                                                <Text size={14}>Marjory S. Dames deleted a post <Text weight={600}>"Exploring New Markets: Expansion Plans"</Text></Text>
                                            </VStack>
                                            <Text className="timeline_date" variant="muted">2 mins ago</Text>
                                        </HStack>
                                    </CardBody>
                                </Card>
                            </HStack>
                        </HStack>
                    </TreeGridRow>
                    <TreeGridRow>
                        <HStack alignment="start">
                            <Surface style={{ minWidth: 'auto' }}>
                                <Icon size={25} icon={comment}></Icon>
                            </Surface>
                            <HStack spacing={10} className="timeline_update">
                                <Card size="medium" style={{ borderRadius: '4px', width: '100%' }}>
                                    <CardBody>
                                        <VStack spacing={5}>
                                            <HStack spacing={4} direction={['column-reverse', 'row']} alignment="start" justify="space-between">
                                                <Text size={14}>Allene D. Peters commented on <Text weight={600}>"Our Recent Achievements and Milestones"</Text></Text>
                                                <Text className="timeline_date" variant="muted">4 mins ago</Text>
                                            </HStack>
                                            <Card size="small" style={{ borderRadius: '4px' }}>
                                                <CardBody>
                                                    <Text size={12}>"Heartiest congratulations on your recent achievements and milestones! It's truly inspiring to witness the fruits of your hard work and dedication. "</Text>
                                                </CardBody>
                                            </Card>
                                        </VStack>
                                    </CardBody>
                                </Card>
                            </HStack>
                        </HStack>
                    </TreeGridRow>
                </TreeGrid>
            </HStack>
            <style>
                {`
                    .wpui_post_timeline .timeline_icon{
                        min-width: auto;
                        position: relative;
                        z-index: 1;
                    }
                    .wpui_post_timeline .timeline_item{
                        position: relative;
                        padding-bottom: 40px;
                    }
                    .wpui_post_timeline .timeline_item > span{
                        position: absolute;
                        width: 2px;
                        height: 100%;
                        left: 1.6rem;
                        top: 0;
                        background-color: #E4E7EB;
                    }
                    .wpui_post_timeline .components-surface svg{
                        border-radius: 100% ;
                        background: #f8f8f8 ;
                        padding: 15px
                    }
                    .wpui_post_timeline .timeline_date{
                        min-width: fit-content;
                    }
                    .wpui_post_timeline .timeline_update{
                        align-self: center;
                    }
                `}
            </style>
        </>
    );
};

// @meta-start
Feed2.meta = {
    title: 'Feed 2',
    name:'Feed2',
    category:'Feed',
    path: '/Feed/feed2',
};
// @meta-end


export default Feed2;