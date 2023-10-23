import {
    Card,
    Animate,
    CardBody,
    Panel,
    PanelBody,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
} from "@wordpress/components";


function Slide2() {
    return (
        <Panel header="Panel title">
            <Animate type="slide-in" options={{ origin: 'top' }}> </Animate>
        </Panel>
    );
}


export default Slide2;