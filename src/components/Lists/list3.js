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
        <CardBody>
            <HStack alignment="center">
                <VStack alignment="center" spacing={6}>
                    <HStack spacing={20}>
                        <HStack spacing={3} alignment="start">
                            <img
                                width={'100%'}
                                src="https://placehold.co/50"
                                style={{ borderRadius: '100%', maxWidth: '50px' }}
                            />
                            <VStack spacing={3}>
                                <Heading level={4} weight={500}>Ajit Bohra</Heading>
                                <Text
                                    size={16}
                                    variant="muted"
                                    lineHeight={1.6}
                                    style={{
                                        width: '20rem',
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}>
                                    ajitbohra@gmail.com
                                </Text>
                            </VStack>
                        </HStack>
                        <Button variant="secondary">View</Button>
                    </HStack>

                    <CardDivider margin={2} />

                    <HStack alignment="left" spacing={20}>
                        <HStack spacing={3} alignment="left" expanded={false}>
                            <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                            <VStack>
                                <Heading level={4} weight={500}>Ajit Bohra</Heading>
                                <Text size={16} variant="muted">ajitbohra@gmail.com</Text>
                            </VStack>
                        </HStack>
                        <Button variant="secondary">View</Button>
                    </HStack>

                    <CardDivider margin={2} />

                    <HStack alignment="left" spacing={20}>
                        <HStack spacing={3} alignment="left" expanded={false}>
                            <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                            <VStack>
                                <Heading level={4} weight={500}>Ajit Bohra</Heading>
                                <Text size={16} variant="muted">ajitbohra@gmail.com</Text>
                            </VStack>
                        </HStack>
                        <Button variant="secondary">View</Button>
                    </HStack>

                    <CardDivider margin={2} />

                    <HStack alignment="left" spacing={20}>
                        <HStack spacing={3} alignment="left" expanded={false}>
                            <img src="https://placehold.co/60" style={{ borderRadius: '100%' }} />
                            <VStack>
                                <Heading level={4} weight={500}>Ajit Bohra</Heading>
                                <Text size={16} variant="muted">ajitbohra@gmail.com</Text>
                            </VStack>
                        </HStack>
                        <Button variant="secondary">View</Button>
                    </HStack>

                    <Button variant="secondary" style={{ width: '100%', justifyContent: 'center' }} text="View All"></Button>
                </VStack>
            </HStack >
        </CardBody >
    )
};

export default List3;