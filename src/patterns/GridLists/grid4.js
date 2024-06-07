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
import { check, people, payment, receipt, postAuthor, external, mobile } from "@wordpress/icons";

/**
 * Render Cards
 */
function Grid4() {
    return (
        <Grid columns={[1, 2]} gap={0}>
            <Card size="large">
                <CardBody>
                    <VStack spacing={8}>
                        <HStack>
                            <CardBody isShady size={'XSmall'} style={{ borderRadius: '4px' }}>
                                <Icon
                                    size={40}
                                    icon={mobile}
                                />
                            </CardBody>
                            <Button icon={external} size={40} variant="Tertiary"></Button>
                        </HStack>
                        <VStack>
                            <Heading level={4} weight={500}>Responsive Design</Heading>
                            <Text size={15} lineHeight={1.6} variant="muted">
                                Our WordPress theme ensures a seamless experience across all devices, providing a user-friendly interface on desktops, tablets, and smartphones.
                            </Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>

            <Card size="large">
                <CardBody>
                    <VStack spacing={8}>
                        <HStack>
                            <CardBody isShady size={'XSmall'} style={{ borderRadius: '4px' }}>
                                <Icon
                                    size={40}
                                    icon={check}
                                />
                            </CardBody>
                            <Button icon={external} size={40} variant="Tertiary"></Button>
                        </HStack>
                        <VStack>
                            <Heading level={4} weight={500}>SEO Optimization</Heading>
                            <Text size={15} lineHeight={1.6} variant="muted">
                                Boost your website's visibility with our built-in SEO optimization tools. Improve your search engine rankings and attract more organic traffic.
                            </Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>

            <Card size="large">
                <CardBody>
                    <VStack spacing={8}>
                        <HStack>
                            <CardBody isShady size={'XSmall'} style={{ borderRadius: '4px' }}>
                                <Icon
                                    size={40}
                                    icon={people}
                                />
                            </CardBody>
                            <Button icon={external} size={40} variant="Tertiary"></Button>
                        </HStack>
                        <VStack>
                            <Heading level={4} weight={500}>E-commerce Solutions</Heading>
                            <Text size={15} lineHeight={1.6} variant="muted">
                                Take your business online with our e-commerce solutions. From secure payment gateways to customizable product pages, we help you build a successful online store.
                            </Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>

            <Card size="large">
                <CardBody>
                    <VStack spacing={8}>
                        <HStack>
                            <CardBody isShady size={'XSmall'} style={{ borderRadius: '4px' }}>
                                <Icon
                                    size={40}
                                    icon={payment}
                                />
                            </CardBody>
                            <Button icon={external} size={40} variant="Tertiary"></Button>
                        </HStack>
                        <VStack>
                            <Heading level={4} weight={500}> Premium Blog Templates</Heading>
                            <Text size={15} lineHeight={1.6} variant="muted">
                                Explore a collection of beautifully crafted blog templates, designed to make your content stand out. Choose from a variety of styles to suit your unique taste.
                            </Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>

            <Card size="large">
                <CardBody>
                    <VStack spacing={8}>
                        <HStack>
                            <CardBody isShady size={'XSmall'} style={{ borderRadius: '4px' }}>
                                <Icon
                                    size={40}
                                    icon={receipt}
                                />
                            </CardBody>
                            <Button icon={external} size={40} variant="Tertiary"></Button>
                        </HStack>
                        <VStack>
                            <Heading level={4} weight={500}>24/7 Customer Support</Heading>
                            <Text size={15} lineHeight={1.6} variant="muted">
                                We pride ourselves on providing exceptional customer support. Our dedicated team is available 24/7 to assist you with any queries or issues you may encounter.
                            </Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>

            <Card size="large">
                <CardBody>
                    <VStack spacing={8}>
                        <HStack>
                            <CardBody isShady size={'XSmall'} style={{ borderRadius: '4px' }}>
                                <Icon
                                    size={40}
                                    icon={postAuthor}
                                />
                            </CardBody>
                            <Button icon={external} size={40} variant="Tertiary"></Button>
                        </HStack>
                        <VStack>
                            <Heading level={4} weight={500}> One-Click Installation</Heading>
                            <Text size={15} lineHeight={1.6} variant="muted">
                                Get started in minutes with our easy one-click installation. No technical expertise required – launch your WordPress site effortlessly and focus on what you do best.
                            </Text>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>
        </Grid>
    );
};

export default Grid4;