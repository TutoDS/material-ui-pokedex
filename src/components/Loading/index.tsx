import { CircularProgress, Stack } from '@mui/material';

const Loading = () => {
	return (
		<Stack
			sx={{ my: 4 }}
			direction={'row'}
			alignItems={'center'}
			justifyContent={'center'}
		>
			<CircularProgress
				variant='indeterminate'
				disableShrink
				size={50}
				thickness={4}
			/>
		</Stack>
	);
};

export default Loading;
