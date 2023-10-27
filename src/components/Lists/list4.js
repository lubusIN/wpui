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

/**
 * Render Stacked List View
 */
function List4() {

    const users = [
        {
            name: 'David K. Williams',
            email: 'david@gmail.com',
            role: 'Administrator',
            status: 'last seen 3h ago'
        },
        {
            name: 'Jeramy D. Johnson',
            email: 'jeramy@gmail.com',
            role: 'Contributor',
            status: 'last seen 2d ago'
        },
        {
            name: 'Diane C. Cotter',
            email: 'diane@gmail.com',
            role: 'Author',
            status: 'Online'
        },
        {
            name: 'Cody I. Curran',
            email: 'cody@gmail.com',
            role: 'Editor',
            status: 'last seen 1m ago'
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
                                    <img
                                        src="https://placehold.co/50"
                                        style={{ borderRadius: '100%', minWidth: 'auto' }}
                                    />
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
                                <VStack style={{ minWidth: 'fit-content' }}>
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

export default List4;