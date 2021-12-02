import {
	Box,
	Button,
	Checkbox,
	Container,
	Stack,
	Switch,
	TextField,
	Typography,
} from '@mui/material';
import Hero from '../../components/hero/hero';

const Home: React.FC = () => {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

	return (
		<>
			<Hero />
			<Container>
				<Box sx={{ width: '100%', margin: 2 }}>
					<Stack spacing={2} direction='row'>
						<Button variant='text'>Text</Button>
						<Button variant='contained'>Contained</Button>
						<Button variant='outlined'>Outlined</Button>
						<Button variant='contained' sx={{ boxShadow: 0 }}>
							Contained no shadow
						</Button>
					</Stack>
				</Box>

				<Box sx={{ width: '100%', margin: 2 }}>
					<Stack spacing={2} direction='row'>
						<Button variant='text'>Text</Button>
						<Button variant='contained' color='secondary'>
							Contained
						</Button>
						<Button variant='outlined' color='secondary'>
							Outlined
						</Button>
					</Stack>
				</Box>

				<Box sx={{ width: '100%', margin: 2 }}>
					<Stack spacing={2} direction='row'>
						<Button variant='text' color='error'>
							Text
						</Button>
						<Button variant='contained' color='error'>
							Contained
						</Button>

						<Button variant='outlined' color='error'>
							Outlined
						</Button>
					</Stack>
				</Box>
				<Box sx={{ width: '100%', margin: 2 }}>
					<Typography sx={{ fontWeight: 'bold' }}>
						Custom Variants
					</Typography>
					<Stack spacing={2} direction='row'>
						<Button variant='square'>Square Variant</Button>
						<Button variant='square' color='secondary'>
							Square Variant Secondary
						</Button>
						<Button variant='square' color='error'>
							Square Variant Error
						</Button>
					</Stack>
				</Box>

				<Box sx={{ width: '100%', maxWidth: 500, margin: 2 }}>
					<Typography sx={{ fontWeight: 'bold' }}>
						TextField
					</Typography>
					<Stack spacing={2} direction='row'>
						<TextField
							id='outlined-basic'
							label='Outlined'
							variant='outlined'
						/>
						<TextField
							id='filled-basic'
							label='Filled'
							variant='filled'
						/>
						<TextField
							id='standard-basic'
							label='Standard'
							variant='standard'
						/>
					</Stack>
				</Box>

				<Box sx={{ width: '100%', maxWidth: 500, margin: 2 }}>
					<Checkbox {...label} defaultChecked />
					<Checkbox {...label} />
					<Checkbox {...label} disabled />
					<Checkbox {...label} disabled checked />
				</Box>

				<Box sx={{ width: '100%', maxWidth: 500, margin: 2 }}>
					<Switch {...label} defaultChecked />
					<Switch {...label} defaultChecked color='secondary' />
				</Box>

				<Box sx={{ width: '100%', maxWidth: 500, margin: 2 }}>
					<Typography variant='h1' component='div' gutterBottom>
						h1. Heading
					</Typography>
					<Typography variant='h2' gutterBottom component='div'>
						h2. Heading
					</Typography>
					<Typography variant='h3' gutterBottom component='div'>
						h3. Heading
					</Typography>
					<Typography variant='h4' gutterBottom component='div'>
						h4. Heading
					</Typography>
					<Typography variant='h5' gutterBottom component='div'>
						h5. Heading
					</Typography>
					<Typography variant='h6' gutterBottom component='div'>
						h6. Heading
					</Typography>
					<Typography
						variant='subtitle1'
						gutterBottom
						component='div'
					>
						subtitle1. Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Quos blanditiis tenetur
					</Typography>
					<Typography
						variant='subtitle2'
						gutterBottom
						component='div'
					>
						subtitle2. Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Quos blanditiis tenetur
					</Typography>
					<Typography variant='body1' gutterBottom>
						body1. Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Quos blanditiis tenetur unde suscipit,
						quam beatae rerum inventore consectetur, neque
						doloribus, cupiditate numquam dignissimos laborum fugiat
						deleniti? Eum quasi quidem quibusdam.
					</Typography>
					<Typography variant='body2' gutterBottom>
						body2. Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Quos blanditiis tenetur unde suscipit,
						quam beatae rerum inventore consectetur, neque
						doloribus, cupiditate numquam dignissimos laborum fugiat
						deleniti? Eum quasi quidem quibusdam.
					</Typography>
					<Typography variant='button' display='block' gutterBottom>
						button text
					</Typography>
					<Typography variant='caption' display='block' gutterBottom>
						caption text
					</Typography>
					<Typography variant='overline' display='block' gutterBottom>
						overline text
					</Typography>
				</Box>

				<Box
					sx={{
						width: 300,
						height: 300,
						backgroundColor: 'primary.dark',
						'&:hover': {
							backgroundColor: 'primary.main',
							opacity: [0.9, 0.8, 0.7],
						},
					}}
				/>
			</Container>
		</>
	);
};
export default Home;
