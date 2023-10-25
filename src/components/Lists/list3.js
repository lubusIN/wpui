/**
 * WordPress dependencies.
 */
import {
    Icon,
    CardDivider,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
    Button,
    CardBody,
} from "@wordpress/components";

/**
 * Render Stacked List View
 */
function List3() {
    return (
        <HStack alignment="center">
            <VStack spacing={6}>
                <HStack alignment="center" spacing={20}>
                    <HStack spacing={3} alignment="left" expanded={false}>
                        <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                        <VStack spacing={3}>
                            <Heading level={4} weight={500}>Ajit Bohra</Heading>
                            <Text
                                size={16}
                                variant="muted"
                                lineHeight={1.6}
                                style={{
                                    width: '10rem',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                ajitbohra@gmail.com</Text>
                        </VStack>
                    </HStack>
                    <Button variant="secondary">View</Button>
                </HStack>

                <CardDivider margin={2} />

                <HStack alignment="center" spacing={20}>
                    <HStack spacing={3} alignment="left" expanded={false}>
                        <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                        <VStack>
                            <Heading level={4} weight={500}>Ajit Bohra</Heading>
                            <Text
                                size={16}
                                variant="muted"
                                lineHeight={1.6}
                                style={{
                                    width: '10rem',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                ajitbohra@gmail.com</Text>
                        </VStack>
                    </HStack>
                    <Button variant="secondary">View</Button>
                </HStack>

                <CardDivider margin={2} />

                <HStack alignment="center" spacing={20}>
                    <HStack spacing={3} alignment="left" expanded={false}>
                        <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                        <VStack>
                            <Heading level={4} weight={500}>Ajit Bohra</Heading>
                            <Text
                                size={16}
                                variant="muted"
                                lineHeight={1.6}
                                style={{
                                    width: '10rem',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                ajitbohra@gmail.com</Text>
                        </VStack>
                    </HStack>
                    <Button variant="secondary">View</Button>
                </HStack>

                <CardDivider margin={2} />

                <HStack alignment="center" spacing={20}>
                    <HStack spacing={3} alignment="left" expanded={false}>
                        <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                        <VStack>
                            <Heading level={4} weight={500}>Ajit Bohra</Heading>
                            <Text
                                size={16}
                                variant="muted"
                                lineHeight={1.6}
                                style={{
                                    width: '10rem',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                ajitbohra@gmail.com</Text>
                        </VStack>
                    </HStack>
                    <Button variant="secondary">View</Button>
                </HStack>

                <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }} text="View All"></Button>
            </VStack>
        </HStack>
    )
};

export default List3;