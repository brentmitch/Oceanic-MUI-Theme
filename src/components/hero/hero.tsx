import React from 'react';

import { Box, Container, Typography } from '@mui/material';

import HeroSearchInput from '../hero-search-input/hero-search-input';

import { styled } from '@mui/system';

const Wave = styled('div')({
	fontWeight: 'bold',
	border: '1px sold black',
	position: 'absolute',
	left: '0',
	bottom: '0',
	right: '0',
	'&:before': {
		content: '""',
		position: 'absolute',
		left: '0',
		bottom: '0',
		right: '0',
		backgroundRepeat: 'repeat',
		height: '30px',
		backgroundSize: '180px 30px',
		backgroundImage:
			'radial-gradient(ellipse at 90px 0px, transparent 90px, hsla(210, 2%, 99%, 1) 0px)',
	},
});

const Wave50 = styled('div')({
	fontWeight: 'bold',
	border: '1px sold black',
	position: 'absolute',
	left: '0',
	bottom: '0',
	right: '0',
	opacity: '0.5',
	'&:before': {
		content: '""',
		position: 'absolute',
		left: '0',
		bottom: '0',
		right: '0',
		backgroundRepeat: 'repeat',
		height: '20px',
		backgroundPosition: 'bottom 0 right 180px',
		backgroundSize: '180px 20px',
		backgroundImage:
			'radial-gradient(ellipse at 90px 0px, transparent 90px, hsla(210, 2%, 99%, 1) 0px)',
	},
});

const Hero: React.FC<{}> = () => {
	return (
		<Box
			sx={{
				width: '100%',
				marginTop: '-100px', // header height
				marginBottom: 4,
				paddingTop: '100px',
				height: '380px',
				position: 'relative',
				background:
					'linear-gradient(90deg, rgba(207,234,251,1) 0%, rgba(191,238,236,1) 100%)',
			}}
		>
			<Wave />
			<Wave50 />
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
							Numerous oceanic wonders await
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
