/**
 * External dependencies.
 */
import { useState } from "react";

/**
 * WordPress dependencies.
 */
import {
    plus,
    reset
} from "@wordpress/icons";
import {
    Icon,
    Button,
    CardDivider,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import * as Components from '.';


/**
 * Render FAQs.
 */
function Faq1() {
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
        <>
            <Heading size={28}>Frequently Asked Questions</Heading>
            {
                faqs.map((faq, index) => (
                    <VStack key={index} spacing={2}>
                        <CardDivider marginEnd={4} marginStart={5}></CardDivider>
                        <Button style={{ boxShadow: 'none', padding: '0px' }} onClick={() => handleToggleContent(index)}>
                            <HStack>
                                <Heading size={18} align="left">{faq.question}</Heading>
                                <Icon icon={contentVisible[index] ? reset : plus}></Icon>
                            </HStack>
                        </Button>
                        {contentVisible[index] && (
                            <Text size={16} lineHeight={1.6} color="grey">{faq.answer}</Text>
                        )}
                    </VStack>
                ))
            }
        </>
    );
};

Faq1.meta = {
    title: 'FAQs 1',
    path: '/Faq/faq1',
    component: Components.Faq1
};

export default Faq1;