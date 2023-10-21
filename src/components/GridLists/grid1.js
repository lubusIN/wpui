/**
 * WordPress dependencies.
 */
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

/**
 * Render Cards
 */
function Grid1() {

    const control = [
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

    ];

    return (
        <HStack
            direction={[
                'column',
                'row'
            ]}
            justify={'space-between'}
        >
            <Card style={{ width: '100%', borderRadius: '4px' }}>
                <CardBody isShady>
                    <HStack>
                        <HStack alignment="left">
                            <Icon icon={wordpress}></Icon>
                            <Heading level={5}>Wordpress</Heading>
                        </HStack>
                        <DropdownMenu
                            controls={control}
                            icon={moreHorizontal}
                            onToggle={function noRefCheck() { }}
                        />
                    </HStack>
                </CardBody>
                <CardBody>
                    <HStack>
                        <Text size={15}>Last Invoice</Text>
                        <Text size={15}>December 13,2022</Text>
                    </HStack>
                    <CardDivider margin={3} />
                    <HStack>
                        <Text size={15}>Amount</Text>
                        <HStack justify="right">
                            <Heading level={15}>$2,000.00</Heading>
                            <Heading
                                size={13}
                                color="#981B1B"
                                style={{
                                    backgroundColor: '#FEF1F2',
                                    borderRadius: '5px',
                                    padding: '6px 10px',
                                }}
                            >
                                Overdue
                            </Heading>
                        </HStack>
                    </HStack>
                </CardBody>
            </Card>
            <Card style={{ width: '100%', borderRadius: '4px' }}>
                <CardBody isShady>
                    <HStack>
                        <HStack alignment="left">
                            <Icon icon={wordpress}></Icon>
                            <Heading level={5}>Wordpress</Heading>
                        </HStack>
                        <DropdownMenu
                            controls={control}
                            icon={moreHorizontal}
                            onToggle={function noRefCheck() { }}
                        />
                    </HStack>
                </CardBody>
                <CardBody>
                    <HStack alignment="edge">
                        <Text size={15}>Last Invoice</Text>
                        <Text size={15}>January 22,2023</Text>
                    </HStack>
                    <CardDivider margin={3} />
                    <HStack>
                        <Text size={15}>Amount</Text>
                        <HStack alignment="right">
                            <Heading level={15}>$14,000.00</Heading>
                            <Heading
                                size={13}
                                color="#166434"
                                style={{
                                    backgroundColor: '#EFFDF4',
                                    borderRadius: '5px',
                                    padding: '6px 10px',
                                }}
                            >
                                Paid
                            </Heading>
                        </HStack>
                    </HStack>
                </CardBody>
            </Card>
            <Card style={{ width: '100%', borderRadius: '4px' }}>
                <CardBody isShady>
                    <HStack>
                        <HStack alignment="left">
                            <Icon icon={wordpress}></Icon>
                            <Heading level={5}>Wordpress</Heading>
                        </HStack>
                        <DropdownMenu
                            controls={control}
                            icon={moreHorizontal}
                            onToggle={function noRefCheck() { }}
                        />
                    </HStack>
                </CardBody>
                <CardBody>
                    <HStack alignment="edge">
                        <Text size={15}>Last Invoice</Text>
                        <Text size={15}>January 23,2023</Text>
                    </HStack>
                    <CardDivider margin={3} />
                    <HStack>
                        <Text size={15}>Amount</Text>
                        <HStack alignment="right">
                            <Heading level={15}>$7,000.00</Heading>
                            <Heading
                                size={13}
                                color="#166434"
                                style={{
                                    backgroundColor: '#EFFDF4',
                                    borderRadius: '5px',
                                    padding: '6px 10px',
                                }}
                            >
                                Paid
                            </Heading>
                        </HStack>
                    </HStack>
                </CardBody>
            </Card>
        </HStack>
    );
};

export default Grid1;