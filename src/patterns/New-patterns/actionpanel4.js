/**
 * WordPress dependencies.
 */
import {
    Icon,
    Button,
    Card,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";
import { trendingUp, megaphone, archive } from "@wordpress/icons";

/**
 * Render Subscription action panel
 */
function Actionpanel4() {
    return (
        <>
            <Card className="backgroundimg" style={{ padding: "70px" }}>
                <VStack>
                    <Text style={{ fontSize: "30px", fontWeight: "600" }}>
                        Reach  new customers and increase sales
                    </Text>

                    <HStack expanded={false} alignment="left">
                        <Card isBorderless >
                            <Icon size={50} icon={trendingUp}></Icon>
                        </Card>
                        <Text style={{ fontSize: "18px", fontWeight: "500", color: "grey", justifyContent: "left" }}>
                            Reach customers on other sale channels.
                        </Text>
                    </HStack>

                    <HStack expanded={false} alignment="left">
                        <Card isBorderless >
                            <Icon size={50} icon={megaphone}></Icon>
                        </Card>
                        <Text style={{ fontSize: "18px", fontWeight: "500", color: "grey", justifyContent: "left" }}>
                            Advertise with marketing campaigns.
                        </Text>
                    </HStack>

                    <HStack expanded={false} alignment="left">
                        <Card isBorderless >
                            <Icon size={50} icon={archive}></Icon>
                        </Card>
                        <Text style={{ fontSize: "18px", fontWeight: "500", color: "grey", textAlign: "left", justifyContent: "left" }}>
                            Build with Us.
                        </Text>
                    </HStack>

                    <HStack expanded={false} alignment="left">
                        <Button style={{ padding: "20px", backgroundColor: "#007FFF", color: "white" }}>Create a campaigns</Button>
                        <Button style={{ padding: "20px", color: "#007FFF", border: "2px solid #007FFF" }} >Add channels</Button>
                    </HStack>
                </VStack>
            </Card>
            <style>
                {`
                    .backgroundimg{
                    background-size: cover;
                    background-image: url("https://t4.ftcdn.net/jpg/05/53/32/19/360_F_553321965_tjucJ95pMckQtCSK6oqgJvyvjMkmFhB4.jpg");
                    background-repeat: no-repeat;
                    }
                `}
            </style>
        </>
    );
};

Actionpanel4.meta = {
    title: 'Action Panel 4',
    path: '/New-patterns/actionpanel4',
};
export default Actionpanel4;