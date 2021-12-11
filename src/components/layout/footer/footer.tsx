import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
//import footerBackground from '../../../images/footer-waves.png';
import logo from '../../../images/Turtle-Look.svg';
import footerWaves from '../../../images/footer-waves-6.svg';

const FooterContainer = styled('footer')({
	position: 'relative',
	width: '100%',
	margin: 'auto 0 0 0',
	padding: '0 0 30px 0',
	backgroundColor: 'hsl(34, 100%, 91%)',
});

const FooterTopBorder = styled('div')({
	position: 'absolute',
	top: '-120px',
	left: 0,
	right: 0,
	zIndex: -1,
	width: '100%',
	height: '120px',
	margin: '0',
	padding: '0',
	backgroundImage: `url(${footerWaves})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: '100%',
	backgroundPosition: 'bottom',
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
			<FooterTopBorder />
		</FooterContainer>
	);
};

export default Footer;
