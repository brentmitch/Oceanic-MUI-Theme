import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import logo from '../../../images/Turtle-Look.svg';

const HeaderLogo = () => {
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
				<Typography variant='h4' component='h1' color='text.primary'>
					Oceanic Theme
				</Typography>
			</Box>
		</LogoLink>
	);
};

export default HeaderLogo;
