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
} from '@mui/material';

function Contact() {
	const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
	const selectValue = '';
	return (
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
				<TextField id='filled-basic' label='Filled' variant='filled' />
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
		</Container>
	);
}
export default Contact;
