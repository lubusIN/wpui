/**
 * WordPress dependencies.
 */
import {
    Card,
    CardHeader,
    Button,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalSurface as Surface,
} from "@wordpress/components";

/**
 * Render Card Heading.
 */
function CardHeading4() {
    return (
        <Card size="medium" style={{ borderRadius: '4px' }}>
            <CardHeader style={{ paddingTop: '25px', paddingBottom: '25px' }}>
                <HStack direction={['column', 'row']}>
                    <HStack justify="left">
                        <Surface as={'img'} src="https://placehold.co/50" style={{ borderRadius: '100%' }} />
                        <VStack spacing={1}>
                            <Heading level={4}>John Doe</Heading>
                            <Text size={14} color="#6b7280">@johnDoe</Text>
                        </VStack>
                    </HStack>
                    <HStack alignment="right" expanded={false} style={{ minWidth: 'auto' }}>
                        <Button variant="secondary" icon={"phone"} iconSize={22} style={{ borderRadius: '5px' }}>Phone</Button>
                        <Button variant="secondary" icon={"email"} iconSize={22} style={{ borderRadius: '5px' }}>Email</Button>
                    </HStack>
                </HStack>
            </CardHeader>
            <Card style={{ opacity: '0.5', height: '200px' }} variant="grid" backgroundSize={20} isBorderless ></Card>
        </Card>
    );
}

export default CardHeading4;