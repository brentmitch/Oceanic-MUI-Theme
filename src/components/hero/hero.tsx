import React from 'react';
import HeroWrapper from './hero-wrapper';
import HeroWrapperFullWidth from './hero-wrapper-fullwidth';

type Props = {
	bgcolor?: string;
	backgroundImage?: string;
	color?: string;
	fullWidth?: boolean;
	marginTop?: number;
	marginBottom?: number;
};

const Hero: React.FC<Props> = ({
	bgcolor,
	backgroundImage,
	children,
	color,
	fullWidth = false,
	marginTop = 1,
	marginBottom = 1,
}) => {
	return (
		<>
			{fullWidth ? (
				<HeroWrapperFullWidth
					bgcolor={bgcolor}
					backgroundImage={backgroundImage}
					color={color}
					marginTop={marginTop}
					marginBottom={marginBottom}
				>
					{children}
				</HeroWrapperFullWidth>
			) : (
				<HeroWrapper
					bgcolor={bgcolor}
					backgroundImage={backgroundImage}
					color={color}
					marginTop={marginTop}
					marginBottom={marginBottom}
				>
					{children}
				</HeroWrapper>
			)}
		</>
	);
};

export default Hero;
