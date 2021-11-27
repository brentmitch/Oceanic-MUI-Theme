import { createTheme } from '@mui/material/styles';

let oceanicTheme = createTheme({
	palette: {
		common: { black: '#000', white: '#fff' },
		background: { paper: '#fff', default: '#fafafa' },
		primary: {
			light: 'hsla(211, 86%, 65%, 1)',
			main: 'hsla(204, 100%, 37%, 1)',
			dark: 'hsla(209, 100%, 28%, 1)',
			contrastText: 'hsl(0, 0%, 100%)',
		},
		secondary: {
			light: 'hsla(178, 51%, 55%, 1)',
			main: 'hsla(178, 99%, 30%, 1)',
			dark: 'hsla(178, 100%, 20%, 1)',
			contrastText: 'hsl(0, 0%, 100%)',
		},
		error: {
			light: 'hsla(12, 100%, 36%, 1)',
			main: 'hsla(12, 100%, 53%, 1)',
			dark: 'hsla(12, 100%, 68%, 1)',
			contrastText: 'hsl(0, 0%, 100%)',
		},
		warning: {
			light: 'hsla(44, 100%, 72%, 1)',
			main: 'hsla(44, 100%, 50%, 1)',
			dark: 'hsla(44, 100%, 40%, 1)',
			contrastText: 'hsla(0, 0%, 0%, 0.87)',
		},
		text: {
			primary: 'hsla(204, 100%, 8%, 0.87)',
			secondary: 'hsla(204, 100%, 8%, 0.54)',
			disabled: 'hsla(204, 100%, 8%, 0.38)',
		},
		divider: 'hsl(202, 100%, 10%)',
	},
	shape: {
		borderRadius: 12,
	},
	spacing: 6,
	typography: {
		h1: {
			fontFamily: '"Sora", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: '4.8rem',
			fontWeight: 700,
		},
		h2: {
			fontFamily: '"Sora", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: '3.2rem',
			fontWeight: 500,
		},
		h3: {
			fontFamily: '"Sora", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: '2.6rem',
			fontWeight: 700,
		},
		h4: {
			fontFamily: '"Sora", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: '2rem',
			fontWeight: 500,
		},
		h5: {
			fontFamily: '"Sora", "Roboto", "Helvetica", "Arial", sans-serif',
			fontWeight: 700,
		},
		h6: {
			fontFamily: '"Sora", "Roboto", "Helvetica", "Arial", sans-serif',
			fontWeight: 500,
		},
		button: {
			fontFamily: '"Sora", "Roboto", "Helvetica", "Arial", sans-serif',
			fontSize: '0.75rem',
		},
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					height: '100vh',
					backgroundColor: 'hsla(210, 2%, 99%, 1)',
				},
				'#root': {
					display: 'flex',
					flexDirection: 'column',
					margin: '0',
					padding: '0',
					height: '100vh',
				},
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					// apply theme's border-radius instead of component's default
					borderRadius: 16,
					'&.MuiButton-containedPrimary': {
						background:
							'linear-gradient(30deg, hsla(204, 100%, 37%, 1) 15%, hsla(211, 86%, 65%, 1) 90%)',
					},
					'&.MuiButton-containedSecondary': {
						background:
							'linear-gradient(30deg, rgba(1, 150, 145, 1) 15%, rgba(83, 199, 193, 1) 90%)',
					},
				},
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
					backgroundColor: 'hsla(211, 86%, 28%, 0.08)',
					'&:hover': {
						backgroundColor: 'hsla(211, 86%, 28%, 0.12)',
					},
				},
			},
		},
		MuiFormLabel: {
			styleOverrides: {
				root: {
					color: 'hsla(211, 86%, 28%, 0.68)',
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: 'hsla(211, 86%, 28%, 0.23)',
					},
					'& .MuiSvgIcon-root': {
						color: 'hsla(211, 86%, 28%, 0.58)',
					},
				},
			},
		},
		MuiSwitch: {
			styleOverrides: {
				root: {
					'& .MuiSwitch-colorPrimary': {
						'& .MuiSwitch-thumb': {
							background:
								'linear-gradient(30deg, hsla(211, 86%, 85%, 1)  15%, hsla(0, 0%, 94%, 1) 90%)',
						},
						'&.Mui-checked': {
							'& .MuiSwitch-thumb': {
								background:
									'linear-gradient(30deg, hsla(204, 100%, 37%, 1) 15%, hsla(211, 86%, 65%, 1) 90%)',
							},
						},
					},
					'& .MuiSwitch-colorSecondary': {
						'& .MuiSwitch-thumb': {
							background:
								'linear-gradient(30deg, hsla(178, 51%, 80%, 1) 15%, hsla(0, 0%, 94%, 1) 90%)',
						},
						'&.Mui-checked': {
							'& .MuiSwitch-thumb': {
								background:
									'linear-gradient(30deg, rgba(1, 150, 145, 1) 15%, rgba(83, 199, 193, 1) 90%)',
							},
						},
					},
				},
			},
		},
	},
});

oceanicTheme = createTheme(oceanicTheme);

export default oceanicTheme;
