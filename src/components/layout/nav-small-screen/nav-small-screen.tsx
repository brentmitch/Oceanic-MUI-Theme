import { useState } from 'react';
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
} from '@mui/material';
import { styled } from '@mui/system';

import MenuIcon from '@mui/icons-material/Menu';

const MenuWrapper = styled('nav')(({ theme }) => ({
	width: '50vw',
	[theme.breakpoints.down('sm')]: {
		width: '90vw',
	},
	'&  li': {
		paddingTop: 0,
		paddingBottom: 0,
	},
	'& a, button': {
		fontFamily: '"Sora", "Roboto", "Helvetica", "Arial", sans-serif',
		fontWeight: 500,
	},
}));

const NavSmallScreen = () => {
	const [openDrawer, setOpenDrawer] = useState(false);
	return (
		<>
			<Drawer
				anchor='right'
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
			>
				<MenuWrapper>
					<List>
						<ListItem onClick={() => setOpenDrawer(false)}>
							<ListItemText>
								<ListItemButton component='a' href='/'>
									Home
								</ListItemButton>
							</ListItemText>
						</ListItem>
						<ListItem onClick={() => setOpenDrawer(false)}>
							<ListItemText>
								<ListItemButton component='a' href='/about'>
									About
								</ListItemButton>
							</ListItemText>
						</ListItem>
						<ListItem onClick={() => setOpenDrawer(false)}>
							<ListItemText>
								<ListItemButton component='a' href='/contact'>
									Contact
								</ListItemButton>
							</ListItemText>
						</ListItem>
					</List>
				</MenuWrapper>
			</Drawer>
			<IconButton onClick={() => setOpenDrawer(!openDrawer)}>
				<MenuIcon />
			</IconButton>
		</>
	);
};

export default NavSmallScreen;
