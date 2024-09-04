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
import { archive, trendingUp } from "@wordpress/icons";

/**
 * Render Subscription marketing
*/
function Marketing2() {

    const data = [
        { icon: archive, title: 'Lorem lipsum', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
        { icon: archive, title: 'Lorem lipsum', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
        { icon: trendingUp, title: 'Lorem lipsum', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
        { icon: trendingUp, title: 'Lorem lipsum', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
        { icon: archive, title: 'Lorem lipsum', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
        { icon: archive, title: 'Lorem lipsum', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s' },
    ];
    return (
        <HStack alignment="center">
            <Card size='large' style={{ borderRadius: '8px' }}>
                <CardBody>
                    <VStack spacing={10}>
                        <Grid columns={[1, 2, 2]} gap={10}>
                            {data.map((Section, Index) => (
                                <HStack key={Index}>
                                    <CardBody size='xSmall'
                                        style={{
                                            minWidth: 'auto',
                                            borderRadius: '25px',
                                            backgroundColor: "#C7D1FF",
                                            marginBottom: '50px'
                                        }}>
                                        <Icon
                                            fill="blue"
                                            size={25}
                                            icon={Section.icon}
                                        />
                                    </CardBody>
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
