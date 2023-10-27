/**
 * WordPress dependencies.
 */
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
import { heading, moreVertical, seen, starFilled } from "@wordpress/icons";

/**
 * Render Card Heading
 */
function CardHeading2() {

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
                <VStack spacing={6}>
                    <HStack>
                        <Surface as={'img'} src="https://placehold.co/50" style={{ borderRadius: '100%' }} />
                        <HStack>
                            <VStack spacing={1}>
                                <Heading level={4}>John Doe</Heading>
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
}

export default CardHeading2;