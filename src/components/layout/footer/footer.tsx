import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import footerBackground from '../../../images/footer-waves.png';
import logo from '../../../images/Turtle-Look.svg';

const FooterContainer = styled('footer')({
	backgroundColor: '#fcf3ed',
	backgroundImage: `url(${footerBackground})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: '100%',
	margin: 'auto 0 0 0',
	minHeight: '300px',
	padding: '140px 0 10px 0',
	width: '100%',
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
		</FooterContainer>
	);
};

export default Footer;
