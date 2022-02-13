import { Chip, SxProps } from '@mui/material';
import { useEffect, useState } from 'react';

type Props = {
	type: string;
	sx?: SxProps;
};

const PokemonTypeLabel = ({ type, sx, ...props }: Props) => {
	const [color, setColor] = useState('');

	useEffect(() => {
		switch (type) {
			case 'poison':
				setColor('#A33EA1');
				break;
			case 'grass':
				setColor('#7AC74C');
				break;
			case 'fire':
				setColor('#EE8130');
				break;
			case 'water':
				setColor('#6390F0');
				break;
			case 'electric':
				setColor('#F7D02C');
				break;
			case 'ice':
				setColor('#96D9D6');
				break;
			case 'fighting':
				setColor('#C22E28');
				break;
			case 'ground':
				setColor('#E2BF65');
				break;
			case 'flying':
				setColor('#A98FF3');
				break;
			case 'psychic':
				setColor('#F95587');
				break;
			case 'bug':
				setColor('#A6B91A');
				break;
			case 'rock':
				setColor('#B6A136');
				break;
			case 'ghost':
				setColor('#735797');
				break;
			case 'dragon':
				setColor('#6F35FC');
				break;
			case 'dark':
				setColor('#705746');
				break;
			case 'steel':
				setColor('#B7B7CE');
				break;
			case 'fairy':
				setColor('#D685AD');
				break;
			default:
				setColor('#A8A77A');
				break;
		}
	}, [color, type]);

	return (
		<Chip
			{...props}
			sx={{
				...sx,
				textTransform: 'capitalize',
				fontWeight: 600,
				color: 'white',
				backgroundColor: `${color || 'primary.main'}`
			}}
			label={type}
		/>
	);
};

export default PokemonTypeLabel;
