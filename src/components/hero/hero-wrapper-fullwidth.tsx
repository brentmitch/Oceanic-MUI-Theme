import React from 'react';
import { Box, Container } from '@mui/material';

type Props = {
	bgcolor?: string;
	backgroundImage?: string;
	color?: string;
	marginTop?: number;
	marginBottom?: number;
};

const HeroWrapperFullWidth: React.FC<Props> = ({
	bgcolor,
	backgroundImage,
	children,
	color,
	marginTop,
	marginBottom,
}) => {
	return (
		<Box
			sx={{
				bgcolor,
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
			<Container>{children}</Container>
		</Box>
	);
};

export default HeroWrapperFullWidth;
