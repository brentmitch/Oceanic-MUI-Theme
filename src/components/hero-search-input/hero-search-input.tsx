import React from 'react';

import { InputBase, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type Props = {
	width?: string;
	placeholderText?: string;
};

const HeroSearchInput: React.FC<Props> = ({
	width = '100%',
	placeholderText,
}) => {
	return (
		<InputBase
			sx={{
				width: width,
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
			placeholder={placeholderText}
			inputProps={{
				'aria-label': placeholderText,
			}}
		/>
	);
};

export default HeroSearchInput;
