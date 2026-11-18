/**
 * WordPress dependencies.
 */
import {
	check,
	people,
	payment,
	receipt,
	postAuthor,
	external,
	mobile,
} from '@wordpress/icons';
import {
	Icon,
	Card,
	Button,
	CardBody,
	__experimentalText as Text,
	__experimentalGrid as Grid,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	__experimentalHeading as Heading,
} from '@wordpress/components';

/**
 * Render Cards
 */
function GridList4() {
	const items = [
		{
			icon: mobile,
			title: 'Responsive Design',
			description:
				'Our WordPress theme ensures a seamless experience across all devices, providing a user-friendly interface on desktops, tablets, and smartphones.',
		},
		{
			icon: check,
			title: 'SEO Optimization',
			description:
				"Boost your website's visibility with our built-in SEO optimization tools. Improve your search engine rankings and attract more organic traffic.",
		},
		{
			icon: people,
			title: 'E-commerce Solutions',
			description:
				'Take your business online with our e-commerce solutions. From secure payment gateways to customizable product pages, we help you build a successful online store.',
		},
		{
			icon: payment,
			title: 'Premium Blog Templates',
			description:
				'Explore a collection of beautifully crafted blog templates, designed to make your content stand out. Choose from a variety of styles to suit your unique taste.',
		},
		{
			icon: receipt,
			title: '24/7 Customer Support',
			description:
				'We pride ourselves on providing exceptional customer support. Our dedicated team is available 24/7 to assist you with any queries or issues you may encounter.',
		},
		{
			icon: postAuthor,
			title: 'One-Click Installation',
			description:
				'Get started in minutes with our easy one-click installation. No technical expertise required – launch your WordPress site effortlessly and focus on what you do best.',
		},
	];

	return (
		<Card isRounded style={ { overflow: 'hidden' } }>
			<Grid
				columns={ [ 1, 2 ] }
				rowGap="1px"
				columnGap="1px"
				style={ { backgroundColor: 'rgba(0, 0, 0, 0.1)' } }
			>
				{ items.map( ( item, index ) => (
					<Card
						key={ index }
						size="large"
						isBorderless
						isRounded={ false }
					>
						<CardBody>
							<VStack spacing={ 8 }>
								<HStack>
									<CardBody
										isShady
										size={ 'XSmall' }
										style={ { borderRadius: '6px' } }
									>
										<Icon size={ 40 } icon={ item.icon } />
									</CardBody>
									<Button
										icon={ external }
										size={ 40 }
										variant="tertiary"
									></Button>
								</HStack>
								<VStack>
									<Heading level={ 4 } weight={ 500 }>
										{ item.title }
									</Heading>
									<Text
										size={ 15 }
										lineHeight={ 1.6 }
										variant="muted"
									>
										{ item.description }
									</Text>
								</VStack>
							</VStack>
						</CardBody>
					</Card>
				) ) }
			</Grid>
		</Card>
	);
}

// @meta-start
GridList4.meta = {
	title: 'GridList 4',
	name: 'GridList4',
	category: 'GridLists',
	path: '/GridLists/gridlist4',
};
// @meta-end

export default GridList4;
