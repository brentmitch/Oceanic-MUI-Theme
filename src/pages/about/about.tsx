import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Hero from '../../components/hero/hero';
import oceanLifeSilhouette from '.././../images/ocean-life-silhouette.svg';

const About = () => {
	return (
		<>
			<Hero
				bgcolor='#101c2f'
				color='#d3e8f9'
				marginTop={6}
				marginBottom={6}
				fullWidth={true}
			>
				<Grid container spacing={2} sx={{ padding: 3 }}>
					<Grid item xs={9}>
						<Typography
							variant='h3'
							component='h2'
							sx={{ marginBottom: 3 }}
						>
							The Ocean is home to 95% of all life
						</Typography>
						<Typography
							variant='body1'
							component='p'
							sx={{ marginBottom: 5 }}
						>
							This photosynthesis in the ocean is dominated by
							phytoplankton, microscopic free floating algae.
							After the plants grow, bacterial decomposition of
							the organic matter formed by photosynthesis in the
							ocean consumes oxygen and releases carbon dioxide.
						</Typography>
						<Button variant='contained' sx={{ marginBottom: 3 }}>
							Learn More
						</Button>
					</Grid>
					<Grid item xs={3} style={{ textAlign: 'right' }}>
						<img
							src={oceanLifeSilhouette}
							style={{ height: '100%', maxHeight: '230px' }}
							alt='Ocean Life'
						/>
					</Grid>
				</Grid>
			</Hero>

			<Container>
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
			</Container>
		</>
	);
};
export default About;
