import React from 'react';

import { Box, Container, Typography } from '@mui/material';

import HeroSearchInput from '../hero-search-input/hero-search-input';

const Hero: React.FC<{}> = () => {
	return (
		<Box
			sx={{
				width: '100%',
				marginTop: '-100px',
				paddingTop: '100px',
				height: '320px',
				background:
					'linear-gradient(90deg, rgba(207,234,251,1) 0%, rgba(191,238,236,1) 100%)',
			}}
		>
			<Container
				sx={{
					height: '100%',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						height: '100%',
					}}
				>
					<Box
						sx={{
							width: '50%',
							display: 'flex',
							marginTop: '30px',
							flexDirection: 'column',
						}}
					>
						<Typography variant='h3' component='h1' gutterBottom>
							Find wonders with the Oceanic Theme
						</Typography>
						<HeroSearchInput />
					</Box>
					<Box
						sx={{
							width: '50%',
						}}
					></Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;
