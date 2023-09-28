import {
    Card,
    __experimentalText as Text,
    __experimentalGrid as Grid,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    __experimentalNavigatorButton as NavigatorButton,
} from "@wordpress/components";
import components from "./data";


export default function ComponentsMenu() {
    return (
        <>
            <HStack>
                <Text size={20}>Components</Text>
            </HStack>
            <Grid
                alignment="bottom"
                columns={4}
                gap={4}
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
        </>

    );
}