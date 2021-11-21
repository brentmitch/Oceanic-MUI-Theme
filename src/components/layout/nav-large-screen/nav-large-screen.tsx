import { Link } from 'react-router-dom';

const NavLargeScreen: React.FC = () => {
	return (
		<nav>
			<Link to='/'>Home</Link>
			<Link to='/about'>About</Link>
			<Link to='/contact'>Contact</Link>
		</nav>
	);
};

export default NavLargeScreen;
