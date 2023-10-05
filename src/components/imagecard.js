import {
    Icon,
    Button,
    CardBody,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalText as Text,
} from "@wordpress/components";
import Ellipsis from "../img/Ellipsis.svg";



export default function ImageCard() {
    const loading = () => {
        return (
            <img src={Ellipsis} alt="Loading"></img>
        );
    }

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
                        height: '150px',
                        width: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon icon={loading} size={50}></Icon>
                    </CardBody>

                    <Heading level={5}>Ping</Heading>
                </VStack>

                <VStack>
                    <CardBody isShady style={{
                        backgroundColor: '#FFDCEC',
                        padding: '20px',
                        height: '150px',
                        width: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon icon={loading} size={50}></Icon>
                    </CardBody>

                    <Heading level={5}>Ping</Heading>
                </VStack>

                <VStack>
                    <CardBody isShady style={{
                        backgroundColor: '#FFDCEC',
                        padding: '20px',
                        height: '150px',
                        width: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon icon={loading} size={50}></Icon>
                    </CardBody>

                    <Heading level={5}>Ping</Heading>
                </VStack>

            </HStack >
            <HStack alignment="center" justify="space-between" spacing="4">
                <VStack>
                    <CardBody isShady style={{
                        backgroundColor: '#FFDCEC',
                        padding: '20px',
                        height: '150px',
                        width: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon icon={loading} size={50}></Icon>
                    </CardBody>

                    <Heading level={5}>Ping</Heading>
                </VStack>

                <VStack>
                    <CardBody isShady style={{
                        backgroundColor: '#FFDCEC',
                        padding: '20px',
                        height: '150px',
                        width: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon icon={loading} size={50}></Icon>
                    </CardBody>

                    <Heading level={5}>Ping</Heading>
                </VStack>

                <VStack>
                    <CardBody isShady style={{
                        backgroundColor: '#FFDCEC',
                        padding: '20px',
                        height: '150px',
                        width: '200px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Icon icon={loading} size={50}></Icon>
                    </CardBody>

                    <Heading level={5}>Ping</Heading>
                </VStack>
            </HStack>
        </VStack >

    );
}