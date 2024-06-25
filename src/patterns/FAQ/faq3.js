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
function Faq3() {

    const faqs = [
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
        <Grid columns={[1, 2]} gap={15} rowGap={60} align="start">
            <VStack spacing={6}>
                <Heading size={24}>Frequently Asked Questions</Heading>
                <Text size={18} lineHeight={1.6} color="grey">
                    Can’t find the answer you’re looking for? Reach out to our customer support team.
                </Text>
            </VStack>
            <VStack spacing={12}>
                {faqs.map((faq, index) => (
                    <VStack key={index} spacing={3}>
                        <Heading size={18} align="left" weight={500} >{faq.question}</Heading>
                        <Text size={16} lineHeight={1.6} color="grey">{faq.answer}</Text>
                    </VStack>
                ))}
            </VStack>
        </Grid>
    );
};

Faq3.meta = {
    title: 'FAQs 3',
    path: '/Faq/faq3',
    component: Components.Faq3
};

export default Faq3;