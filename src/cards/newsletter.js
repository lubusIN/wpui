/**
 * WordPress dependencies.
 */
import {
    Card,
    Button,
    TextControl,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from "@wordpress/components";

function NewsLetter() {
    return (
        <Card isBorderless variant="secondary" className="wpui_newsletter">
            <VStack className="nl_container" spacing={10}>
                <Heading level={2} align="center" weight={500} lineHeight={1.5}>
                    Stay one step ahead by signing up for updates.
                </Heading>
                <HStack alignment="stretch" spacing={3}>
                    <TextControl
                        className="nl_input"
                        __nextHasNoMarginBottom
                        placeholder="Enter your email"
                    />
                    <Button
                        icon={<svg width="18" height="20" viewBox="0 0 18 20" fill="none" color="#f5f5f5" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.83333 1.66663L1.5 11.6666H9L8.16667 18.3333L16.5 8.33329H9L9.83333 1.66663Z" stroke="#a6a6a6" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>}
                        variant="primary"
                    >
                        Subscribe me
                    </Button>
                </HStack>
            </VStack>
        </Card>

    );
};

export default NewsLetter;