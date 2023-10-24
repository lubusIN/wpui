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
                    Payment 1
                </Button>
                {isOpen && (
                    <Modal onRequestClose={closeModal}>
                        <VStack alignment="center" spacing={5}>
                            <Icon
                                style={{
                                    border: '0.5px solid #DCFCE6',
                                    borderRadius: '25px',
                                    backgroundColor: '#DCFCE6'
                                }}
                                icon={check}
                                fill="#57BB75"
                                size={50}
                            ></Icon>
                            <Heading>Payment Successful</Heading>
                            <Text align="center" variant="muted">Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.</Text>
                            <Button variant="primary">Go back to Dashboard</Button>
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
export default Modal1;



