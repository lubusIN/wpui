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
    __experimentalSurface as Surface,
} from "@wordpress/components";

/**
 * Render Stacked List View
 */
function List3() {

    const users = [
        { name: 'Rahul Sharma', email: 'rahulsharma@gmail.com', avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar3.png' },
        { name: 'Lalit Rana', email: 'lalitrana@gmail.com', avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar4.png' },
        { name: 'Anna Morgan', email: 'annamorgan@gmail.com', avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar5.png' },
        { name: 'Neha Jain', email: 'nehajain@gmail.com', avatar:'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar6.png' },
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
                                <Surface as={'img'} src={user.avatar} style={{ borderRadius: '100%', maxWidth: "45px" }} />
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