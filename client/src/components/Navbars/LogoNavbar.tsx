import { ReactElement } from 'react';
import LogoutButton from '../buttons/LogoutButton';
import blackListyLogo from '../../assets/blackListyLogo.svg';
import React from 'react';

export const LogoNavbar = ({
	isAuthenticated,
}: {
	isAuthenticated: boolean;
}): ReactElement => {
	return isAuthenticated ? (
		<>
			<img className='black-listy-nav-logo' src={blackListyLogo} />
			{/* <Logo /> */}
			<LogoutButton />
		</>
	) : (
		<></>
	);
};
