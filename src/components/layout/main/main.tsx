import React from 'react';
import { styled } from '@mui/system';

const MainWrapper = styled('main')({
	position: 'relative',
	paddingTop: '120px',
	paddingBottom: '120px',
});

const Main: React.FC = ({ children }) => {
	return <MainWrapper>{children}</MainWrapper>;
};

export default Main;
