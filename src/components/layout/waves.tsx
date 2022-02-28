import { styled } from '@mui/material/styles';
import { CSSObject } from '@mui/material';

interface customizableWaveStyles {
	backgroundSize: string;
	backgroundPosition: string;
	backgroundEndingColor: string;
	height: string;
	opacity: string;
	top: string;
	zIndex: number;
}

const makeWaveStyles = ({
	backgroundSize,
	backgroundPosition,
	backgroundEndingColor,
	height,
	opacity,
	top,
	zIndex,
}: customizableWaveStyles): CSSObject => ({
	position: 'absolute',
	left: '0',
	top,
	right: '0',
	zIndex,
	opacity,
	'&:before': {
		content: '""',
		position: 'absolute',
		left: '0',
		bottom: '0',
		right: '0',
		backgroundImage: `radial-gradient(ellipse at 90px 0px, transparent 90px, ${backgroundEndingColor} 0px)`,
		backgroundPosition,
		backgroundRepeat: 'repeat',
		backgroundSize,
		height,
	},
});

export const FooterWave1 = styled('div')(
	makeWaveStyles({
		backgroundSize: '180px 30px',
		backgroundPosition: 'bottom 0 right 0px',
		backgroundEndingColor: 'rgba(207,234,251,1)',
		height: '30px',
		opacity: '1',
		top: '0',
		zIndex: 0,
	})
);

export const FooterWave2 = styled('div')(
	makeWaveStyles({
		backgroundSize: '180px 20px',
		backgroundPosition: 'bottom 0 right 80px',
		backgroundEndingColor: 'rgba(207,234,251,1)',
		height: '20px',
		opacity: '0.5',
		top: '0',
		zIndex: 0,
	})
);

export const FooterWave3 = styled('div')(
	makeWaveStyles({
		backgroundSize: '180px 20px',
		backgroundPosition: 'bottom 0 right 40px',
		backgroundEndingColor: 'rgba(191,238,236,1)',
		height: '20px',
		opacity: '0.7',
		top: '0',
		zIndex: 0,
	})
);
