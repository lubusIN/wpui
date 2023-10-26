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
    __experimentalSurface as Surface,
} from "@wordpress/components";
import { people, mapMarker } from "@wordpress/icons";

/**
 * Render Card Heading.
 */
function CardHeading4() {
    return (
        <Card size="medium" style={{ borderRadius: '4px' }}>
            <CardHeader style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                <HStack direction={['column', 'row']}>
                    <HStack justify="left" expanded={false}>
                        <Surface as={'img'} src="https://placehold.co/50" style={{ borderRadius: '100%' }} />
                        <VStack spacing={1}>
                            <Heading level={4}>John Doe</Heading>
                            <Text size={14} color="#6b7280">@johnDoe</Text>
                        </VStack>
                    </HStack>
                    <HStack alignment="right" expanded={false}>
                        <Button variant="secondary" icon={"phone"} iconSize={22} style={{ borderRadius: '5px' }}>Phone</Button>
                        <Button variant="secondary" icon={"email"} iconSize={22} style={{ borderRadius: '5px' }}>Email</Button>
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

export default CardHeading4;