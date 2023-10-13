/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
    Icon,
    Card,
    CardBody,
    DropZone,
    TextControl,
    TextareaControl,
    FormFileUpload,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import { commentAuthorAvatar, media } from "@wordpress/icons";

/**
 * Render Profile Form
 */
function Form() {

    return (
        <VStack spacing={10}>
            <VStack>
                <Heading level={3}>Profile</Heading>
                <Text>This information will be displayed publicly so be careful what you share</Text>
            </VStack>
            <TextControl
                label={__("Username")}
                placeholder="workation.com/ lubus"
                onChange={function noRefCheck() { }}
            />
            <TextareaControl
                label={__("About")}
                help="Write a few sentences about yourself"
                onChange={function noRefCheck() { }}
            />
            <VStack>
                <Heading level={4}>Photo</Heading>
                <HStack alignment="left">
                    <Icon icon={commentAuthorAvatar} size={55}></Icon>
                    <FormFileUpload
                        variant="primary"
                        isPressed
                        accept="image/*"
                        onChange={function noRefCheck() { }}
                    >
                        Change
                    </FormFileUpload>
                </HStack>
            </VStack>
            <VStack>
                <Heading level={4}>Cover Photo</Heading>
                <Card variant="dotted">
                    <CardBody>
                        <VStack style={{ alignItems: 'center' }}>
                            <Icon icon={media} style={{ fontSize: '48px' }} />
                            <FormFileUpload accept="image/*" onChange={function noRefCheck() { }}>
                                Upload a file
                            </FormFileUpload>
                            <Text>or drag and drop PNG, JPG, GIF up to 10mb</Text>
                        </VStack>
                    </CardBody>
                    <DropZone
                        onDrop={function noRefCheck() { }}
                        onFilesDrop={function noRefCheck() { }}
                        onHTMLDrop={function noRefCheck() { }}
                    />
                </Card>
            </VStack>
        </VStack>
    );
};

export default Form;


