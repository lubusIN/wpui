/**
 * WordPress dependencies.
 */
import {
    Card,
    Icon,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalGrid as Grid
} from "@wordpress/components";
import { category, cog, home } from "@wordpress/icons";

/**
 * Render Subscription marketing
*/
function Marketing2() {

    const data = [
        { icon: home, title: 'Lorem lipsum', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
        { icon: home, title: 'Lorem lipsum', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
        { icon: category, title: 'Lorem lipsum', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
        { icon: category, title: 'Lorem lipsum', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
        { icon: cog, title: 'Lorem lipsum', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
        { icon: cog, title: 'Lorem lipsum', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
    ];
    return (
        <HStack alignment="center">
            <Card size='large' style={{ borderRadius: '8px' }}>
                <CardBody>
                    <VStack spacing={10}>
                        <Grid columns={[1, 2, 2]} gap={10}>
                            {data.map((Section,Index) => (
                                <HStack alignment='top' key={Index}>
                                    <Icon style={{ minWidth: '25px' }} icon={Section.icon} size={25} />
                                    <VStack>
                                        <Heading level={4}>{Section.title}</Heading>
                                        <Text variant='muted' style={{ maxWidth: '450px' }}>
                                            {Section.text}
                                        </Text>
                                    </VStack>
                                </HStack>
                            ))}
                        </Grid>
                    </VStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

// @meta-start
Marketing2.meta = {
    title: 'Marketing 2',
    name: 'Marketing2',
    category: 'Marketing',
    path: '/Marketing/marketing2',
};
// @meta-end
export default Marketing2;
