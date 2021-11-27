import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import logo from '../../../images/Turtle-Look.svg';

const HeaderLogo: React.FC = () => {
	const LogoLink = styled('a')({
		textDecoration: 'none',
	});

	const LogoImage = styled('img')(({ theme }) => ({
		width: '60px',
		marginRight: theme.spacing(0.5),
	}));

	return (
		<LogoLink href='/'>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
			>
				<LogoImage src={logo} alt='Oceanic' />
				<Typography variant='h4' component='h1' color='black'>
					Oceanic
				</Typography>
			</Box>
		</LogoLink>
	);
};

export default HeaderLogo;
