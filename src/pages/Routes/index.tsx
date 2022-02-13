import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import PokemonDetails from 'pages/PokemonDetails';
import { Route, Routes } from 'react-router-dom';

const AppRoutes = () => (
	<Routes>
		<Route path={'*'} element={<NotFound />} />

		<Route path={'/'} element={<Home />} />

		<Route path={'/pokemon/:id'} element={<PokemonDetails />} />
	</Routes>
);

export default AppRoutes;
