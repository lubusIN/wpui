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
function Grid3() {
    return (
        <Grid
            Columns={2}
            Rows={3}
            gap={0}
        >
            <Card>
                <CardBody>
                    <VStack spacing={4}>
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
                        <Heading>Request time off</Heading>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </VStack>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <VStack spacing={4}>
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
                        <Heading>Benefits</Heading>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </VStack>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <VStack spacing={4}>
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
                        <Heading>Schedule a one-on-one</Heading>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </VStack>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <VStack spacing={4}>
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
                        <Heading>Payroll</Heading>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </VStack>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <VStack spacing={4}>
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
                        <Heading>Submit an expense</Heading>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </VStack>
                </CardBody>
            </Card>

            <Card>
                <CardBody>
                    <VStack spacing={4}>
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
                        <Heading>Training</Heading>
                        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
                    </VStack>
                </CardBody>
            </Card>
        </Grid >
    );
};

export default Grid3;