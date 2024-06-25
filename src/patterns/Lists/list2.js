/**
 * WordPress dependencies.
 */
import {
    CardDivider,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import * as Components from '.';

/**
 * Render Stacked List View
 */
function List2() {

    const users = [
        {
            name: 'David K. Williams',
            role: 'Administrator',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vel velit finibus tempor sit amet vitae ipsum. Morbi euismod malesuada sem id consequat.'
        },
        {
            name: 'Jeramy D. Johnson',
            role: 'Contributor',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vel velit finibus tempor sit amet vitae ipsum. Morbi euismod malesuada sem id consequat.'
        },
        {
            name: 'Diane C. Cotter',
            role: 'Author',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vel velit finibus tempor sit amet vitae ipsum. Morbi euismod malesuada sem id consequat.'
        },
        {
            name: 'Cody I. Curran',
            role: 'Editor',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut urna vel velit finibus tempor sit amet vitae ipsum. Morbi euismod malesuada sem id consequat.'
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
                                    <img
                                        src="https://placehold.co/50"
                                        style={{ borderRadius: '100%', minWidth: 'auto' }}
                                    />
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

List2.meta = {
    title: 'List 2',
    path: '/Lists/list2',
    component: Components.List2
};

export default List2;