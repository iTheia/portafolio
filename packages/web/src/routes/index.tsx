import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavbarComponent } from '../components/Navbar';
import { HomePage } from '../pages/Home';

export const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<NavbarComponent />
			<Switch>
				<Route path="/" component={HomePage} />
			</Switch>
		</BrowserRouter>
	);
};
