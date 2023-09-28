import {
    Card,
    Button,
    CardDivider,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from "@wordpress/components";
import { plus, reset } from "@wordpress/icons";

export default function Questions() {
    return (
        <Card style={{ padding: '40px', borderRadius: '10px', width: '670px' }}>
            <Text size={28} align="left">Frequently Asked Questions</Text>

            <CardDivider margin={5}></CardDivider>

            <HStack>
                <Text size={20} align="left">What is Tatva?</Text>
                <Button icon={plus}></Button>
            </HStack>

            <CardDivider margin={3}></CardDivider>

            <HStack>
                <Text size={20} align="left">What is Lorem Ipsum?</Text>
                <Button icon={reset}></Button>
            </HStack>
            <div style={{ maxWidth: '600px' }}>
                <Text align="left">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
            </div>

            <CardDivider margin={3}></CardDivider>

            <HStack>
                <Text size={20} align="left">What is Lorem Ipsum?</Text>
                <Button icon={plus}></Button>
            </HStack>

            <CardDivider margin={3}></CardDivider>

            <HStack>
                <Text size={20} align="left">What is Lorem Ipsum?</Text>
                <Button icon={plus}></Button>
            </HStack>

            <CardDivider margin={3}></CardDivider>

            <HStack>
                <Text size={20} align="left">What is Lorem Ipsum?</Text>
                <Button icon={plus}></Button>
            </HStack>
        </Card>
    );
}