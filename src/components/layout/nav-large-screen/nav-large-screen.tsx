import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

const NavList = styled('ul')({
	margin: 0,
	padding: 0,
	position: 'relative',
	listStyle: 'none',
});

const NavListItem = styled('li')({
	padding: 2,
	display: 'inline-block',
	position: 'relative',
	listStyle: 'none',
});

const NavLargeScreen: React.FC = () => {
	return (
		<nav>
			<NavList>
				<NavListItem>
					<Button href='/'>Home</Button>
				</NavListItem>
				<NavListItem>
					<Button href='/about'>About</Button>
				</NavListItem>
				<NavListItem>
					<Button href='/contact'>Contact</Button>
				</NavListItem>
			</NavList>
		</nav>
	);
};

export default NavLargeScreen;
