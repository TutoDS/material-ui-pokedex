import { ArrowDropDown, ChevronLeft } from '@mui/icons-material';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Button,
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Stack,
	Typography
} from '@mui/material';
import { Box } from '@mui/system';
import Loading from 'components/Loading';
import PokemonTypeLabel from 'components/PokemonTypeLabel';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PokemonType } from 'shared/@types/Pokemon';
import pokemonApi from 'shared/services/pokemonApi';
import { Identifier, PokeImage } from './styles';

const PokemonDetails = () => {
	// Route Params
	const { id } = useParams();

	// Navigate from React Router DOM
	const navigate = useNavigate();

	// States
	const [pokemon, setPokemon] = useState<PokemonType>();
	const [isLoading, setIsLoading] = useState(true);

	const getData = useCallback(async () => {
		setIsLoading(true);

		try {
			const { data } = await pokemonApi.get<PokemonType>(`pokemon/${id}`);

			setPokemon(data);
		} catch (error: any) {
			if (error.response && error.response.status === 404) {
				navigate('/404');
			}

			console.log(error);
		}

		setIsLoading(false);
	}, [id, navigate]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<>
			<Container maxWidth={'lg'}>
				{isLoading ? (
					<Loading />
				) : (
					<Grid spacing={2} container>
						<Grid item xs={12} sm={4}>
							<Card>
								<CardMedia
									component='img'
									image={
										pokemon?.sprites.other.dream_world
											.front_default
									}
									alt={pokemon?.name}
									height={150}
									sx={{
										objectFit: 'contain'
									}}
								/>
								<CardContent sx={{ textAlign: 'center' }}>
									<Typography
										sx={{ textTransform: 'capitalize' }}
										variant={'h5'}
										component={'h2'}
									>
										{pokemon?.name}
									</Typography>
									<Identifier>{`#${pokemon?.id}`}</Identifier>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12} sm={8}>
							<Stack spacing={2}>
								<Card>
									<CardContent>
										<Stack
											sx={{ flexWrap: 'wrap' }}
											direction={'column'}
											spacing={2}
										>
											<Grid container spacing={2}>
												<Grid item xs={6} sm={4} md={3}>
													<Typography
														sx={{
															fontWeight: 'bold'
														}}
														variant={'subtitle1'}
														component={'h3'}
													>
														Height
													</Typography>
													<Typography
														variant={'body1'}
													>
														{pokemon?.height}
													</Typography>
												</Grid>

												<Grid item xs={6} sm={4} md={3}>
													<Typography
														sx={{
															fontWeight: 'bold'
														}}
														variant={'subtitle1'}
														component={'h3'}
													>
														Weight
													</Typography>
													<Typography
														variant={'body1'}
													>
														{pokemon?.weight}
													</Typography>
												</Grid>
											</Grid>
											<Box>
												<Typography
													sx={{ fontWeight: 'bold' }}
													variant={'subtitle1'}
													component={'h3'}
												>
													Type(s)
												</Typography>
												<Stack
													spacing={1}
													sx={{ flexWrap: 'wrap' }}
													direction={'row'}
												>
													{pokemon?.types.map(
														({ type }) => (
															<PokemonTypeLabel
																key={type.name}
																type={type.name}
															/>
														)
													)}
												</Stack>
											</Box>
										</Stack>
									</CardContent>
								</Card>

								<Accordion>
									<AccordionSummary
										expandIcon={<ArrowDropDown />}
										aria-controls='panel1a-content'
										id='panel1a-header'
									>
										<Typography sx={{ fontWeight: 'bold' }}>
											More Images
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Stack
											sx={{ flexWrap: 'wrap' }}
											direction={'row'}
											justifyContent={'space-between'}
											spacing={2}
										>
											{pokemon?.sprites.front_female && (
												<PokeImage
													src={
														pokemon?.sprites
															.front_female
													}
													alt={pokemon?.name}
												/>
											)}

											<PokeImage
												src={
													pokemon?.sprites.front_shiny
												}
												alt={pokemon?.name}
											/>

											<PokeImage
												src={
													pokemon?.sprites
														.back_default
												}
												alt={pokemon?.name}
											/>

											{pokemon?.sprites.back_female && (
												<PokeImage
													src={
														pokemon?.sprites
															.back_female
													}
													alt={pokemon?.name}
												/>
											)}

											<PokeImage
												src={
													pokemon?.sprites.back_shiny
												}
												alt={pokemon?.name}
											/>

											{pokemon?.sprites
												.back_shiny_female && (
												<PokeImage
													src={
														pokemon?.sprites
															.back_shiny_female
													}
													alt={pokemon?.name}
												/>
											)}
										</Stack>
									</AccordionDetails>
								</Accordion>
							</Stack>
							<Button
								variant={'outlined'}
								sx={{ mt: 4 }}
								onClick={() => navigate(-1)}
								startIcon={<ChevronLeft />}
							>
								Back
							</Button>
						</Grid>
					</Grid>
				)}
			</Container>
		</>
	);
};

export default PokemonDetails;
