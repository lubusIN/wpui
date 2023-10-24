/**
 * WordPress dependencies.
 */
import {
    Icon,
    Card,
    Button,
    CardBody,
    __experimentalText as Text,
    __experimentalGrid as Grid,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { navigation, check, people, payment, receipt, postAuthor, external } from "@wordpress/icons";

/**
 * Render Cards
 */
function Grid4() {
    return (
        <Grid columns={[1, 2]} gap={0}>
            <Card size="large">
                <CardBody>
                    <VStack spacing={8}>
                        <HStack>
                            <Icon
                                size={40}
                                icon={navigation}
                                fill="#0C766E"
                                style={{
                                    borderRadius: '1px',
                                    backgroundColor: '#EFFEFA'
                                }}></Icon>
                            <Button icon={external} size={40} variant="Tertiary"></Button>
                        </HStack>
                        <VStack>
                            <Heading level={4} weight={500}>Request time off</Heading>
                            <Text size={15} lineHeight={1.6} variant="muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>

            <Card size="large">
                <CardBody>
                    <VStack spacing={8}>
                        <HStack>
                            <Icon
                                size={40}
                                icon={check}
                                fill="#9547D7"
                                style={{
                                    borderRadius: '1px',
                                    backgroundColor: '#FAF5FF'
                                }}></Icon>
                            <Button icon={external} size={40} variant="Tertiary"></Button>
                        </HStack>
                        <VStack>
                            <Heading level={4} weight={500}>Benefits</Heading>
                            <Text size={15} lineHeight={1.6} variant="muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>

            <Card size="large">
                <CardBody>
                    <VStack spacing={8}>
                        <HStack>
                            <Icon
                                size={40}
                                icon={people}
                                fill="#3482B1"
                                style={{
                                    borderRadius: '1px',
                                    backgroundColor: '#F1F9FF'
                                }}></Icon>
                            <Button icon={external} size={40} variant="Tertiary"></Button>
                        </HStack>
                        <VStack>
                            <Heading level={4} weight={500}>Schedule a one-on-one</Heading>
                            <Text size={15} lineHeight={1.6} variant="muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>

            <Card size="large">
                <CardBody>
                    <VStack spacing={8}>
                        <HStack>
                            <Icon
                                size={40}
                                icon={payment}
                                fill="#A76C18"
                                style={{
                                    borderRadius: '1px',
                                    backgroundColor: '#FEFCE8'
                                }}></Icon>
                            <Button icon={external} size={40} variant="Tertiary"></Button>
                        </HStack>
                        <VStack>
                            <Heading level={4} weight={500}>Payroll</Heading>
                            <Text size={15} lineHeight={1.6} variant="muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>

            <Card size="large">
                <CardBody>
                    <VStack spacing={8}>
                        <HStack>
                            <Icon
                                size={40}
                                icon={receipt}
                                fill="#BD123C"
                                style={{
                                    borderRadius: '1px',
                                    backgroundColor: '#FFF1F2'
                                }}></Icon>
                            <Button icon={external} size={40} variant="Tertiary"></Button>
                        </HStack>
                        <VStack>
                            <Heading level={4} weight={500}>Submit an expense</Heading>
                            <Text size={15} lineHeight={1.6} variant="muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>

            <Card size="large">
                <CardBody>
                    <VStack spacing={8}>
                        <HStack>
                            <Icon
                                size={40}
                                icon={postAuthor}
                                fill="#4338CA"
                                style={{
                                    borderRadius: '1px',
                                    backgroundColor: '#EEF2FF'
                                }}></Icon>
                            <Button icon={external} size={40} variant="Tertiary"></Button>
                        </HStack>
                        <VStack>
                            <Heading level={4} weight={500}>Training</Heading>
                            <Text size={15} lineHeight={1.6} variant="muted">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>
        </Grid>
    );
};

export default Grid4;