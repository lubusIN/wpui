import React, { useState } from 'react';
import {
    Icon,
    Button,
    CardBody,
    __experimentalText as Text,
    __experimentalHeading as Heading,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
} from "@wordpress/components";
import { check } from "@wordpress/icons";

export default function SelectBox() {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    const isButtonSelected = (buttonIndex) => {
        return selectedButton === buttonIndex;
    };

    return (
        <VStack spacing={4}>
            <Heading align="left" level={3}>Select a mailing list</Heading>

            <HStack spacing={3}>

                <Button style={{ height: '110px' }} onClick={() => handleButtonClick(0)}>
                    <HStack alignment='top'>
                        <VStack>
                            <CardBody>
                                <Heading align='left' level={4}>Newsletter</Heading>
                                <Text>Last message sent an hour ago</Text>
                            </CardBody>
                            <CardBody>
                                <Heading align='left' level={4}>621 users</Heading>
                            </CardBody>
                        </VStack>
                        <div style={{ width: '15px', height: '15px' }}>
                            {isButtonSelected(0) &&
                                <Icon
                                    size={15}
                                    icon={check}
                                    style={{
                                        margin: '15px 0',
                                        border: '1px solid',
                                        borderRadius: '15px',
                                        backgroundColor: 'blue',
                                        color: 'white',
                                    }}
                                />
                            }
                        </div>
                    </HStack>
                </Button>

                <Button style={{ height: '110px' }} onClick={() => handleButtonClick(1)}>
                    <HStack alignment='top'>
                        <VStack>
                            <CardBody>
                                <Heading align='left' level={4}>Existing Customer</Heading>
                                <Text>Last message sent 2 weeks ago</Text>
                            </CardBody>
                            <CardBody>
                                <Heading align='left' level={4}>1200 users</Heading>
                            </CardBody>
                        </VStack>
                        <div style={{ width: '15px', height: '15px' }}>
                            {isButtonSelected(1) &&
                                <Icon
                                    size={15}
                                    icon={check}
                                    style={{
                                        margin: '15px 0',
                                        border: '1px solid',
                                        borderRadius: '15px',
                                        backgroundColor: 'blue',
                                        color: 'white',
                                    }}
                                />
                            }
                        </div>
                    </HStack>
                </Button>

                <Button style={{ height: '110px' }} onClick={() => handleButtonClick(2)}>
                    <HStack alignment='top'>
                        <VStack>
                            <CardBody>
                                <Heading align='left' level={4}>Trial Users</Heading>
                                <Text>Last message sent 4 days ago</Text>
                            </CardBody>
                            <CardBody>
                                <Heading align='left' level={4}>2740 users</Heading>
                            </CardBody>
                        </VStack>

                        <div style={{ width: '15px', height: '15px' }}>
                            {isButtonSelected(2) &&
                                <Icon
                                    size={15}
                                    icon={check}
                                    style={{
                                        margin: '15px 0',
                                        border: '1px solid',
                                        borderRadius: '15px',
                                        backgroundColor: 'blue',
                                        color: 'white',
                                    }}
                                />
                            }
                        </div>
                    </HStack>
                </Button>

            </HStack>
        </VStack>
    );
}

