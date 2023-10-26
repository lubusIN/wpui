/**
 * WordPress dependencies.
 */
import {
    Icon,
    __experimentalText as Text,
    __experimentalHStack as HStack,
    __experimentalVStack as VStack,
    __experimentalTreeGrid as TreeGrid,
    __experimentalTreeGridRow as TreeGridRow,
    __experimentalSurface as Surface,
} from "@wordpress/components";
import { box, check, payment, pin, shipping } from "@wordpress/icons";

/**
 * Render Feeds
 */
function Feed1() {

    return (
        <>
            <HStack className="wpui_order_timeline" justify="center">
                <TreeGrid cellSpacing={35}>
                    <TreeGridRow>
                        <HStack>
                            <Surface className="timeline_icon">
                                <Icon size={25} icon={box}></Icon>
                            </Surface>
                            <HStack spacing={10}>
                                <VStack>
                                    <Text size={14}>Order Placed <Text weight={600}>#558454</Text></Text>
                                    <Text size={12}>John Doe placed an order for <Text weight={600}>iPhone 15</Text></Text>
                                </VStack>
                                <Text className="timeline_date">Oct 1 2023</Text>
                            </HStack>
                        </HStack>
                    </TreeGridRow>
                    <TreeGridRow>
                        <HStack>
                            <Surface className="timeline_icon">
                                <Icon size={25} icon={payment}></Icon>
                            </Surface>
                            <HStack spacing={10}>
                                <VStack>
                                    <Text size={14}>Payment Processed</Text>
                                    <Text size={12}>Payment for the order was successfully processed.</Text>
                                </VStack>
                                <Text className="timeline_date">Oct 2 2023</Text>
                            </HStack>
                        </HStack>
                    </TreeGridRow>
                    <TreeGridRow>
                        <HStack>
                            <Surface className="timeline_icon">
                                <Icon size={25} icon={shipping}></Icon>
                            </Surface>
                            <HStack spacing={10}>
                                <VStack>
                                    <Text size={14}>Order Shipped</Text>
                                    <Text size={12}>The ordered items were packaged and shipped.</Text>
                                    <Text size={12}>Tracking ID <Text weight={600}>XYZ123456789</Text></Text>
                                </VStack>
                                <Text className="timeline_date">Oct 4 2023</Text>
                            </HStack>
                        </HStack>
                    </TreeGridRow>
                    <TreeGridRow>
                        <HStack>
                            <Surface className="timeline_icon">
                                <Icon size={25} icon={pin}></Icon>
                            </Surface>
                            <HStack spacing={10}>
                                <Text size={14}>In Transit</Text>
                                <Text className="timeline_date">Oct 6 2023</Text>
                            </HStack>
                        </HStack>
                    </TreeGridRow>
                    <TreeGridRow>
                        <HStack>
                            <Surface className="timeline_icon">
                                <Icon size={25} icon={shipping}></Icon>
                            </Surface>
                            <HStack spacing={10}>
                                <VStack>
                                    <Text size={14}>Out for Delivery</Text>
                                    <Text size={12}>The package has reached the local delivery facility and is out for delivery.</Text>
                                </VStack>
                                <Text className="timeline_date">Oct 8 2023</Text>
                            </HStack>
                        </HStack>
                    </TreeGridRow>
                    <TreeGridRow>
                        <HStack>
                            <Surface style={{ minWidth: 'auto' }}>
                                <Icon size={25} icon={check}></Icon>
                            </Surface>
                            <HStack spacing={10}>
                                <VStack>
                                    <Text size={14}>Delivered</Text>
                                    <Text size={12}>Package was handed to resident</Text>
                                </VStack>
                                <Text className="timeline_date">Oct 10 2023</Text>
                            </HStack>
                        </HStack>
                    </TreeGridRow>
                </TreeGrid>
            </HStack>
            <style>
                {`
                    .wpui_order_timeline .timeline_icon{
                        min-width: auto;
                        position: relative;
                    }
                    .wpui_order_timeline .timeline_icon:after{
                        content: '';
                        position: absolute;
                        width: 2px;
                        height: 30px;
                        left: 50%;
                        top: 100%;
                        transform: translateX(-50%);
                        background-color: #E4E7EB;
                    }
                    .wpui_order_timeline .components-surface svg{
                        border-radius: 100% ;
                        background: #f8f8f8 ;
                        padding: 15px
                    }
                    .wpui_order_timeline .timeline_date{
                        min-width: fit-content;
                    }
                    .wpui_order_timeline table{
                        -webkit-border-horizontal-spacing: 0px;
                    }
                `}
            </style>
        </>
    );
};

export default Feed1;