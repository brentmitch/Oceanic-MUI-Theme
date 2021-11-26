import React from 'react';
import { styled } from '@mui/system';
import { Box, Container, Typography } from '@mui/material';
import footerBackground from '../../../images/footer-waves.png';
import logo from '../../../images/Turtle-Look.svg';

const FooterBackground = styled('div')({
	margin: 0,
	padding: '140px 0 10px 0',
	width: '100%',
	minHeight: '300px',
	backgroundColor: '#fcf3ed',
	backgroundSize: '100%',
	backgroundRepeat: 'no-repeat',
	backgroundImage: `url(${footerBackground})`,
});

function Copyright() {
	return (
		<Typography variant='body2' display='block' color='textSecondary'>
			&copy;&nbsp; Brent Mitchell
		</Typography>
	);
}

const LogoImage = styled('img')({
	width: '40px',
	marginRight: '4px',
});

const Footer: React.FC = () => {
	return (
		<FooterBackground>
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
		</FooterBackground>
	);
};

export default Footer;
