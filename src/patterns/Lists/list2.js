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
function List2() {

    const users = [
        {
            name: 'Rahul Sharma',
            role: 'Administrator',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vel velit finibus tempor sit amet vitae ipsum. Morbi euismod malesuada sem id consequat.',
            avatar: 'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar3.png'
        },
        {
            name: 'Lalit Rana',
            role: 'Contributor',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vel velit finibus tempor sit amet vitae ipsum. Morbi euismod malesuada sem id consequat.',
            avatar: 'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar4.png'
        },
        {
            name: 'Anna Morgan',
            role: 'Author',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vel velit finibus tempor sit amet vitae ipsum. Morbi euismod malesuada sem id consequat.',
            avatar: 'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar5.png'
        },
        {
            name: 'Neha Jain',
            role: 'Editor',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vel velit finibus tempor sit amet vitae ipsum. Morbi euismod malesuada sem id consequat.',
            avatar: 'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar6.png'
        }
    ];

    const truncate = {
        maxWidth: '100%',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
    }

    return (
        <>
            <HStack alignment="center">
                <VStack className="wpui_user_list" alignment="center" spacing={4}>
                    {users.map((user, index) => (
                        <>
                            <HStack key={index} spacing={20}>
                                <HStack spacing={3} alignment="start">
                                    <Surface as={'img'} src={user.avatar} style={{ borderRadius: '100%', maxWidth: "45px" }} />
                                    <VStack spacing={3} style={{ width: '30rem' }}>
                                        <HStack>
                                            <Heading
                                                level={4}
                                                weight={500}
                                                style={{
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    whiteSpace: 'nowrap',
                                                }}>
                                                {user.name}
                                            </Heading>
                                            <Text size={16} style={{ minWidth: 'auto' }} >{user.role}</Text>
                                        </HStack>
                                        <Text
                                            size={16}
                                            variant="muted"
                                            lineHeight={1.6}
                                            style={truncate}>
                                            {user.about}
                                        </Text>
                                    </VStack>
                                </HStack>
                            </HStack>

                            <CardDivider margin={3} />
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
List2.meta = {
    title: 'List 2',
    name:'List2',
    category:'Lists',
    path: '/Lists/list2',
};
// @meta-end

export default List2;