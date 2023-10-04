import {
    Card,
    Button,
    CardDivider,
    ExternalLink,
    __experimentalText as Text,
    __experimentalGrid as Grid,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
    __experimentalNavigatorButton as NavigatorButton,

} from "@wordpress/components";
import components from "./data";

export default function ComponentsMenu() {
    return (
        <>
            <VStack spacing={3}>
                <Text size={15} align="center">From the House of LUBUS</Text>
                <Text size={30} align="center">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
                <Text align="center">
                    Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                </Text>
                <HStack alignment="center">
                    <Button variant="primary">
                        Browse Components
                    </Button>
                    <Button variant="secondary">
                        Subscribe NewsLetter
                    </Button>
                </HStack>
            </VStack>

            <CardDivider margin={6}></CardDivider>

            <VStack alignment="center">
                <HStack justify="space-evenly" direction={['column', 'row']}>
                    <Text size={20}>Components</Text>
                    <ExternalLink href="#">See all</ExternalLink>
                </HStack>
                <Grid
                    alignment="bottom"
                    columns={4}
                    gap={5}
                >
                    {
                        components.map((component, index) =>
                            <NavigatorButton
                                key={index}
                                path={component.path}
                                variant="link"
                                style={{
                                    textDecoration: 'none',
                                    boxShadow: 'none'
                                }}>
                                <VStack>
                                    <Card isRounded size="large" variant="grid" style={{
                                        backgroundColor: '#e2e8f0',
                                        width: '120px',
                                        height: '60px',
                                        padding: '20px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: '8px'
                                    }}>
                                    </Card>

                                    <Heading level={5}>{component.title}</Heading>
                                </VStack>
                            </NavigatorButton>
                        )
                    }
                </Grid>
            </VStack>
        </>
    );
}