import {
    Icon,
    Card,
    CardBody,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalText as Text,
} from "@wordpress/components";

export default function ImageCard() {
    return (
        <HStack>
            <Card size="large" isRounded>
                <CardBody isShady>
                    <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" /><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71l-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" /></g></svg>}></Icon>
                </CardBody>
                <CardBody>
                    <VStack>
                        <Heading level={5}>Ping</Heading>
                        <Text>Animating Ping Notification</Text>
                    </VStack>
                </CardBody>
            </Card>
            <Card size="large" isRounded>
                <CardBody isShady>
                    <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" /><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71l-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" /></g></svg>}></Icon>
                </CardBody>
                <CardBody>
                    <VStack>
                        <Heading level={5}>Highlight</Heading>
                        <Text>Animating text highlight</Text>
                    </VStack>
                </CardBody>
            </Card >
            <Card size="large" isRounded>
                <CardBody isShady>
                    <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><g fill="currentColor"><path d="M6.002 5.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" /><path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71l-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" /></g></svg>}></Icon>
                </CardBody>
                <CardBody>
                    <VStack>
                        <Heading level={5}>Image Compare</Heading>
                        <Text>Compare before and after image</Text>
                    </VStack>
                </CardBody>
            </Card>
        </HStack>
    );
}