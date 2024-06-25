/**
 * WordPress dependencies.
 */
import {
    __experimentalGrid as Grid,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import * as Components from '.';


/**
 * Render FAQs.
 */
function Faq2() {

    const faqs = [
        {
            question: "What's the best thing about Switzerland?",
            answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "Why do you never see elephants hiding in trees?",
            answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "Why can't you hear a pterodactyl go to the bathroom?",
            answer: "Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "How do you make holy water?",
            answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "What do you call someone with no body and no nose?",
            answer: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        },
        {
            question: "Why did the invisible man turn down the job offer?",
            answer: "He couldn't see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
        }
    ];

    return (
        <VStack spacing={20}>
            <VStack spacing={6}>
                <Heading size={24}>Frequently Asked Questions</Heading>
                <Text size={16} lineHeight={1.6} color="grey" >Have a different question and can’t find the answer you’re looking for? Reach out to <br /> our support team by sending us an email and we’ll get back to you as soon as we can.</Text>
            </VStack>
            <Grid columns={[1, 2]} gap={15} rowGap={60}>
                {faqs.map((faq, index) => (
                    <VStack key={index} spacing={3}>
                        <Heading size={18} align="left">{faq.question}</Heading>
                        <Text size={16} lineHeight={1.6} color="grey">{faq.answer}</Text>
                    </VStack>
                ))}
            </Grid>
        </VStack>
    );
};

Faq2.meta = {
    title: 'FAQs 2',
    path: '/Faq/faq2',
    component: Components.Faq2
};

export default Faq2;