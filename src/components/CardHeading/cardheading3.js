/**
 * WordPress dependencies.
 */
import {
    Icon,
    Card,
    CardBody,
    CardHeader,
    CardDivider,
    Button,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { people, mapMarker } from "@wordpress/icons";

/**
 * Render Card Heading.
 */
function CardHeading3() {
    return (
        <Card size="medium" style={{ borderRadius: '4px' }}>
            <CardHeader style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                <HStack direction={['column', 'row']}>
                    <VStack>
                        <Heading level={3}>Job Postings</Heading>
                        <Text size={16} color="#6b7280">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                    </VStack>
                    <HStack alignment="right" expanded={false}>
                        <Button variant="primary" style={{ borderRadius: '5px' }}>Create New Job</Button>
                    </HStack>
                </HStack>
            </CardHeader>
            <div style={{ opacity: '0.2' }}>
                <CardBody>
                    <VStack>
                        <HStack>
                            <Heading level={4} weight={500}>Back End Developer</Heading>
                            <Text color="grey" style={{
                                border: '1px solid',
                                borderRadius: '15px',
                                padding: '5px',
                            }}>
                                Full time
                            </Text>
                        </HStack>
                        <HStack>
                            <HStack alignment="left">
                                <Icon fill="grey" size={40} icon={people}></Icon>
                                <Text size={16} color="grey">Engineering</Text>
                            </HStack>
                            <HStack alignment="right" spacing={1}>
                                <Icon fill="grey" icon={mapMarker}></Icon>
                                <Text size={16} color="grey">Remote</Text>
                            </HStack>
                        </HStack>
                    </VStack>
                </CardBody>
                <CardDivider color="grey"></CardDivider>
                <CardBody>
                    <VStack>
                        <HStack>
                            <Heading level={4} weight={500}>Back End Developer</Heading>
                            <Text color="grey" style={{
                                border: '1px solid',
                                borderRadius: '15px',
                                padding: '5px',
                            }}>
                                Full time
                            </Text>
                        </HStack>
                        <HStack>
                            <HStack alignment="left">
                                <Icon fill="grey" size={40} icon={people}></Icon>
                                <Text size={16} color="grey">Engineering</Text>
                            </HStack>
                            <HStack alignment="right" spacing={1}>
                                <Icon fill="grey" icon={mapMarker}></Icon>
                                <Text size={16} color="grey">Remote</Text>
                            </HStack>
                        </HStack>
                    </VStack>
                </CardBody>
                <CardDivider color="grey"></CardDivider>
                <CardBody>
                    <VStack>
                        <HStack>
                            <Heading level={4} weight={500}>Back End Developer</Heading>
                            <Text color="grey" style={{
                                border: '1px solid',
                                borderRadius: '15px',
                                padding: '5px',
                            }}>
                                Full time
                            </Text>
                        </HStack>
                        <HStack>
                            <HStack alignment="left">
                                <Icon fill="grey" size={40} icon={people}></Icon>
                                <Text size={16} color="grey">Engineering</Text>
                            </HStack>
                            <HStack alignment="right" spacing={1}>
                                <Icon fill="grey" icon={mapMarker}></Icon>
                                <Text size={16} color="grey">Remote</Text>
                            </HStack>
                        </HStack>
                    </VStack>
                </CardBody>
            </div>
        </Card>
    );
}

export default CardHeading3;