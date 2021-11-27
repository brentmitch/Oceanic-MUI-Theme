import { Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ContactForm from './contact-form';
import contactImgSrc from '.././../images/dog-beach-ave-calvar-unsplash.jpg';

const Contact: React.FC = () => {
	const ContactImage = styled('img')({
		margin: 0,
		padding: 0,
		width: '100%',
		borderRadius: 12,
	});

	return (
		<>
			<Container>
				<Grid container spacing={6}>
					<Grid item xs={4}>
						<ContactImage src={contactImgSrc}></ContactImage>
					</Grid>
					<Grid item xs={8}>
						<Typography variant='h2' component='h2'>
							Hello...
						</Typography>
						<Typography
							component='p'
							sx={{ marginTop: 4, marginBottom: 6 }}
						>
							Have a question? We have answers. Whether you want
							to know about past purchases, your account, or
							where's the best place to chase seagulls...we're
							here to help!
						</Typography>
						<ContactForm />
					</Grid>
				</Grid>
			</Container>
		</>
	);
};
export default Contact;
