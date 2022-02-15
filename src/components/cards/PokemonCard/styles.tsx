import { styled } from '@mui/material';

export const Identifier = styled('small')`
	font-size: ${({ theme }) => theme.typography.fontSize};
	color: ${({ theme }) => theme.palette.grey[400]};
`;

export const Image = styled('img')`
	height: 125px;

	display: block;
	margin: 0 auto;

	object-fit: contain;

	filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
	transition: filter 0.15s ease-in-out;

	&:hover {
		filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 1));
	}
`;
