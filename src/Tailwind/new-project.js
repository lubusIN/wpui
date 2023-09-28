import {
    Icon,
    Button,
    __experimentalVStack as VStack,
    __experimentalHeading as Heading,
    __experimentalText as Text,
} from "@wordpress/components";


export default function NewProject() {
    return (
        <VStack alignment="center" spacing={3}>
            <Icon size={70} icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 21v-8m-4 4h8m8 7V11c0-1.105-.892-2-1.997-2H17c-2 0-2-3-5-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2Z" /></svg>}></Icon>
            <Heading>No Projects</Heading>
            <Text>Get started by creating a new project</Text>
            <Button icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2v-6Z" /></svg>} variant="primary">
                New Project
            </Button>
        </VStack>
    );
}