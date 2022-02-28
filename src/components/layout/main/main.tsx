import { ReactNode } from 'react';
import { styled } from '@mui/system';

const MainWrapper = styled('main')({
	position: 'relative',
	paddingTop: '120px',
	paddingBottom: '120px',
});

const Main = ({ children }: { children: ReactNode }) => {
	return <MainWrapper>{children}</MainWrapper>;
};

export default Main;
