import { alpha } from '@mui/material/styles';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const NavList = styled('ul')({
	margin: 0,
	padding: 0,
	position: 'relative',
	listStyle: 'none',
});

const NavListItem = styled('li')(({ theme }) => ({
	padding: 2,
	display: 'inline-block',
	position: 'relative',
	listStyle: 'none',
	'&:after': {
		content: '""',
		borderBottom: `${theme.spacing(1)} solid transparent`,
		borderRadius: '50%',
		width: '0',
		position: 'absolute',
		bottom: theme.spacing(0),
		left: 10,
		transition: 'all 0.3s cubic-bezier(0.36, 0, 0.66, -0.56)',
		transformOrigin: 'left center',
	},
	'&:hover': {
		transition: 'all 0.3s ease-out',
		'&:before': {
			opacity: 0,
		},
		'&:after': {
			width: theme.spacing(4.5),
			left: theme.spacing(3),
			bottom: theme.spacing(0.5),
			borderBottomColor: theme.palette.primary.main,
			transition: 'all 0.2s cubic-bezier(0.36, 0, 0.66, -0.56)',
		},
	},
	'& button, & a': {
		paddingLeft: theme.spacing(2.5),
		paddingRight: theme.spacing(2.5),
		borderRadius: 20,
		fontSize: 16,
		textTransform: 'capitalize',
		color: theme.palette.text.primary,
		'&:hover': {
			background: alpha(theme.palette.primary.main, 0.08),
		},
	},
}));

const NavLargeScreen = () => {
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
