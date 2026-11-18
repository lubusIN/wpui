/**
 * External dependencies.
 */
import { useState } from 'react';

/**
 * WordPress dependencies.
 */
import { wordpress, commentAuthorAvatar } from '@wordpress/icons';
import {
	Card,
	Icon,
	Button,
	CardBody,
	CardHeader,
	__experimentalHStack as HStack,
	__experimentalHeading as Heading,
} from '@wordpress/components';

/**
 * Render Shell1
 */
function Shell1() {
	const items = [
		{
			name: 'Dashboard',
			slug: 'dashboard',
		},
		{
			name: 'Posts',
			slug: 'posts',
		},
		{
			name: 'Pages',
			slug: 'pages',
		},
		{
			name: 'Comments',
			slug: 'comments',
		},
	];

	const [ activeItem, setActiveItem ] = useState( 'Dashboard' );
	const [ cardBodyContent, setCardBodyContent ] = useState( '' );

	const handleNavigationClick = ( slug, content ) => {
		setActiveItem( slug );
		setCardBodyContent( content );
	};

	return (
		<Card>
			<CardHeader>
				<HStack direction={ [ 'column', 'row' ] } spacing={ 4 }>
					<Icon icon={ wordpress } size={ 35 }></Icon>
					<HStack
						alignment="left"
						spacing={ 2 }
						direction={ [ 'column', 'row' ] }
					>
						{ items.map( ( item, index ) => (
							<Button
								key={ index }
								variant={
									activeItem === item.name
										? 'primary'
										: 'tertiary'
								}
								onClick={ () =>
									handleNavigationClick(
										item.name,
										item.content
									)
								}
							>
								{ item.name }
							</Button>
						) ) }
					</HStack>
				</HStack>
				<HStack alignment="right">
					<Icon
						icon={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
							>
								<g
									fill="none"
									stroke="currentColor"
									strokeWidth="2.5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 19v-9a6 6 0 0 1 6-6v0a6 6 0 0 1 6 6v9M6 19h12M6 19H4m14 0h2m-9 3h2"
									/>
									<circle cx="12" cy="3" r="1" />
								</g>
							</svg>
						}
						size={ 25 }
					></Icon>
					<Icon icon={ commentAuthorAvatar } size={ 35 }></Icon>
				</HStack>
			</CardHeader>
			<CardBody>
				<Heading>{ activeItem }</Heading>
			</CardBody>
			<CardBody>
				<Card variant="grid" style={ { height: '250px' } }>
					<CardBody>{ cardBodyContent }</CardBody>
				</Card>
			</CardBody>
		</Card>
	);
}

export default Shell1;
