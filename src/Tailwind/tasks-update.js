import {
    Icon,
    Button,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
    __experimentalTreeGrid as TreeGrid,
    __experimentalTreeGridRow as TreeGridRow,
} from "@wordpress/components";

import { check, commentAuthorAvatar, pin } from "@wordpress/icons";

export default function TaskUpdate() {

    return (
        <TreeGrid
            style={{ width: '50vw' }}
        >
            <TreeGridRow>
                <HStack>
                    <Icon icon={commentAuthorAvatar} ></Icon>
                    <HStack>
                        <Text size={12}>Applied to <Text size={14}>Front End Developer </Text> </Text>
                        <Text>Sep 20</Text>
                    </HStack>
                </HStack>
            </TreeGridRow>
            <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M10 .5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 1 0V1a.5.5 0 0 0-.5-.5Z" clip-rule="evenodd" /></svg>}></Icon>

            <TreeGridRow>
                <HStack>
                    <Icon icon={pin} ></Icon>
                    <HStack>
                        <Text size={12}>Advanced to phone screening by<Text size={14}> Bethany Blake</Text> </Text>
                        <Text>Sep 22</Text>
                    </HStack>
                </HStack>
            </TreeGridRow>
            <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M10 .5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 1 0V1a.5.5 0 0 0-.5-.5Z" clip-rule="evenodd" /></svg>}></Icon>

            <TreeGridRow>
                <HStack>
                    <Icon icon={check} ></Icon>
                    <HStack>
                        <Text size={12}>Completed phone screening with <Text size={14}>Martha Gardner </Text> </Text>
                        <Text>Sep 28</Text>
                    </HStack>
                </HStack>
            </TreeGridRow>
            <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M10 .5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 1 0V1a.5.5 0 0 0-.5-.5Z" clip-rule="evenodd" /></svg>}></Icon>

            <TreeGridRow>
                <HStack>
                    <Icon icon={pin} ></Icon>
                    <HStack>
                        <Text size={12}>Advanced to phone screening by<Text size={14}> Bethany Blake</Text> </Text>
                        <Text>Sep 29</Text>
                    </HStack>
                </HStack>
            </TreeGridRow>
            <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M10 .5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 1 0V1a.5.5 0 0 0-.5-.5Z" clip-rule="evenodd" /></svg>}></Icon>

            <TreeGridRow>
                <HStack>
                    <Icon icon={check} ></Icon>
                    <HStack>
                        <Text size={12}>Completed phone screening with <Text size={14}>Martha Gardner </Text> </Text>
                        <Text>Sep 30</Text>
                    </HStack>
                </HStack>
            </TreeGridRow>
        </TreeGrid>
    );
}