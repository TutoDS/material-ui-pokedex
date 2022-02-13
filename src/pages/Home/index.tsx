import { Container, Grid, Typography } from '@mui/material';
import PokemonCard from 'components/cards/PokemonCard';
import Loading from 'components/Loading';
import { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
	PokemonResponseType,
	PokemonsResponseType
} from 'shared/@types/PokemonsResponse';
import pokemonApi from 'shared/services/pokemonApi';

const Home = () => {
	// States to use on Infinite Scrolling
	const [pagination, setPagination] = useState<{
		offset: number;
		previousOffset?: number;
		hasMore: boolean;
	}>({
		offset: 0,
		previousOffset: 0,
		hasMore: true
	});

	// Data from API
	const [pokemons, setPokemons] = useState<PokemonResponseType[]>([]);

	const getData = useCallback(async () => {
		try {
			const {
				data: { results, next, previous }
			} = await pokemonApi.get<PokemonsResponseType>('pokemon', {
				params: {
					limit: 20,
					offset: pagination.offset
				}
			});

			setPokemons((prevState) => {
				return [
					...prevState,
					...results.map((pokemon: { name: string; url: string }) => {
						const arrayToGetId = pokemon.url
							.split('/')
							.filter((e) => e);

						return {
							id: arrayToGetId[arrayToGetId.length - 1],
							...pokemon,
							image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
								arrayToGetId[arrayToGetId.length - 1]
							}.png`
						};
					})
				];
			});

			if (next) {
				console.log(next);
				setPagination((prevState) => ({
					...prevState,
					offset: prevState.offset + 20,
					hasMore: true
				}));
			}

			if (previous && pagination.offset > 0) {
				setPagination((prevState) => ({
					...prevState,
					previousOffset: prevState.offset - 20,
					hasMore: true
				}));
			}
			console.log(pagination);
		} catch (error: any) {
			console.log(error);
		}

		// eslint-disable-next-line
	}, [pagination]);

	useEffect(() => {
		getData();
		// eslint-disable-next-line
	}, []);

	return (
		<Container maxWidth={'lg'}>
			<Typography variant={'h4'}>List of Pokemons</Typography>

			<InfiniteScroll
				dataLength={pokemons.length}
				next={getData}
				hasMore={pagination.hasMore}
				loader={<Loading />}
			>
				<Grid container spacing={2} sx={{ my: 4 }}>
					{pokemons?.map((pokemon) => (
						<Grid
							sx={{ width: '100%' }}
							key={pokemon.name}
							item
							xs={6}
							sm={4}
							md={3}
						>
							<PokemonCard pokemon={pokemon} key={pokemon.name} />
						</Grid>
					))}
				</Grid>
			</InfiniteScroll>
		</Container>
	);
};

export default Home;
