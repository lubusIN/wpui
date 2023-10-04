import {
    Card,
    Button,
    CardDivider,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    Icon,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import { plus, reset } from "@wordpress/icons";

export default function Questions() {
    const [contentVisible, setContentVisible] = useState([false]);

    const handleToggleContent = (index) => {
        const newContentVisible = [...contentVisible];
        newContentVisible[index] = !newContentVisible[index];
        setContentVisible(newContentVisible);
    };

    const faq = [
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
        <Card style={{ padding: '40px', borderRadius: '10px', width: '670px' }}>
            <Text size={28} align="left">Frequently Asked Questions</Text>
            {faq.map((item, index) => (
                <div key={index}>
                    <CardDivider margin={5}></CardDivider>

                    <Button style={{ width: '650px' }} onClick={() => handleToggleContent(index)}>
                        <HStack>
                            <Text size={18}>{item.question}</Text>
                            <Icon icon={contentVisible[index] ? reset : plus}></Icon>
                        </HStack>
                    </Button>
                    <div style={{ maxWidth: '600px' }}>
                        {contentVisible[index] && (
                            <Text size={12}>{item.answer}</Text>
                        )}
                    </div>
                </div>
            ))}
        </Card>
    );
}
