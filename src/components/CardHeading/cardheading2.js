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
} from "@wordpress/components";
import { code, commentAuthorAvatar, heading, moreVertical, starFilled } from "@wordpress/icons";

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
            icon: <Icon icon={code}></Icon>,
            onClick: function noRefCheck() { },
            title: 'Embed'
        },
        {
            icon: <Icon icon={heading}></Icon>,
            onClick: function noRefCheck() { },
            title: 'Report Content'
        },

    ];

    return (
        <Card size="medium" style={{ borderRadius: '4px' }}>
            <CardBody>
                <VStack spacing={6}>
                    <HStack>
                        <Icon size={64} icon={commentAuthorAvatar}></Icon>
                        <HStack>
                            <VStack spacing={2}>
                                <Heading level={4}>Chelsea Hogan</Heading>
                                <Text size={16} color="#6b7280">December 9 at 11:43 AM</Text>
                            </VStack>
                            <DropdownMenu
                                controls={controls}
                                icon={moreVertical}
                                onToggle={function noRefCheck() { }}
                            />
                        </HStack>
                    </HStack>
                    <Text size={18} lineHeight={1.6} style={{ opacity: '0.25' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo impedit sapiente recusandae iusto officiis dolor? Laborum quibusdam quam, quidem vel assumenda repellat inventore sint nesciunt, ullam asperiores magnam placeat eveniet. Aliquam voluptatibus assumenda distinctio veniam quam tempora modi aperiam nemo voluptate reprehenderit quidem, nisi vero est.
                    </Text>
                </VStack>
            </CardBody>
        </Card>
    );
}

export default CardHeading2;