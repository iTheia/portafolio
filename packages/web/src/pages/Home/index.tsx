import React, { Fragment } from 'react';
import { AboutComponent } from '../../components/About';
import { ContactComponent } from '../../components/Contact';
import { LandingComponent } from '../../components/Landing';
import { PortfolioContainer } from '../../containers/Potfolio';
import { Services } from '../../containers/Services';

export const HomePage: React.FC = () => (
	<Fragment>
		<LandingComponent />
		<AboutComponent />
		<Services />
		<PortfolioContainer />
		<ContactComponent />
	</Fragment>
);
