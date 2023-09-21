'use client';

import {
    Card,
    Icon,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from "@wordpress/components";

export default function Charts() {
    return (
        <VStack spacing={7}>
            <Heading align="left">Last 30 Days</Heading>
            <HStack>
                <Card style={{ width: '350px' }}>
                    <CardBody>
                        <HStack alignment="left" spacing={4}>
                            <Icon
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0a4.125 4.125 0 0 1-8.25 0Zm9.75 2.25a3.375 3.375 0 1 1 6.75 0a3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63a13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122Zm15.75.003l-.001.144a2.25 2.25 0 0 1-.233.96a10.088 10.088 0 0 0 5.06-1.01a.75.75 0 0 0 .42-.643a4.875 4.875 0 0 0-6.957-4.611a8.586 8.586 0 0 1 1.71 5.157v.003Z" /></svg>}
                                color="blue"
                                size={60}
                            ></Icon>
                            <VStack>
                                <Text size={20}>Total subscribers</Text>
                                <HStack>
                                    <Heading level={1}>71,897</Heading>
                                    <HStack alignment="right">
                                        <Icon
                                            color="green"
                                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M202.83 114.83a4 4 0 0 1-5.66 0L132 49.66V216a4 4 0 0 1-8 0V49.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66Z" /></svg>}
                                        ></Icon>
                                        <Text color="green">122</Text>
                                    </HStack>
                                </HStack>
                            </VStack>
                        </HStack>
                    </CardBody>
                    <CardBody>
                        <Heading color="blue" level={4}>View all</Heading>
                    </CardBody>
                </Card>
                <Card style={{ width: '350px' }}>
                    <CardBody>
                        <HStack alignment="left" spacing={4}>
                            <Icon
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 10l6.108 4.612l.002.002c.678.497 1.017.746 1.389.842a2 2 0 0 0 1.002 0c.372-.096.712-.346 1.392-.844L20 10m-.2-.96l-5.599-4.483c-.695-.557-1.043-.835-1.43-.946a2.001 2.001 0 0 0-1.046-.014c-.389.1-.744.368-1.454.905L4.27 9.04c-.466.352-.699.528-.867.75a2 2 0 0 0-.327.658C3 10.716 3 11.008 3 11.592V17.8c0 1.12 0 1.68.218 2.108c.192.377.497.682.874.874c.427.218.987.218 2.105.218h11.606c1.118 0 1.677 0 2.104-.218c.377-.192.683-.498.875-.874c.218-.427.218-.987.218-2.105v-6.277c0-.557 0-.837-.071-1.096a2.003 2.003 0 0 0-.31-.642c-.159-.22-.378-.396-.819-.749Z" /></svg>}
                                color="blue"
                                size={60}
                            ></Icon>
                            <VStack>
                                <Text size={20}>Avg. Open Rate</Text>
                                <HStack>
                                    <Heading level={1}>58.16%</Heading>
                                    <HStack alignment="right">
                                        <Icon
                                            color="green"
                                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="M202.83 114.83a4 4 0 0 1-5.66 0L132 49.66V216a4 4 0 0 1-8 0V49.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0l72 72a4 4 0 0 1 0 5.66Z" /></svg>}
                                        ></Icon>
                                        <Text color="green">5.4%</Text>
                                    </HStack>
                                </HStack>
                            </VStack>
                        </HStack>
                    </CardBody>
                    <CardBody>
                        <Heading color="blue" level={4}>View all</Heading>
                    </CardBody>
                </Card>
                <Card style={{ width: '350px' }}>
                    <CardBody>
                        <HStack alignment="left" spacing={4}>
                            <Icon
                                icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225l.569-9.47l5.227 7.917l-3.286-.672ZM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" /></svg>}
                                color="blue"
                                size={60}
                            ></Icon>
                            <VStack>
                                <Text size={20}>Avg. Click Rate</Text>
                                <HStack>
                                    <Heading level={1}>24.57%</Heading>
                                    <HStack alignment="right">
                                        <Icon
                                            color="green"
                                            icon={<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><path fill="currentColor" d="m202.83 146.83l-72 72a4 4 0 0 1-5.66 0l-72-72a4 4 0 0 1 5.66-5.66L124 206.34V40a4 4 0 0 1 8 0v166.34l65.17-65.17a4 4 0 0 1 5.66 5.66Z" /></svg>}
                                        ></Icon>
                                        <Text color="green">3.2%</Text>
                                    </HStack>
                                </HStack>
                            </VStack>
                        </HStack>
                    </CardBody>
                    <CardBody>
                        <Heading color="blue" level={4}>View all</Heading>
                    </CardBody>
                </Card>
            </HStack>
        </VStack>
    );
}