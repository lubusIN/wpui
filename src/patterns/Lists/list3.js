/**
 * WordPress dependencies.
 */
import {
    CardDivider,
    Button,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";

/**
 * Render Stacked List View
 */
function List3() {

    const users = [
        { name: 'David K. Williams', email: 'david@gmail.com' },
        { name: 'Jeramy D. Johnson', email: 'jeramy@gmail.com' },
        { name: 'Diane C. Cotter', email: 'diane@gmail.com' },
        { name: 'Cody I. Curran', email: 'cody@gmail.com' },
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
                <VStack className="wpui_user_list" spacing={6}>
                    {users.map((user, index) => (
                        <>
                            <HStack key={index} spacing={10}>
                                <HStack spacing={3} alignment="left" expanded={false}>
                                    <img
                                        src="https://placehold.co/50"
                                        style={{ borderRadius: '100%', minWidth: 'auto' }}
                                    />
                                    <VStack spacing={2} style={{ width: '15rem' }}>
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
                                <Button variant="secondary" style={{ minWidth: 'auto' }}>View</Button>
                            </HStack>
                            <CardDivider margin={2} />
                        </>
                    ))}

                    <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }} text="View All"></Button>
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
List3.meta = {
    title: 'List 3',
    path: '/Lists/list3',
};
// @meta-end

export default List3;