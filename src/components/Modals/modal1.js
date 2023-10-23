/**
 * WordPress dependencies.
 */
import {
    Icon,
    Modal,
    Button,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    __experimentalText as Text,
} from "@wordpress/components";
import { check, } from "@wordpress/icons";
import { useState } from "@wordpress/element";

/**
 * Render Image card.
 */
function Modal1() {
    const MyModal = () => {
        const [isOpen, setOpen] = useState(false);
        const openModal = () => setOpen(true);
        const closeModal = () => setOpen(false);

        return (
            <>
                <Button variant="secondary" onClick={openModal}>
                    Open Modal
                </Button>
                {isOpen && (
                    <Modal title="This is my modal" onRequestClose={closeModal}>
                        <VStack alignment="center">
                            <Icon icon={check}></Icon>
                            <Heading>Payment Successful</Heading>
                            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                            <Button variant="primary">Go back to Dashboard</Button>
                        </VStack>
                    </Modal>
                )}
            </>
        );
    };

    return (
        <MyModal />
    );
}
export default Modal1;



