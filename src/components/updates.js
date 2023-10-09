import {
    Card,
    Button,
    TextControl,
    Placeholder,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalText as Text,
} from "@wordpress/components";

export default function Updates() {
    return (
        <Card
            style={{
                width: '100%',
                boxSizing: 'border-box',
                padding: '50px 0px',
                backgroundColor: '#111827',
                borderRadius: '5px'
            }}
        >
            <VStack spacing={10}>
                <VStack alignment="center">
                    <Heading level={1} color="white"> Get notified when we're launching. </Heading>
                    <Text size={15} align="center" style={{ width: '450px', color: 'white' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text
                    </Text>
                </VStack>
                <HStack alignment="center" spacing={3}>
                    <TextControl
                        __nextHasNoMarginBottom
                        placeholder="Enter your email"
                        value=""
                        style={{
                            backgroundColor: '#2E273F',
                            color: 'white',
                            padding: '5px',
                            borderRadius: '5px',
                            width: '250px',
                        }}
                    />
                    <Button
                        variant="primary"
                        style={{
                            padding: '5px',
                            borderRadius: '5px'
                        }}
                    >
                        Notify me
                    </Button>
                </HStack>
            </VStack>
        </Card>

    );
}