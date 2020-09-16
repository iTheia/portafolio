import React from 'react';
import { NavHashLink } from 'react-router-hash-link';
import { links } from './constans';

export const NavbarComponent: React.FC = () => {
	return (
		<div>
			{links.map((link, index) => (
				<NavHashLink key={index} to={link.path}>
					{link.title}
				</NavHashLink>
			))}
		</div>
	);
};
