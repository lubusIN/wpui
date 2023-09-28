import {
    Button,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalVStack as VStack,
} from "@wordpress/components";


export default function Subscription() {
    return (

        <VStack>
            <Heading level={3}>Manage Subscription</Heading>
            <Text>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit.facilisis dictum tortor,
            </Text>
            <Button style={{ marginTop: '10px', width: '100px' }} variant="primary">Change Plan</Button>
        </VStack>


    );
}