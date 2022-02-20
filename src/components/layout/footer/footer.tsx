import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

import logo from '../../../images/Turtle-Look.svg';

import { FooterWave1, FooterWave3, FooterWave2 } from '../waves';

const FooterContainer = styled('footer')({
	position: 'relative',
	width: '100%',
	margin: 'auto 0 0 0',
	padding: '0 0 30px 0',
	backgroundColor: 'rgba(207,234,251,1)',
});

function Copyright() {
	return (
		<Typography variant='body2' display='block' color='textSecondary'>
			&copy;&nbsp; Brent Mitchell
		</Typography>
	);
}

const LogoImage = styled('img')({
	marginRight: '4px',
	width: '40px',
});

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<FooterWave2 />
			<FooterWave3 />
			<FooterWave1 />
			<Container>
				<Box sx={{ display: 'flex', alignItems: 'center' }}>
					<LogoImage src={logo} alt='Oceanic' />
					<Typography
						variant='h6'
						component='div'
						color='textSecondary'
					>
						Oceanic
					</Typography>
				</Box>
				<Copyright />
			</Container>
		</FooterContainer>
	);
};

export default Footer;
