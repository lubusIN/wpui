import {
    Card,
    Button,
    TextControl,
    Placeholder,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalText as Text,
} from "@wordpress/components";

export default function Updates() {
    return (
        <Card 
            style={{ 
                width: '100vw',
                boxSizing: 'border-box',
                backgroundColor: '#9E1B42', 
                padding: '60px', 
                borderRadius: '10px'
                }}>
            <HStack spacing={5}>
                <Text size={30} align="left" style={{ maxWidth: '450px', color: 'white', }}>
                    Want product news and updates?
                    Sign up for our newsletter
                </Text>

                <VStack spacing={5}>

                    <div style={{
                        display: 'flex',
                        gap: '5px',
                        border: '1px solid #ffffff',
                        borderRadius: '10px',
                        padding: '12px',
                        marginTop: '20px'
                    }}>
                        <Placeholder
                            style={{
                                backgroundColor: '#9E1B42',
                                color: 'white',
                                fontSize: '15px',
                                border: 'none',
                            }}>
                            Enter your email address
                        </Placeholder>
                        <Button
                            variant="primary"
                            style={{
                                borderRadius: '10px',
                                backgroundColor: '#FFFFFF',
                                color: '#9E1B42',
                                padding: '20px 25px',
                                marginRight: '-8px'
                            }}>
                            Subscribe
                        </Button>
                    </div>

                    <Text style={{ color: 'white' }}>
                        *No ads. No trails. No commitments
                    </Text>
                </VStack>
            </HStack>
        </Card>
    );
}