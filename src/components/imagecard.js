import {
    Icon,
    Button,
    CardBody,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalText as Text,
} from "@wordpress/components";
import { moreHorizontalMobile } from "@wordpress/icons";

export default function ImageCard() {
    return (
        <VStack spacing="5">
            <HStack>
                <Text size={20}>Latest Components</Text>
                <Button variant="link" style={{ color: 'black', fontSize: 20 }}>See all</Button>
            </HStack>
            <HStack alignment="center" justify="space-between" spacing="4">
                <VStack>
                    <CardBody isShady style={{
                        backgroundColor: '#FFDCEC',
                        padding: '20px',
                        height: '120px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon icon={moreHorizontalMobile} size={50}></Icon>
                    </CardBody>

                    <Heading level={5}>Ping</Heading>
                    <Text size={10}>Animating Ping Notification</Text>
                </VStack>

                <VStack>
                    <CardBody isShady style={{
                        backgroundColor: '#FFDCEC',
                        padding: '20px',
                        height: '120px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon icon={moreHorizontalMobile} size={50}></Icon>
                    </CardBody>

                    <Heading level={5}>Ping</Heading>
                    <Text size={10}>Animating Ping Notification</Text>
                </VStack>

                <VStack>
                    <CardBody isShady style={{
                        backgroundColor: '#FFDCEC',
                        padding: '20px',
                        height: '120px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon icon={moreHorizontalMobile} size={50}></Icon>
                    </CardBody>

                    <Heading level={5}>Ping</Heading>
                    <Text size={10}>Animating Ping Notification</Text>
                </VStack>
            </HStack>
            <HStack alignment="center" justify="space-between" spacing="4">
                <VStack>
                    <CardBody isShady style={{
                        backgroundColor: '#FFDCEC',
                        padding: '20px',
                        height: '120px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon icon={moreHorizontalMobile} size={50}></Icon>
                    </CardBody>

                    <Heading level={5}>Ping</Heading>
                    <Text size={10}>Animating Ping Notification</Text>
                </VStack>

                <VStack>
                    <CardBody isShady style={{
                        backgroundColor: '#FFDCEC',
                        padding: '20px',
                        height: '120px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon icon={moreHorizontalMobile} size={50}></Icon>
                    </CardBody>

                    <Heading level={5}>Ping</Heading>
                    <Text size={10}>Animating Ping Notification</Text>
                </VStack>

                <VStack>
                    <CardBody isShady style={{
                        backgroundColor: '#FFDCEC',
                        padding: '20px',
                        height: '120px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon icon={moreHorizontalMobile} size={50}></Icon>
                    </CardBody>

                    <Heading level={5}>Ping</Heading>
                    <Text size={10}>Animating Ping Notification</Text>
                </VStack>
            </HStack>
        </VStack >

    );
}