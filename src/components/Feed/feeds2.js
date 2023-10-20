/**
 * WordPress dependencies.
 */
import {
    Icon,
    Card,
    CardBody,
    FormFileUpload,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalTreeGrid as TreeGrid,
    __experimentalTreeGridRow as TreeGridRow,
    __experimentalInputControl as InputControl,
    Button,

} from "@wordpress/components";
import { border, check, commentAuthorAvatar, pin } from "@wordpress/icons";

/**
 * Render Feeds
 */
function Feeds2() {

    const line = (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M10 .5a.5.5 0 0 0-.5.5v18a.5.5 0 0 0 1 0V1a.5.5 0 0 0-.5-.5Z" clip-rule="evenodd" /></svg>)

    return (
        <HStack justify="center">
            <TreeGrid>

                <TreeGridRow>
                    <HStack>
                        <Icon icon={border}></Icon>
                        <HStack spacing={10}>
                            <Text size={14} weight={600}>Chelsea Hagon <Text variant="muted" >Created the invoice </Text> </Text>
                            <Text>7d ago</Text>
                        </HStack>
                    </HStack>
                </TreeGridRow>

                <Icon icon={line} />

                <TreeGridRow>
                    <HStack>
                        <Icon icon={border}></Icon>
                        <HStack spacing={10}>
                            <Text size={14} weight={600}>Chelsea Hagon <Text variant="muted">Edited the invoice </Text> </Text>
                            <Text>6d ago</Text>
                        </HStack>
                    </HStack>
                </TreeGridRow>

                <Icon icon={line} />

                <TreeGridRow>
                    <HStack>
                        <Icon icon={border}></Icon>
                        <HStack spacing={10}>
                            <Text size={14} weight={600}>Chelsea Hagon <Text variant="muted" >Sent the invoice </Text> </Text>
                            <Text>6d ago</Text>
                        </HStack>
                    </HStack>
                </TreeGridRow>

                <Icon icon={line} />

                <TreeGridRow>
                    <HStack>
                        <Icon icon={commentAuthorAvatar} style={{ marginTop: '-40px' }}></Icon>
                        <Card>
                            <CardBody>
                                <VStack>
                                    <HStack spacing={10}>
                                        <Text size={14} weight={600}>Chelsea Hagon <Text variant="muted">commented</Text> </Text>
                                        <Text>6d ago</Text>
                                    </HStack>
                                    <Text variant="muted">Called client, they reassured me th invoice would be paid by 25th</Text>
                                </VStack>
                            </CardBody>
                        </Card>
                    </HStack>
                </TreeGridRow>

                <Icon icon={line} style={{ marginTop: '-90px', height: '40px' }} />

                <TreeGridRow>
                    <HStack>
                        <Icon icon={border}></Icon>
                        <HStack spacing={10}>
                            <Text size={14} weight={600}>Alex Curren <Text variant="muted" >Viewed the invoice </Text> </Text>
                            <Text>2d ago</Text>
                        </HStack>
                    </HStack>
                </TreeGridRow>

                <Icon icon={line} />

                <TreeGridRow>
                    <HStack>
                        <Icon icon={check} fill="white" size={14} style={{ marginLeft: '3px', border: '0.5px solid', borderRadius: '15px', backgroundColor: '#5046E5' }}></Icon>
                        <HStack spacing={10}>
                            <Text size={14} weight={600}>Alex Curren <Text variant="muted" >Paid the invoice </Text> </Text>
                            <Text>1d ago</Text>
                        </HStack>
                    </HStack>
                </TreeGridRow>

                <TreeGridRow>
                    <HStack alignment="left">
                        <Icon icon={commentAuthorAvatar} style={{ marginTop: '-70px' }}></Icon>
                        <Card style={{ width: "450px", marginTop: '20px' }}>
                            <CardBody>
                                <VStack spacing={8}>
                                    <InputControl placeholder="Add your comment..." />
                                    <HStack>
                                        <FormFileUpload icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="m4.828 10.485l5.657-5.657a3 3 0 0 1 4.243 4.243L8.01 15.788a1.5 1.5 0 0 1-2.121-2.121l6.01-6.01a.5.5 0 1 0-.707-.708l-6.01 6.01a2.5 2.5 0 0 0 3.535 3.536l6.718-6.717A4 4 0 1 0 9.778 4.12L4.12 9.778a.5.5 0 0 0 .707.707Z" /></svg>}></FormFileUpload>
                                        <Button variant="secondary">Comment</Button>
                                    </HStack>
                                </VStack>
                            </CardBody>
                        </Card>
                    </HStack>
                </TreeGridRow>

            </TreeGrid>
        </HStack>
    );
};

export default Feeds2;