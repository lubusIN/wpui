/**
 * WordPress dependencies.
 */
import {
    Icon,
    Modal,
    Button,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
    __experimentalText as Text,
} from "@wordpress/components";
import { check, warning, } from "@wordpress/icons";
import { useState } from "@wordpress/element";

/**
 * Render Image card.
 */
function Modal3() {
    const MyModal = () => {
        const [isOpen, setOpen] = useState(false);
        const openModal = () => setOpen(true);
        const closeModal = () => setOpen(false);

        return (
            <>
                <Button variant="secondary" onClick={openModal}>
                    Payment 3
                </Button>
                {isOpen && (
                    <Modal onRequestClose={closeModal}>
                        <VStack spacing={5}>
                            <HStack alignment="topleft">
                                <Icon fill="#DC2B29" size={45} icon={warning}></Icon>
                                <VStack>
                                    <Heading level={4}>Deactivate Account</Heading>
                                    <Text>
                                        Are you sure you want to deactivate your account? All of <br />
                                        your data will be permanently removed from our servers <br />
                                        forever. This action cannot be undone.
                                    </Text>
                                </VStack>
                            </HStack>
                            <HStack alignment="right">
                                <Button variant="secondary">Cancel</Button>
                                <Button style={{ backgroundColor: '#DB2725' }} variant="primary">Deactivate</Button>
                            </HStack>
                        </VStack>
                    </Modal >
                )
                }
            </>
        );
    };

    return (
        <MyModal />
    );
}
export default Modal3;



