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
			<CardMedia
				component='img'
				height={140}
				sx={{
					objectFit: 'contain'
				}}
				image={pokemon.image}
				alt={pokemon.name}
			/>
			<CardContent sx={{ textAlign: 'center' }}>
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
