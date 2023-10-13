/**
 * WordPress dependencies.
 */
import {
    Icon,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalTreeGrid as TreeGrid,
    __experimentalTreeGridRow as TreeGridRow,
    __experimentalSurface as Surface,
} from "@wordpress/components";
import { check, commentAuthorAvatar, pin } from "@wordpress/icons";

/**
 * Render Feeds
 */
function Feeds() {

    const line = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M10 .5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 1 0V1a.5.5 0 0 0-.5-.5Z" clip-rule="evenodd" /></svg>)

    return (
        <HStack justify="center">
            <TreeGrid>
                <TreeGridRow>
                    <HStack>
                        <Icon icon={commentAuthorAvatar}></Icon>
                        <HStack spacing={10}>
                            <Text size={14}>Applied to <Text weight={600}>Front End Developer </Text> </Text>
                            <Text>Sep 20</Text>
                        </HStack>
                    </HStack>
                </TreeGridRow>
                <Icon icon={line} />
                <TreeGridRow>
                    <HStack>
                        <Icon icon={pin}></Icon>
                        <HStack spacing={10}>
                            <Text size={14}>Advanced to phone screening by<Text size={14} weight={600}> Bethany Blake</Text> </Text>
                            <Text>Sep 22</Text>
                        </HStack>
                    </HStack>
                </TreeGridRow>
                <Icon icon={line} />
                <TreeGridRow>
                    <HStack>
                        <Icon icon={check}></Icon>
                        <HStack spacing={10}>
                            <Text size={14}>Completed phone screening with <Text weight={600}>Martha Gardner </Text> </Text>
                            <Text>Sep 28</Text>
                        </HStack>
                    </HStack>
                </TreeGridRow>
                <Icon icon={line} />
                <TreeGridRow>
                    <HStack>
                        <Icon icon={pin}></Icon>
                        <HStack spacing={10}>
                            <Text size={14}>Advanced to phone screening by<Text weight={600}> Bethany Blake</Text> </Text>
                            <Text>Sep 29</Text>
                        </HStack>
                    </HStack>
                </TreeGridRow>
                <Icon icon={line} />
                <TreeGridRow>
                    <HStack>
                        <Icon icon={check}></Icon>
                        <HStack spacing={10}>
                            <Text size={14}>Completed phone screening with <Text weight={600}>Martha Gardner </Text> </Text>
                            <Text>Sep 30</Text>
                        </HStack>
                    </HStack>
                </TreeGridRow>
            </TreeGrid>
        </HStack>
    );
};

export default Feeds;