import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactComponent as HeroLogo } from './hero.svg';
import { ReactComponent as Curve } from './curve.svg';

export const LandingComponent: React.FC = () => {
	return (
		<section id="#home">
			<div className="landing">
				<Container
					fluid
					style={{
						maxWidth: '960px',
						padding: '0',
						width: '100%',
						marginLeft: 'auto',
					}}
				>
					<Container>
						<Row style={{ alignItems: 'center' }}>
							<Col md={6}>
								<h1>Hacemos tus ideas realidad</h1>
								<p>
									Desde la mejor página web para impulsar tu
									negocio, hasta una impactante app para
									conectarte con tus clientes.
								</p>
								<h5>Juntos lo podemos lograr</h5>
							</Col>
							<Col md={6}>
								<HeroLogo />
							</Col>
						</Row>
					</Container>
				</Container>
				<Curve className="curve" />
			</div>
		</section>
	);
};
