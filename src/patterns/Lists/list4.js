/**
 * WordPress dependencies.
 */
import {
    CardDivider,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
    __experimentalSurface as Surface,
} from "@wordpress/components";

/**
 * Render Stacked List View
 */
function List4() {

    const users = [
        {
            name: 'Rahul Sharma',
            email: 'rahulsharma@gmail.com',
            role: 'Administrator',
            status: 'last seen 3h ago',
            avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar3.png'
        },
        {
            name: 'Lalit Rana',
            email: 'lalitrana@gmail.com',
            role: 'Contributor',
            status: 'last seen 2d ago',
            avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar4.png'
        },
        {
            name: 'Anna Morgan',
            email: 'annamorgan@gmail.com',
            role: 'Author',
            status: 'Online',
            avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar5.png'
        },
        {
            name: 'Neha Jain',
            email: 'nehajain@gmail.com',
            role: 'Editor',
            status: 'last seen 1m ago',
            avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar6.png'
        }
    ];

    const truncate = {
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    }

    return (
        <>
            <HStack alignment="center">
                <VStack className="wpui_user_list" spacing={4}>
                    {users.map((user, index) => (
                        <>
                            <HStack key={index} spacing={10}>
                                <HStack spacing={3} alignment="left" expanded={false}>
                                    <Surface as={'img'} src={user.avatar} style={{ borderRadius: '100%', maxWidth: "45px" }} />
                                    <VStack spacing={2} style={{ width: '40rem' }}>
                                        <Heading
                                            size={14}
                                            weight={500}
                                            style={truncate}
                                        >{user.name}</Heading>
                                        <Text
                                            size={12}
                                            variant="muted"
                                            lineHeight={1.6}
                                            style={truncate}
                                        >
                                            {user.email}</Text>
                                    </VStack>
                                </HStack>
                                <VStack style={{ minWidth: 'fit-content' }} alignment="right">
                                    <Text weight={500} size={15}>{user.role}</Text>
                                    <Text size={12} variant="muted">{user.status}</Text>
                                </VStack>
                            </HStack>
                            <CardDivider margin={2} />
                        </>
                    ))}
                </VStack>
            </HStack>
            <style>
                {`
                    .wpui_user_list hr:last-child{
                        display: none;
                    }
            `}
            </style>
        </>
    )
};

// @meta-start
List4.meta = {
    title: 'List 4',
    path: '/Lists/list4',
};
// @meta-end

export default List4;