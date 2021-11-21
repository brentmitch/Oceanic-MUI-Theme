import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

const NavSmallScreen: React.FC = () => {
	const [openDrawer, setOpenDrawer] = useState(false);
	return (
		<>
			<Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
				<List>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to='/'>Home</Link>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to='/about'>About</Link>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Link to='/contact'>Contact</Link>
						</ListItemText>
					</ListItem>
				</List>
			</Drawer>
			<IconButton onClick={() => setOpenDrawer(!openDrawer)}>
				<MenuIcon />
			</IconButton>
		</>
	);
};

export default NavSmallScreen;
