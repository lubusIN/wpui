/**
 * External dependencies.
 */
import { useState } from '@wordpress/element';

/**
 * WordPress dependencies.
 */
import {
	home,
	file,
	calendar,
	pages,
	people,
	commentAuthorAvatar,
} from '@wordpress/icons';

import {
	Icon,
	Card,
	SearchControl,
	NavigableMenu,
	MenuGroup,
	MenuItem,
	__experimentalGrid as Grid,
	__experimentalText as Text,
	__experimentalHStack as HStack,
} from '@wordpress/components';

/**
 * Render Dashboard
 */
function Sidebar3() {
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
						<div style={ { padding: '16px', marginTop: '16px' } }>
							<HStack alignment="left">
								<Icon
									size={ 45 }
									icon={ commentAuthorAvatar }
								></Icon>
								<Text size={ 15 }>Your Name</Text>
							</HStack>
						</div>
					</MenuGroup>
				</NavigableMenu>
			</Card>
			<Card>
				<Card
					variant="grid"
					style={ { margin: '15px', height: '70vh', width: 'auto' } }
				></Card>
			</Card>
		</Grid>
	);
}

export default Sidebar3;
