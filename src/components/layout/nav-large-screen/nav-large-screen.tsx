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
		borderBottom: '6px solid #fff',
		borderRadius: 3,
		width: '0%',
		position: 'absolute',
		bottom: theme.spacing(0.5),
		left: 10,
		transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)',
		transformOrigin: 'left center',
	},
	'&:hover': {
		transition: 'all 0.3s ease-out',
		'&:before': {
			opacity: 0,
		},
		'&:after': {
			width: '30%',
			left: theme.spacing(3),
			borderBottomColor: theme.palette.primary.main,
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
