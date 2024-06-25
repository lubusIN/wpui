/**
 * External dependencies.
 */
import { useState } from "react";

/**
 * WordPress dependencies.
 */
import {
    Button,
    Card,
    CheckboxControl,
    __experimentalScrollable as Scrollable,
    __experimentalTreeGrid as TreeGrid,
    __experimentalTreeGridRow as TreeGridRow,
    __experimentalTreeGridCell as TreeGridCell,
    __experimentalText as Text,
    __experimentalVStack as VStack,
    __experimentalHStack as HStack,
    __experimentalHeading as Heading,
} from "@wordpress/components";
import * as Components from '.';

/**
 * Render Users Table
 */
function Table2() {

    const [isCheckedAll, setCheckedAll] = useState(false);
    const [checkedItems, setCheckedItems] = useState({});

    const handleCheckboxChangeAll = () => {
        setCheckedAll(!isCheckedAll);
        const newCheckedItems = {};
        products.forEach((_, index) => {
            newCheckedItems[index] = !isCheckedAll;
        });
        setCheckedItems(newCheckedItems);
    };

    const handleCheckboxChange = (index) => {
        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [index]: !prevCheckedItems[index],
        }));
    };

    const products = [
        {
            name: 'Laptop - Model X',
            category: 'Electronics',
            price: 999.99,
            quanity: 50,
            desc: 'Powerful laptop with advanced features for professional use.',
        },
        {
            name: 'Smartphone - Galaxy 20',
            category: 'Electronics',
            price: 599.99,
            quanity: 100,
            desc: 'Sleek smartphone with high-quality camera and fast performance.',
        },
        {
            name: "Men's Watch - Chrono",
            category: 'Fashion',
            price: 149.99,
            quanity: 75,
            desc: 'Elegant men\'s watch with chronograph functionality.',
        },
        {
            name: 'Blender - Pro Series',
            category: 'Home Appliances',
            price: 79.99,
            quanity: 30,
            desc: 'Professional-grade blender for smoothies and more.',
        },
        {
            name: 'Running Shoes - SpeedFit',
            category: 'Sports & Outdoors',
            price: 129.99,
            quanity: 40,
            desc: 'Comfortable running shoes designed for speed and agility.',
        },
    ];

    return (
        <VStack spacing={10} >
            <HStack direction={['column', 'row']} alignment="start" justify="space-between">
                <VStack>
                    <Heading level={3} >Products</Heading>
                    <Text size={14} variant="muted">A comprehensive overview of our featured products, including electronics, fashion, home appliances, and more.</Text>
                </VStack>
                <Button variant="primary" style={{ minWidth: 'auto' }}>Export</Button>
            </HStack>

            <Card style={{ borderRadius: '4px' }}>
                <Scrollable scrollDirection="x">
                    <TreeGrid className="wpui_table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <TreeGridRow>
                            <TreeGridCell withoutGridItem style={{ paddingRight: '0px', width: '20px' }}>
                                <CheckboxControl
                                    __nextHasNoMarginBottom
                                    checked={isCheckedAll}
                                    onChange={handleCheckboxChangeAll}
                                />
                            </TreeGridCell>
                            <TreeGridCell withoutGridItem>
                                <Heading level={4}>Name</Heading>
                            </TreeGridCell>
                            <TreeGridCell withoutGridItem>
                                <Heading level={4}>Category</Heading>
                            </TreeGridCell>
                            <TreeGridCell withoutGridItem>
                                <Heading level={4}>Quantity</Heading>
                            </TreeGridCell>
                            <TreeGridCell withoutGridItem>
                                <Heading level={4}>Price</Heading>
                            </TreeGridCell>
                        </TreeGridRow>
                        {products.map((product, index) => (
                            <TreeGridRow key={index} style={{ borderTop: '1px solid rgba(0 0 0 / 0.1)' }}>
                                <TreeGridCell style={{ paddingRight: '0px' }}>
                                    {(props) => (
                                        <CheckboxControl
                                            __nextHasNoMarginBottom
                                            checked={checkedItems[index] || false}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                    )}
                                </TreeGridCell>
                                <TreeGridCell>
                                    {(props) => (
                                        <HStack alignment="left">
                                            <VStack>
                                                <Heading level={5}>{product.name}</Heading>
                                                <Text>{product.desc}</Text>
                                            </VStack>
                                        </HStack>
                                    )}
                                </TreeGridCell>
                                <TreeGridCell>
                                    {(props) => (
                                        <Text size={15}>{product.category}</Text>
                                    )}
                                </TreeGridCell>
                                <TreeGridCell>
                                    {(props) => (
                                        <Text size={15}>{product.quanity}</Text>
                                    )}
                                </TreeGridCell>
                                <TreeGridCell>
                                    {(props) => (
                                        <Text>${product.price}</Text>
                                    )}
                                </TreeGridCell>
                            </TreeGridRow>
                        ))}
                    </TreeGrid>
                </Scrollable>
            </Card>

            <style>
                {`
                    td{
                        padding: 18px;
                    }
                    @media only screen and (max-width: 480px){
                        .wpui_table{
                             width: 600px !important
                        }
                     }
               `}
            </style>
        </VStack>
    );
};

Table2.meta = {
    title: 'Table 2',
    path: '/Tables/table2',
    component: Components.Table2
};

export default Table2;