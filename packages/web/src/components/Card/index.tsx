import React from 'react';
import { Icon } from 'react-bootstrap-icons';

interface Props {
	card: {
		image: Icon;
		title: string;
		legend: string;
	};
}

export const CardComponent: React.FC<Props> = ({ card }) => (
	<div className="service-card">
		<card.image fill="707070"></card.image>
		<header>{card.title}</header>
		<p>{card.legend}</p>
	</div>
);
