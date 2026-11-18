/**
 * WordPress dependencies.
 */
import {
	Card,
	CardBody,
	__experimentalText as Text,
	__experimentalHStack as HStack,
	__experimentalVStack as VStack,
	__experimentalGrid as Grid,
	__experimentalHeading as Heading,
	__experimentalSurface as Surface,
} from '@wordpress/components';

/**
 * Render Cards
 */
function GridList3() {
	const users = [
		{
			name: 'Rahul Sharma',
			role: 'Administrator',
			avatar: 'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar3.png',
		},
		{
			name: 'Lalit Rana',
			role: 'Editor',
			avatar: 'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar4.png',
		},
		{
			name: 'Anna Morgan',
			role: 'Author',
			avatar: 'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar5.png',
		},
		{
			name: 'Neha Jain',
			role: 'Contributor',
			avatar: 'https://raw.githubusercontent.com/lubusIN/wpui/main/src/img/avtar/avtar6.png',
		},
	];

	return (
		<Card isBorderless>
			<Grid columns={ [ 1, 2 ] } gap={ 5 }>
				{ users.map( ( user, index ) => (
					<Card key={ index } style={ { borderRadius: '4px' } }>
						<CardBody>
							<HStack spacing={ 3 } alignment="left">
								<Surface
									as={ 'img' }
									src={ user.avatar }
									style={ {
										borderRadius: '100%',
										maxWidth: '45px',
									} }
								/>
								<VStack>
									<Heading level={ 4 } weight={ 500 }>
										{ user.name }
									</Heading>
									<Text size={ 16 } variant="muted">
										{ user.role }
									</Text>
								</VStack>
							</HStack>
						</CardBody>
					</Card>
				) ) }
			</Grid>
		</Card>
	);
}

// @meta-start
GridList3.meta = {
	title: 'GridList 3',
	name: 'GridList3',
	category: 'GridLists',
	path: '/GridLists/gridlist3',
};
// @meta-end

export default GridList3;
