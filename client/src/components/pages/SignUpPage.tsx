import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppDispatch } from '../../redux/hooks';
import { createUser } from '../../utils/SignUpServices';
import { useNavigate } from 'react-router-dom';
import listyLogoBlack from '../../assets/listyLogoBlack.svg';

const theme = createTheme();

export default function SignUpPage() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const username = `${data.get('firstName')} ${data.get('lastName')}`;
		const result = await createUser(data.get('email'), data.get('password'), username);
		if (result instanceof Error) return alert('Problem with sign up.');
		dispatch({ type: 'LOGIN', payload: result._id });
		navigate('/mainfeed');
	};

	return (
		<ThemeProvider theme={theme}>
			<Container
				component='main'
				maxWidth='xs'
				className='flex flex-col  h-[60vh] m-auto shadow-2xl'
			>
				<CssBaseline />
				<div className='flex flex-col items-center justify-evenly h-full py-4'>
					<img
						className='black-listy-nav-logo  h-1/5'
						src={listyLogoBlack}
					/>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
						}}
						>
							<Typography sx={{marginBottom: '1rem'}} component='h3' variant='h6'>
								Sign up
							</Typography>
						<Box
							component='form'
							noValidate
							onSubmit={handleSubmit}
							sx={{
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'column',
								justifyContent: 'center',
								position: 'static',
								padding: '0 3rem',
							}}
							>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<TextField
										autoComplete='given-name'
										name='firstName'
										required
										fullWidth
										id='firstName'
										label='First Name'
										autoFocus
										/>
								</Grid>
								<Grid item xs={12} sm={6}>
									<TextField
										required
										fullWidth
										id='lastName'
										label='Last Name'
										name='lastName'
										autoComplete='family-name'
										/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										id='email'
										label='Email Address'
										name='email'
										autoComplete='email'
										/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										name='password'
										label='Password'
										type='password'
										id='password'
										autoComplete='new-password'
										/>
								</Grid>
							</Grid>
							<Button
								type='submit'
								fullWidth
								variant='contained'
								sx={{ mt: 1, mb: 2, backgroundColor: '#6b9080' }}
								>
								Sign Up
							</Button>
							<Grid
								container
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
								}}
								>
								<Grid item>
									<Link href='/login' variant='body2' sx={{ color: '#6b9080' }}>
										Already have an account? Sign in
									</Link>
								</Grid>
							</Grid>
						</Box>
					</Box>
				</div>
			</Container>
		</ThemeProvider>
	);
}
