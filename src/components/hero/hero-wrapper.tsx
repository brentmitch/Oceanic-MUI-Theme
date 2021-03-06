import React from 'react';
import { Box, Container } from '@mui/material';

type Props = {
	bgcolor?: string;
	backgroundImage?: string;
	color?: string;
	marginTop?: number;
	marginBottom?: number;
};

const HeroWrapper: React.FC<Props> = ({
	bgcolor,
	backgroundImage,
	children,
	color,
	marginTop,
	marginBottom,
}) => {
	console.log(bgcolor, backgroundImage, color, marginTop, marginBottom);

	return (
		<Container>
			<Box
				sx={{
					bgcolor,
					borderRadius: 2,
					backgroundImage,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					color,
					marginTop,
					marginBottom,
					position: 'relative',
					width: '100%',
				}}
			>
				{children}
			</Box>
		</Container>
	);
};

export default HeroWrapper;
