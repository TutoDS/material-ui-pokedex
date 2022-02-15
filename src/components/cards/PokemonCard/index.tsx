import { ChevronRight } from '@mui/icons-material';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	SxProps,
	Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import { PokemonResponseType } from 'shared/@types/PokemonsResponse';
import { Identifier } from './styles';

type Props = {
	pokemon: PokemonResponseType;
	sx?: SxProps;
};

const PokemonCard = ({ sx, pokemon, ...props }: Props) => {
	return (
		<Card sx={{ ...sx }} {...props}>
			<CardContent sx={{ textAlign: 'center' }}>
				<Link to={`/pokemon/${pokemon.id}`}>
					<CardMedia
						component='img'
						height={125}
						sx={{
							objectFit: 'contain',
							filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
							transition: 'filter 0.15s ease-in-out',
							'&:hover': {
								filter: 'drop-shadow(0 2px 4px rgba(0,0,0,1))'
							}
						}}
						image={pokemon.image}
						alt={pokemon.name}
					/>
				</Link>
				<Identifier>{`#${pokemon.id}`}</Identifier>
				<Typography
					sx={{ textTransform: 'capitalize' }}
					variant={'h5'}
					component={'h2'}
				>
					{pokemon.name}
				</Typography>
			</CardContent>
			<CardActions sx={{ textAlign: 'center', justifyContent: 'center' }}>
				<Button
					component={Link}
					to={`/pokemon/${pokemon.id}`}
					size='small'
					endIcon={<ChevronRight />}
				>
					View Details
				</Button>
			</CardActions>
		</Card>
	);
};

export default PokemonCard;
