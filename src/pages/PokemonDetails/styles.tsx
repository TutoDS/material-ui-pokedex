import { styled } from '@mui/material';

export const Identifier = styled('small')`
	font-size: ${({ theme }) => theme.typography.fontSize};
	color: ${({ theme }) => theme.palette.grey[400]};
`;

export const PokeImage = styled('img')`
	width: 200px;
	height: 200px;

	object-fit: contain;
`;
