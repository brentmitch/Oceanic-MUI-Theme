import {
	Box,
	Button,
	Checkbox,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	Switch,
	TextField,
	Typography,
} from '@mui/material';
import Hero from '../../components/hero/hero';

const Home: React.FC = () => {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
	const selectValue = '';
	return (
		<>
			<Hero />
			<Container>
				<Stack spacing={2} direction='row'>
					<Button variant='text'>Text</Button>
					<Button variant='contained'>Contained</Button>
					<Button variant='contained' sx={{ boxShadow: 0 }}>
						Contained no shadow
					</Button>
					<Button variant='outlined'>Outlined</Button>

					<Button color='secondary' variant='text'>
						Text
					</Button>
					<Button color='secondary' variant='contained'>
						Contained
					</Button>
					<Button color='secondary' variant='outlined'>
						Outlined
					</Button>
				</Stack>

				<Box sx={{ width: '100%', maxWidth: 500 }}>
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
				</Box>

				<Box sx={{ width: '100%', maxWidth: 500 }}>
					<Checkbox {...label} defaultChecked />
					<Checkbox {...label} />
					<Checkbox {...label} disabled />
					<Checkbox {...label} disabled checked />
				</Box>

				<Box>
					<Switch {...label} defaultChecked />
					<Switch {...label} defaultChecked color='secondary' />
				</Box>

				<Box sx={{ width: '100%', maxWidth: 500 }}>
					<FormControl sx={{ margin: 1, minWidth: 120 }}>
						<InputLabel id='demo-simple-select-standard-label'>
							Test
						</InputLabel>
						<Select
							labelId='demo-simple-select-standard-label'
							id='demo-simple-select-standard'
							value={selectValue}
							label='Test'
						>
							<MenuItem value=''>
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
				</Box>

				<Box sx={{ width: '100%', maxWidth: 500 }}>
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
