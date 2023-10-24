import {
    Card,
    Animate,
    Notice,
    CardBody,
    Panel,
    PanelBody,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";


function Slide1() {
    const MyAnimatedNotice = () => (
        <Animate type="slide-in" options={{ origin: 'top' }}>
            <Panel> </Panel>
        </Animate>
    );

    return (
        <MyAnimatedNotice />
    );
}


export default Slide1;