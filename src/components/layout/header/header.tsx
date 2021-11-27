import React from 'react';
import { AppBar, Box, Container, useMediaQuery, useTheme } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import HeaderLogo from './header-logo';
import NavLargeScreen from '../nav-large-screen/nav-large-screen';
import NavSmallScreen from '../nav-small-screen/nav-small-screen';

interface Props {
	children: React.ReactElement;
}

function AppBarStylesOnScroll(props: Props) {
	const { children } = props;

	const pageScrollTrigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return React.cloneElement(children, {
		elevation: pageScrollTrigger ? 2 : 0,
		sx: pageScrollTrigger
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

const Header: React.FC = () => {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
	return (
		<React.Fragment>
			<AppBarStylesOnScroll>
				<AppBar position='fixed'>
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
				</AppBar>
			</AppBarStylesOnScroll>
		</React.Fragment>
	);
};

export default Header;
