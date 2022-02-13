import {
	AppBar,
	Button,
	Container,
	Stack,
	Toolbar,
	Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import { HeaderMargin } from './styles';

const Header = ({ ...props }) => {
	return (
		<>
			<AppBar
				{...props}
				position={'sticky'}
				enableColorOnDark
				component={'header'}
			>
				<Container maxWidth={'lg'}>
					<Toolbar
						sx={{ px: '0 !important' }}
						component={Stack}
						direction={'row'}
						alignItems={'center'}
						justifyContent={'space-between'}
					>
						<Typography variant={'h6'} component={'h1'}>
							Material UI Pokedex
						</Typography>

						<Stack
							spacing={2}
							direction={'row'}
							alignItems={'center'}
						>
							<Button component={Link} to={'/'} color={'inherit'}>
								Home
							</Button>
						</Stack>
					</Toolbar>
				</Container>
			</AppBar>
			<HeaderMargin />
		</>
	);
};

export default Header;
