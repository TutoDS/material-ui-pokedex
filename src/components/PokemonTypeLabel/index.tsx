import { Chip, SxProps } from '@mui/material';
import { getTypeColor, TYPE_COLOR } from 'shared/utils/getTypeColor';

type Props = {
	type: keyof typeof TYPE_COLOR;
	sx?: SxProps;
};

const PokemonTypeLabel = ({ type, sx, ...props }: Props) => {
	return (
		<Chip
			{...props}
			sx={{
				...sx,
				textTransform: 'capitalize',
				fontWeight: 600,
				color: 'white',
				backgroundColor: `${getTypeColor(type) || 'primary.main'}`
			}}
			label={type}
		/>
	);
};

export default PokemonTypeLabel;
