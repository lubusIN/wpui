/**
 * External dependencies.
 */
import { useState } from '@wordpress/element';

/**
 * WordPress dependencies.
 */
import { cog, home, file, calendar, pages, people } from '@wordpress/icons';

import {
	Card,
	Button,
	CardBody,
	SearchControl,
	NavigableMenu,
	MenuGroup,
	MenuItem,
	__experimentalGrid as Grid,
	__experimentalVStack as VStack,
	__experimentalText as Text,
	__experimentalHeading as Heading,
	__experimentalHStack as HStack,
} from '@wordpress/components';

/**
 * Render Dashboard
 */
function Sidebar1() {
	const [ activeItem, setActiveItem ] = useState( 'dashboard' );
	const [ search, setSearch ] = useState( '' );

	const items = [
		{
			name: 'Dashboard',
			slug: 'dashboard',
			icon: home,
		},
		{
			name: 'Teams',
			slug: 'teams',
			icon: people,
		},
		{
			name: 'Projects',
			slug: 'projects',
			icon: file,
		},
		{
			name: 'Calendar',
			slug: 'calendar',
			icon: calendar,
		},
		{
			name: 'Documents',
			slug: 'documents',
			icon: pages,
		},
	];

	return (
		<Grid columns={ 2 } templateColumns="1fr 3fr">
			<Card>
				<div style={ { padding: '16px 16px 0 16px' } }>
					<SearchControl
						__nextHasNoMarginBottom
						value={ search }
						onChange={ setSearch }
						placeholder="Search..."
					/>
				</div>
				<NavigableMenu>
					<MenuGroup label="Home">
						{ items
							.filter(
								( item ) =>
									! search ||
									item.name
										.toLowerCase()
										.includes( search.toLowerCase() )
							)
							.map( ( item, index ) => (
								<MenuItem
									key={ index }
									icon={ item.icon }
									iconPosition="left"
									isSelected={ activeItem === item.slug }
									onClick={ () => setActiveItem( item.slug ) }
								>
									{ item.name }
								</MenuItem>
							) ) }
					</MenuGroup>
					<MenuGroup label="Clients">
						<MenuItem
							iconPosition="left"
							isSelected={ activeItem === 'heroicons' }
							onClick={ () => setActiveItem( 'heroicons' ) }
						>
							HeroIcons
						</MenuItem>
						<MenuItem
							iconPosition="left"
							isSelected={ activeItem === 'tailwind' }
							onClick={ () => setActiveItem( 'tailwind' ) }
						>
							Tailwind
						</MenuItem>
						<MenuItem
							iconPosition="left"
							isSelected={ activeItem === 'workations' }
							onClick={ () => setActiveItem( 'workations' ) }
						>
							Workations
						</MenuItem>
					</MenuGroup>
					<MenuGroup>
						<MenuItem
							icon={ cog }
							iconPosition="left"
							isSelected={ activeItem === 'settings' }
							onClick={ () => setActiveItem( 'settings' ) }
						>
							Settings
						</MenuItem>
					</MenuGroup>
				</NavigableMenu>
			</Card>
			<Card>
				<VStack expanded>
					<CardBody>
						<VStack spacing={ 12 }>
							<VStack spacing={ 3 }>
								<Text size={ 15 } align="center">
									From the House of LUBUS
								</Text>
								<Heading
									size={ 40 }
									align="center"
									lineHeight={ 1.3 }
									weight={ 500 }
								>
									Lorem Ipsum is simply dummy text of <br />{ ' ' }
									the printing and typesetting industry.
								</Heading>
								<Text
									size={ 16 }
									align="center"
									lineHeight={ 1.5 }
								>
									Lorem Ipsum has been the industry&apos;s
									standard dummy text ever since the <br />{ ' ' }
									1500s, when an unknown printer took a galley
									of type and scrambled it to <br /> make a
									type specimen book.
								</Text>
							</VStack>
							<HStack alignment="center">
								<Button variant="primary" isPressed>
									Browse Components
								</Button>
								<Button>Subscribe NewsLetter</Button>
							</HStack>
						</VStack>
					</CardBody>
				</VStack>
			</Card>
		</Grid>
	);
}

export default Sidebar1;
