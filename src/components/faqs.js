/**
 * WordPress dependencies.
 */
import {
    Card,
    Button,
    CardDivider,
    Icon,
    CardBody,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { plus, reset } from "@wordpress/icons";

/**
 * Render FAQs.
 */
function Faqs() {
    const [contentVisible, setContentVisible] = useState([false]);

    const handleToggleContent = (index) => {
        const Content = [...contentVisible];
        Content[index] = !Content[index];
        setContentVisible(Content);
    };

    const faqs = [
        {
            question: "What is Tatva?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            question: "What is Lorem Ipsum?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            question: "What is Tatva?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            question: "What is Lorem Ipsum?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            question: "What is Lorem Ipsum?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        }
    ];

    return (
        <Card size="large" style={{ borderRadius: '10px' }}>
            <CardBody>
                <Heading size={28}>Frequently Asked Questions</Heading>
                {faqs.map((faq, index) => (
                    <VStack key={index} spacing={2}>
                        <CardDivider marginEnd={4} marginStart={5}></CardDivider>
                        <Button style={{ boxShadow: 'none', padding: '0px' }} onClick={() => handleToggleContent(index)}>
                            <HStack>
                                <Heading size={18} align="left">{faq.question}</Heading>
                                <Icon icon={contentVisible[index] ? reset : plus}></Icon>
                            </HStack>
                        </Button>
                        {contentVisible[index] && (
                            <Text size={16} lineHeight={1.6}>{faq.answer}</Text>
                        )}
                    </VStack>
                ))}
            </CardBody>
        </Card>
    );
};

export default Faqs;