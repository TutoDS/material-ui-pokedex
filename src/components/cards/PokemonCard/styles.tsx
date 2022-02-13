import { styled } from '@mui/material';

export const Identifier = styled('small')`
	font-size: ${({ theme }) => theme.typography.fontSize};
	color: ${({ theme }) => theme.palette.grey[400]};
`;
