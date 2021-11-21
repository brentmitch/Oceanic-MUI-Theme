import { useState } from 'react';
import {
	Button,
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
			<Drawer
				anchor='right'
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
			>
				<List>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Button href='/'>Home</Button>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Button href='/about'>About</Button>
						</ListItemText>
					</ListItem>
					<ListItem onClick={() => setOpenDrawer(false)}>
						<ListItemText>
							<Button href='/contact'>Contact</Button>
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
