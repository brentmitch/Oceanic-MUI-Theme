import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Typography } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

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

const Header: React.FC = () => {
	return (
		<React.Fragment>
			<AppBarStylesScroll>
				<AppBar position='fixed'>
					<Typography variant='h4' component='h1' color='black'>
						<Container>Oceanic</Container>
						<nav>
							<Link to='/'>Home</Link>
							<Link to='/about'>About</Link>
							<Link to='/contact'>Contact</Link>
						</nav>
					</Typography>
				</AppBar>
			</AppBarStylesScroll>
		</React.Fragment>
	);
};

export default Header;
