/**
 * WordPress dependencies.
 */
import { 
    heading, 
    moreVertical, 
    seen, 
    starFilled 
} from "@wordpress/icons";
import {
    Icon,
    Card,
    CardBody,
    DropdownMenu,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalSurface as Surface,
} from "@wordpress/components";

/**
 * Render Card.
 */
function Card2() {

    const controls = [
        {
            icon: <Icon icon={starFilled}></Icon>,
            onClick: function noRefCheck() { },
            title: 'Add to favorites'
        },
        {
            icon: <Icon icon={seen}></Icon>,
            onClick: function noRefCheck() { },
            title: 'View Profile'
        },
        {
            icon: <Icon icon={heading}></Icon>,
            onClick: function noRefCheck() { },
            title: 'Report User'
        },

    ];

    return (
        <Card size="medium" style={{ borderRadius: '4px' }}>
            <CardBody>
                <VStack spacing={3}>
                    <HStack>
                        <Surface as={'img'} src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar3.png" style={{ borderRadius: '100%', maxWidth:"45px" }} />
                        <HStack>
                            <VStack spacing={1}>
                                <Heading level={4}>Rahul Sharma</Heading>
                                <Text size={14} color="#6b7280">Front End Developer</Text>
                            </VStack>
                            <DropdownMenu
                                controls={controls}
                                icon={moreVertical}
                                onToggle={function noRefCheck() { }}
                            />
                        </HStack>
                    </HStack>
                    <Text size={16} lineHeight={1.6} style={{ opacity: '0.25' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est.
                    </Text>
                </VStack>
            </CardBody>
        </Card>
    );
};

// @meta-start
Card2.meta = {
    title: 'Card 2',
    name:'Card2',
    category:'Cards',
    path: '/Cards/card2',
};
// @meta-end

export default Card2;