import React from 'react';

import { InputBase, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const HeroSearchInput: React.FC<{}> = () => {
	return (
		<InputBase
			sx={{
				width: '100%',
				background: 'white',
				padding: '6px',
				borderRadius: '24px',
				border: '2px solid transparent',
				transition: '0.2s ease-in',
				'&:hover': {
					borderColor: 'primary.main',
				},
			}}
			startAdornment={
				<InputAdornment position='start' sx={{ marginLeft: '10px' }}>
					<SearchIcon />
				</InputAdornment>
			}
			placeholder='Search for a wonder'
			inputProps={{
				'aria-label': 'Search for a wonder',
			}}
		/>
	);
};

export default HeroSearchInput;
