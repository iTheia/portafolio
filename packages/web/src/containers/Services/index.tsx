import React from 'react';
import { Container } from 'react-bootstrap';
import { CardComponent } from '../../components/Card';
import { services } from './constans';

export const Services: React.FC = () => {
	return (
		<section id="services" className="services">
			<Container>
				<div className="grid">
					{services.map((service, index) => (
						<CardComponent key={index} card={service} />
					))}
				</div>
			</Container>
		</section>
	);
};
