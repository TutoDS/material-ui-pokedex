import Header from 'components/ui/Header';
import AppRoutes from 'pages/Routes';
import { BrowserRouter } from 'react-router-dom';

const Main = () => {
	return (
		<BrowserRouter>
			<Header />

			<AppRoutes />
		</BrowserRouter>
	);
};

export default Main;
