import {
    Icon,
    Button,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,

} from "@wordpress/components";
import { arrowRight } from "@wordpress/icons";

export default function HeroSection() {
    return (
        <VStack 
            spacing={4} 
            alignment="center" 
            style={{ 
                width: '100vw',
                backgroundColor: '#FFF6FA', 
                padding: '100px' 
                }}>
            <Text size={30} align="center" style={{ maxWidth: '500px', fontWeight: '500' }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Text align="center" style={{ maxWidth: '380px', }}>
                    Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley
                    of type and scrambled it to make a type specimen book.
                </Text>
            </div>
            <HStack alignment="center">
                <Button
                    variant="primary"
                    style={{
                        borderRadius: '10px',
                        backgroundColor: '#9E1B42',
                        color: '#FFFFFF',
                        padding: '10px 20px',
                    }}>
                    Browse Components
                    <Icon icon={arrowRight}></Icon>
                </Button>
                <Button
                    variant="secondary"
                    style={{
                        border: '2px solid #9E1B42',
                        borderRadius: '10px',
                        backgroundColor: '#FFF6FA',
                        color: '#9E1B42',
                        padding: '10px 20px',
                    }}>
                    Subscribe NewsLetter
                    <Icon icon={arrowRight}></Icon>
                </Button>
            </HStack>
        </VStack>
    );
}