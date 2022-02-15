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

			setPokemons((prevState) => [
				...prevState,
				...results.map((pokemon: { name: string; url: string }) => {
					// Get Pokemon id from url (remove / and get las position - id)
					const arrayToGetId = pokemon.url
						.split('/')
						.filter((e) => e);

					// Get last position (id) and transform to number
					const id = parseInt(arrayToGetId[arrayToGetId.length - 1]);

					return {
						id,
						...pokemon,
						image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
							arrayToGetId[arrayToGetId.length - 1]
						}.svg`
					};
				})
			]);

			if (next) {
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
		} catch (error: any) {
			console.log(error);
		}
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
							<PokemonCard
								sx={{ height: '100%' }}
								pokemon={pokemon}
								key={pokemon.name}
							/>
						</Grid>
					))}
				</Grid>
			</InfiniteScroll>
		</Container>
	);
};

export default Home;
