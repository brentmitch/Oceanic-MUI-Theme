import React from 'react';
import { styled } from '@mui/system';
import {
	AppBar,
	Box,
	Container,
	Typography,
	useMediaQuery,
	useTheme,
} from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import NavLargeScreen from '../nav-large-screen/nav-large-screen';
import NavSmallScreen from '../nav-small-screen/nav-small-screen';
import logo from '../../../images/Turtle-Look.svg';
interface Props {
	children: React.ReactElement;
}

function AppBarStylesScroll(props: Props) {
	const { children } = props;

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: trigger ? 2 : 0,
		sx: trigger
			? {
					background: 'hsla(0, 0%, 100%, 1)',
					boxShadow:
						'hsla(211, 86%, 65%, 0.4) 0px 10px 15px -10px, hsla(178, 100%, 20%, 0.5) 0px 10px 30px -10px',
					paddingTop: '10px',
					paddingBottom: '10px',
					transition: 'all 0.25s ease-out',
			  }
			: {
					background: 'transparent',
					paddingTop: '20px',
					paddingBottom: '20px',
					transition: 'all 0.35s ease-in',
			  },
	});
}

const LogoImage = styled('img')({
	width: '60px',
	marginRight: '8px',
});

const Header: React.FC = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<React.Fragment>
			<AppBarStylesScroll>
				<AppBar position='fixed'>
					<Container>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									justifyContent: 'flex-start',
									alignItems: 'center',
								}}
							>
								<LogoImage src={logo} alt='Oceanic' />
								<Typography
									variant='h4'
									component='h1'
									color='black'
								>
									Oceanic
								</Typography>
							</Box>
							{isSmallScreen ? (
								<NavSmallScreen />
							) : (
								<NavLargeScreen />
							)}
						</Box>
					</Container>
				</AppBar>
			</AppBarStylesScroll>
		</React.Fragment>
	);
};

export default Header;
