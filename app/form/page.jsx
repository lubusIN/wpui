"use client"

import {
    Icon,
    Button,
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


export default function Form() {

    return (
        <VStack spacing={10}>
            <VStack>
                <Heading level={3}>Profile</Heading>
                <Text>This information will be displayed publicly so be careful what you share</Text>
            </VStack>
            <TextControl
                label="Username"
                onChange={function noRefCheck() { }}
                placeholder="workation.com/ lubus"
                value=""
            />
            <TextareaControl
                help="Write a few sentences about yourself"
                label="About"
                onChange={function noRefCheck() { }}
                value=""
            />
            <VStack>
                <Heading level={5}>Profile</Heading>
                <HStack alignment="left">
                    <Icon icon={commentAuthorAvatar} size={75}></Icon>
                    <FormFileUpload
                        onChange={function noRefCheck() { }}
                        render={({ openFileDialog }) => <button onClick={openFileDialog}>Change</button>}
                    >
                        Select file
                    </FormFileUpload>
                </HStack>
            </VStack>
            <VStack>
                <Heading level={5}>Cover Photo</Heading>
                <Card variant="dotted">
                    <CardBody>
                        <VStack style={{ alignItems: 'center' }}>
                            <Icon icon={media} style={{ fontSize: '48px' }} />
                            <Text>
                                <FormFileUpload accept="image/*" onChange={() => { }}>
                                    Upload a file
                                </FormFileUpload>
                            </Text>
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
}


