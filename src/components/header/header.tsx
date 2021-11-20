import React from 'react';
import { AppBar, Container, Typography } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props {
	window?: () => Window;
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
					paddingTop: '10px',
					paddingBottom: '10px',
					transition: 'all 0.25s ease-out',
			  }
			: {
					background: 'transparent',
					paddingTop: '20px',
					paddingBottom: '20px',
					transition: 'all 0.25s ease-out',
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
					</Typography>
				</AppBar>
			</AppBarStylesScroll>
		</React.Fragment>
	);
};

export default Header;
