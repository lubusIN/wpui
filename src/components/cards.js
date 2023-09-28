import {
    Icon,
    Card,
    CardBody,
    DropdownMenu,
    __experimentalHStack as HStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    CardDivider,
} from "@wordpress/components";

import { moreHorizontal, wordpress, addCard, edit, trash } from "@wordpress/icons";

export default function Cards() {
    return (
        
        <HStack alignment="center" >
            <Card>
                <CardBody isShady>
                    <HStack>
                        <HStack alignment="left">
                            <Icon icon={wordpress}></Icon>
                            <Heading level={5}>Wordpress</Heading>
                        </HStack>
                        <DropdownMenu
                            controls={[
                                {
                                    icon: <Icon icon={addCard}></Icon>,
                                    onClick: function noRefCheck() { },
                                    title: 'Add data'
                                },
                                {
                                    icon: <Icon icon={edit}></Icon>,
                                    onClick: function noRefCheck() { },
                                    title: 'Edit data'
                                },
                                {
                                    icon: <Icon icon={trash}></Icon>,
                                    onClick: function noRefCheck() { },
                                    title: 'Delete data'
                                },

                            ]}
                            icon={moreHorizontal}
                            onToggle={function noRefCheck() { }}
                        />
                    </HStack>
                </CardBody>
                <CardBody>
                    <HStack alignment="edge">
                        <Text size={9}>Last Invoice</Text>
                        <Text size={11}>December 13,2022</Text>
                    </HStack>
                    <CardDivider margin={3} />
                    <HStack>
                        <Text size={9}>Amount</Text>
                        <HStack alignment="right">
                            <Heading level={6}>$2,000.00</Heading>
                            <Text
                                size={9}
                                style={{
                                    backgroundColor: '#F7A7A7',
                                    color: 'red',
                                    borderRadius: '5px',
                                    padding: '5px',
                                }}
                            > Overdue</Text>
                        </HStack>
                    </HStack>
                </CardBody>
            </Card>
            <Card>
                <CardBody isShady>
                    <HStack>
                        <HStack alignment="left">
                            <Icon icon={wordpress}></Icon>
                            <Heading level={5}>Wordpress</Heading>
                        </HStack>
                        <DropdownMenu
                            controls={[
                                {
                                    icon: <Icon icon={addCard}></Icon>,
                                    onClick: function noRefCheck() { },
                                    title: 'Add data'
                                },
                                {
                                    icon: <Icon icon={edit}></Icon>,
                                    onClick: function noRefCheck() { },
                                    title: 'Edit data'
                                },
                                {
                                    icon: <Icon icon={trash}></Icon>,
                                    onClick: function noRefCheck() { },
                                    title: 'Delete data'
                                },

                            ]}
                            icon={moreHorizontal}
                            onToggle={function noRefCheck() { }}
                        />
                    </HStack>
                </CardBody>
                <CardBody>
                    <HStack alignment="edge">
                        <Text size={9}>Last Invoice</Text>
                        <Text size={11}>January 22,2023</Text>
                    </HStack>
                    <CardDivider margin={3} />
                    <HStack>
                        <Text size={9}>Amount</Text>
                        <HStack alignment="right">
                            <Heading level={6}>$14,000.00</Heading>
                            <Text
                                size={9}
                                style={{
                                    backgroundColor: '#E8FAC9',
                                    color: 'green',
                                    borderRadius: '5px',
                                    padding: '5px',
                                }}
                            > Paid</Text>
                        </HStack>
                    </HStack>
                </CardBody>
            </Card>
            <Card>
                <CardBody isShady>
                    <HStack>
                        <HStack alignment="left">
                            <Icon icon={wordpress}></Icon>
                            <Heading level={5}>Wordpress</Heading>
                        </HStack>
                        <DropdownMenu
                            controls={[
                                {
                                    icon: <Icon icon={addCard}></Icon>,
                                    onClick: function noRefCheck() { },
                                    title: 'Add data'
                                },
                                {
                                    icon: <Icon icon={edit}></Icon>,
                                    onClick: function noRefCheck() { },
                                    title: 'Edit data'
                                },
                                {
                                    icon: <Icon icon={trash}></Icon>,
                                    onClick: function noRefCheck() { },
                                    title: 'Delete data'
                                },

                            ]}
                            icon={moreHorizontal}
                            onToggle={function noRefCheck() { }}
                        />
                    </HStack>
                </CardBody>
                <CardBody>
                    <HStack alignment="edge">
                        <Text size={9}>Last Invoice</Text>
                        <Text size={11}>January 23,2023</Text>
                    </HStack>
                    <CardDivider margin={3} />
                    <HStack>
                        <Text size={9}>Amount</Text>
                        <HStack alignment="right">
                            <Heading level={6}>$7,600.00</Heading>
                            <Text
                                size={9}
                                style={{
                                    backgroundColor: '#E8FAC9',
                                    color: 'green',
                                    borderRadius: '5px',
                                    padding: '5px',
                                }}
                            > Paid</Text>
                        </HStack>
                    </HStack>
                </CardBody>
            </Card>
        </HStack>

    );
}