import React from 'react';
import {
	ValidatorForm,
	TextValidator,
	SelectValidator,
} from 'react-material-ui-form-validator';

import {
	Button,
	Checkbox,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	Switch,
	TextField,
	Typography,
} from '@mui/material';

const ContactForm: React.FC<{}> = () => {
	const [formValues, setFormValues] = React.useState({
		firstName: '',
		lastName: '',
		email: '',
		topic: '',
		question: '',
	});

	React.useEffect(() => {
		ValidatorForm.addValidationRule('isTruthy', (value: any) => value);
	});

	const handleChange =
		(name: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
			setFormValues({ ...formValues, [name]: event.target.value });
		};

	const handleSubmit = () => {
		console.log('submitted');
	};

	return (
		<>
			<ValidatorForm
				onSubmit={handleSubmit}
				onError={(errors: any) => console.log(errors)}
			>
				<Grid container spacing={6}>
					<Grid item sm={6} xs={12}>
						<TextValidator
							fullWidth
							label={'First Name'}
							onChange={handleChange('firstName')}
							name='firstName'
							value={formValues.firstName}
							validators={['required']}
							errorMessages={['First Name is required']}
						/>
					</Grid>
					<Grid item sm={6} xs={12}>
						<TextValidator
							fullWidth
							label={'LastName'}
							onChange={handleChange('lastName')}
							name='lastName'
							value={formValues.lastName}
							validators={['required']}
							errorMessages={['Last Name is required']}
						/>
					</Grid>
					<Grid item sm={6} xs={12}>
						<TextValidator
							fullWidth
							label={'Email'}
							onChange={handleChange('email')}
							name='Email'
							value={formValues.email}
							validators={['required', 'isEmail']}
							errorMessages={[
								'Email is required',
								'Email is not valid',
							]}
						/>
					</Grid>
					<Grid item sm={6} xs={12}>
						<SelectValidator
							fullWidth
							label={'Topic'}
							onChange={handleChange('topic')}
							name='Topic'
							value={formValues.topic}
							validators={['required']}
							errorMessages={['Topic is required']}
						>
							<MenuItem value={'accountInformation'}>
								Account Information
							</MenuItem>
							<MenuItem value={'customerService'}>
								Customer Service
							</MenuItem>
							<MenuItem value={'generalQuestion'}>
								General Question
							</MenuItem>
							<MenuItem value={'seagulls'}>Seagulls</MenuItem>
						</SelectValidator>
					</Grid>
					<Grid item xs={12}>
						<TextValidator
							multiline
							fullWidth
							rows={6}
							label={'Question'}
							onChange={handleChange('question')}
							name='Question'
							value={formValues.question}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button
							variant='contained'
							type='submit'
							color='primary'
							size='large'
						>
							Send Question
						</Button>
					</Grid>
				</Grid>
			</ValidatorForm>
		</>
	);
};

export default ContactForm;
