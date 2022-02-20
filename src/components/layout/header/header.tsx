import React from 'react';
import { AppBar, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import HeaderLogo from './header-logo';
import NavLargeScreen from '../nav-large-screen/nav-large-screen';
import NavSmallScreen from '../nav-small-screen/nav-small-screen';

interface Props {
	children: React.ReactElement;
}

export const HeaderBackground = styled('div')({
	background: 'linear-gradient(rgb(207,234,251), hsla(210, 2%, 99%, 1) 70px)',
	boxShadow:
		'hsla(211, 86%, 65%, 0.4) 0px 10px 15px -10px, hsla(178, 100%, 20%, 0.5) 0px 5px 20px -10px',
	position: 'fixed',
	top: '0',
	left: '0',
	right: '0',
	height: '100px',
	'z-index': '-1',
	opacity: '1',
	transition: 'opacity 0.5s ease-out',
});

function AppBarStylesOnScroll(props: Props) {
	const { children } = props;

	const pageScrollTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		sx: pageScrollTrigger
			? {
					background: 'transparent',
					paddingTop: '10px',
					paddingBottom: '10px',
					transition: 'all 0.35s ease-out',
			  }
			: {
					background: 'transparent',
					paddingTop: '20px',
					paddingBottom: '20px',
					transition: 'all 0.35s ease-in',
			  },
	});
}

const Header: React.FC = () => {
	const scrollTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<React.Fragment>
			<AppBarStylesOnScroll>
				<AppBar position='fixed' elevation={0}>
					<Container>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
							}}
						>
							<HeaderLogo />
							{isSmallScreen ? (
								<NavSmallScreen />
							) : (
								<NavLargeScreen />
							)}
						</Box>
					</Container>
					<HeaderBackground
						sx={{
							opacity: scrollTrigger ? '1' : '0',
							height: scrollTrigger ? '80px' : '100px',
						}}
					></HeaderBackground>
				</AppBar>
			</AppBarStylesOnScroll>
		</React.Fragment>
	);
};

export default Header;
