/**
 * WordPress dependencies.
 */
import { 
    moreHorizontal, 
    edit, 
    seen 
} from "@wordpress/icons";
import {
    Icon,
    Card,
    CardBody,
    CardDivider,
    DropdownMenu,
    __experimentalGrid as Grid,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalSurface as Surface,
} from "@wordpress/components";

/**
 * Render Cards
 */
function Grid1() {

    const control = [
        {
            icon: <Icon icon={seen}></Icon>,
            onClick: function noRefCheck() { },
            title: 'View'
        },
        {
            icon: <Icon icon={edit}></Icon>,
            onClick: function noRefCheck() { },
            title: 'Edit'
        },

    ];

    const status = {
        'Paid': { color: '#166434', backgroundColor: '#EFFDF4', borderRadius: '5px', padding: '6px 10px' },
        'Overdue': { color: '#981B1B', backgroundColor: '#FEF1F2', borderRadius: '5px', padding: '6px 10px' }
    };

    const users = [
        {
            invoice: '001',
            name: 'John Doe',
            amount: '$2,000.00',
            date: 'November 14,2022',
            status: 'Overdue'
        },
        {
            invoice: '002',
            name: 'Jane Smith',
            amount: '$14,000.00',
            date: 'March 20,2023',
            status: 'Paid'
        },
        {
            invoice: '003',
            name: 'Kevin Lee',
            amount: '$7,000.00',
            date: 'April 18,2023',
            status: 'Paid'
        }
    ];

    return (
        <Grid columns={[1, 2, 3]}>
            {users.map((user, index) => (
                <Card key={index} style={{ borderRadius: '4px' }}>
                    <CardBody isShady>
                        <HStack>
                            <HStack alignment="left">
                                <Surface as={'img'} src="https://placehold.co/50" style={{ borderRadius: '100%' }} />
                                <VStack spacing={2}>
                                    <Heading
                                        level={4}
                                        style={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}>
                                        {user.name}
                                    </Heading>
                                    <Text
                                        size={12}
                                        style={{
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}>
                                        INV - {user.invoice}
                                    </Text>
                                </VStack>
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
                            <Text size={15}>Date</Text>
                            <Text size={15}>{user.date}</Text>
                        </HStack>
                        <CardDivider margin={3} />
                        <HStack>
                            <Text size={15}>Amount</Text>
                            <HStack justify="right">
                                <Heading level={15}>{user.amount}</Heading>
                                <Heading
                                    size={13}
                                    color={status[user.status].color}
                                    style={status[user.status]}
                                >
                                    {user.status}
                                </Heading>
                            </HStack>
                        </HStack>
                    </CardBody>
                </Card>
            ))}
        </Grid>
    );
};

export default Grid1;