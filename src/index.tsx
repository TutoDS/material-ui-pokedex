import { CssBaseline, ThemeProvider } from '@mui/material';
import 'assets/styles/global.scss';
import theme from 'assets/styles/theme';
import Main from 'pages/Main';
import { render } from 'react-dom';

render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Main />
	</ThemeProvider>,
	document.getElementById('root')
);
