"use client"

import {
    Icon,
    Button,
    TextControl,
    TextareaControl,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    __experimentalText as Text,
    __experimentalHStack as HStack,
} from "@wordpress/components";

import { commentAuthorAvatar } from "@wordpress/icons";


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
                <Heading align="" level={5}>Profile</Heading>
                <HStack alignment="left">
                    <Icon icon={commentAuthorAvatar} size={75}></Icon>
                    <Button variant="secondary">
                        change
                    </Button>
                </HStack>
            </VStack>
        </VStack>
    );
}