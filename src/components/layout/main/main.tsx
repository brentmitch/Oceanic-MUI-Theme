import React from 'react';
import { styled } from '@mui/system';

const MainWrapper = styled('main')({
	paddingTop: '80px',
});

const Main: React.FC = ({ children }) => {
	return <MainWrapper>{children}</MainWrapper>;
};

export default Main;
