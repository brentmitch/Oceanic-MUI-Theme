import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from '@mui/material/styles';
import oceanicTheme from './mui-themes/oceanic';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/sora/300.css';
import '@fontsource/sora/400.css';
import '@fontsource/sora/500.css';
import '@fontsource/sora/700.css';

import Footer from './components/layout/footer/footer';
import Header from './components/layout/header/header';
import Main from './components/layout/main/main';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
	return (
		<ThemeProvider theme={oceanicTheme}>
			<CssBaseline />
			<Header />
			<Main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='contact' element={<Contact />} />
				</Routes>
			</Main>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
