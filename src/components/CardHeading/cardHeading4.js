import {
    Icon,
    Card,
    CardBody,
    CardHeader,
    CardDivider,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    Button,
} from "@wordpress/components";
import { people, mapMarker } from "@wordpress/icons";

function CardHeading4() {
    return (
        <Card>
            <CardHeader>
                <HStack>
                    <VStack spacing={1}>
                        <Heading level={4}>Tom Holland</Heading>
                        <Text variant="muted">@tom_holland</Text>
                    </VStack>
                    <HStack alignment="right" expanded={false}>
                        <Button variant="primary" icon={"phone"} style={{ borderRadius: '5px' }}>Phone</Button>
                        <Button variant="primary" icon={"email"} style={{ borderRadius: '5px' }}>Email</Button>
                    </HStack>
                </HStack>
            </CardHeader>
            <CardBody>
                <VStack>
                    <HStack>
                        <Heading level={3} color="#E6E8EB">Back End Developer</Heading>
                        <Text color="#E6E8EB" style={{
                            border: '1px solid',
                            borderRadius: '15px',
                            padding: '5px',
                        }}>Full time</Text>
                    </HStack>
                    <HStack>
                        <HStack alignment="left">
                            <Icon fill="#E6E8EB" icon={people}></Icon>
                            <Text color="#E6E8EB">Engineering</Text>
                        </HStack>
                        <HStack alignment="right">
                            <Icon fill="#E6E8EB" icon={mapMarker}></Icon>
                            <Text color="#E6E8EB">Remote</Text>
                        </HStack>
                    </HStack>
                </VStack>
                <CardDivider margin={2}></CardDivider>
                <VStack>
                    <HStack>
                        <Heading level={3} color="#E6E8EB">Back End Developer</Heading>
                        <Text color="#E6E8EB" style={{
                            border: '1px solid',
                            borderRadius: '15px',
                            padding: '5px',
                        }}>Full time</Text>
                    </HStack>
                    <HStack>
                        <HStack alignment="left">
                            <Icon fill="#E6E8EB" icon={people}></Icon>
                            <Text color="#E6E8EB">Engineering</Text>
                        </HStack>
                        <HStack alignment="right">
                            <Icon fill="#E6E8EB" icon={mapMarker}></Icon>
                            <Text color="#E6E8EB">Remote</Text>
                        </HStack>
                    </HStack>
                </VStack>
                <CardDivider margin={2}></CardDivider>
                <VStack>
                    <HStack>
                        <Heading level={3} color="#E6E8EB">Back End Developer</Heading>
                        <Text color="#E6E8EB" style={{
                            border: '1px solid',
                            borderRadius: '15px',
                            padding: '5px',
                        }}>Full time</Text>
                    </HStack>
                    <HStack>
                        <HStack alignment="left">
                            <Icon fill="#E6E8EB" icon={people}></Icon>
                            <Text color="#E6E8EB">Engineering</Text>
                        </HStack>
                        <HStack alignment="right">
                            <Icon fill="#E6E8EB" icon={mapMarker}></Icon>
                            <Text color="#E6E8EB">Remote</Text>
                        </HStack>
                    </HStack>
                </VStack>
            </CardBody>
        </Card>
    );
}

export default CardHeading4;