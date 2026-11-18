/**
 * WordPress dependencies.
 */
import {
	Card,
	Button,
	CardBody,
	Flex,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	__experimentalZStack as ZStack,
	__experimentalHeading as Heading,
} from '@wordpress/components';
import {
	home,
	cog,
	plugins,
	key,
	external,
	trendingUp,
	close,
	menu,
} from '@wordpress/icons';
import { useViewportMatch } from '@wordpress/compose';

/**
 * Internal dependencies.
 */
import React, { useState } from 'react';

/**
 * Render Shell 2
 */
function Shell2() {
	const isDesktop = useViewportMatch( 'medium', '>=' );
	const isMobile = useViewportMatch( 'medium', '<' );
	const [ activeButton, setActiveButton ] = useState( 'dashboard' );
	const [ showButtons, setShowButtons ] = useState( false );

	const navigationItems = [
		{ key: 'dashboard', label: 'Dashboard', icon: home },
		{ key: 'settings', label: 'Settings', icon: cog },
		{ key: 'addons', label: 'Addons', icon: plugins },
		{ key: 'license', label: 'License', icon: key },
		{ key: 'support', label: 'Support', icon: external },
	];

	const handleButtonClick = ( buttonKey ) => {
		setActiveButton( buttonKey );
	};

	const renderMenuList = () => (
		<VStack spacing={ 2 } style={ { padding: '0 8px' } }>
			{ navigationItems.map( ( item ) => {
				const isActive = activeButton === item.key;
				return (
					<Button
						key={ item.key }
						variant={ isActive ? 'primary' : 'tertiary' }
						icon={ item.icon }
						onClick={ () => handleButtonClick( item.key ) }
						style={ {
							width: '100%',
							justifyContent: 'flex-start',
							borderRadius: '6px',
							padding: '10px 14px',
							height: 'auto',
							boxShadow: 'none',
							border: 'none',
							color: isActive ? '#ffffff' : '#cbd5e1',
							backgroundColor: isActive
								? undefined
								: 'transparent',
						} }
					>
						{ item.label }
					</Button>
				);
			} ) }
		</VStack>
	);

	const activeItem =
		navigationItems.find( ( item ) => item.key === activeButton ) ||
		navigationItems[ 0 ];

	return (
		<>
			<Card
				style={ {
					backgroundColor: '#1c1e24',
					padding: '5px',
					borderRadius: '5px',
				} }
			>
				<Flex
					expanded={ false }
					gap={ 1 }
					align="top"
					direction={ [ 'column', 'row' ] }
				>
					<CardBody
						style={ {
							width: isDesktop ? '280px' : '100%',
							padding: '0px',
						} }
					>
						<VStack spacing={ 15 } style={ { marginTop: '15px' } }>
							<HStack
								style={ {
									marginLeft: '8px',
									marginBottom: isDesktop ? '' : '10px',
								} }
							>
								<img
									width="120px"
									style={ { minWidth: 'auto' } }
									src="https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/Logo(2).png"
									alt="Logo"
								/>
								{ isMobile && (
									<Button
										icon={ showButtons ? close : menu }
										onClick={ () =>
											setShowButtons(
												( prevState ) => ! prevState
											)
										}
										style={ {
											marginRight: '8px',
											color: 'white',
										} }
									></Button>
								) }
							</HStack>
							{ isDesktop && renderMenuList() }
						</VStack>
					</CardBody>
					<ZStack isReversed style={ { width: '100%' } }>
						{ isMobile && showButtons && renderMenuList() }
						<CardBody
							size="large"
							style={ {
								padding: '0px',
								height: isDesktop ? '720px' : '500px',
								width: '100%',
								backgroundColor: 'white',
								borderRadius: '5px',
							} }
						>
							<HStack
								expanded={ false }
								style={ {
									borderBottom: '1px solid #D8D8D8',
									padding: '15px 30px',
								} }
							>
								<Heading>{ activeItem.label }</Heading>
								<Button variant="primary" icon={ trendingUp }>
									Go Pro
								</Button>
							</HStack>
							{ /* Display your Content Here */ }
						</CardBody>
					</ZStack>
				</Flex>
			</Card>
			<style>
				{ `
                    .components-z-stack > div{
                        width: 100%;
                    }
                ` }
			</style>
		</>
	);
}

// @meta-start
Shell2.meta = {
	title: 'Shell 2',
	name: 'Shell2',
	category: 'Shells',
	path: '/Shells/shell2',
};
// @meta-end

export default Shell2;
