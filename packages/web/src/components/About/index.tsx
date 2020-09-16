import React from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';

export const AboutComponent: React.FC = () => {
	return (
		<section
			id="us"
			style={{
				backgroundImage: `url('/images/circle.svg')`,
			}}
		>
			<Container style={{ maxWidth: '960px' }}>
				<h2
					style={{
						textAlign: 'center',
					}}
				>
					Acerca de
				</h2>
				<Row
					style={{
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Col md={4}>
						<h2>somos una agencia de desarrollo y diseño...</h2>
						<p>
							"Vamos, hay que crear el mañana, y no preocuparse
							por el ayer. "
						</p>
					</Col>
					<Col md={8}>
						<Carousel>
							<Carousel.Item>
								<img
									className="carousel_carousel-item"
									src="images/science.png"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="carousel_carousel-item"
									src="images/working.png"
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="carousel_carousel-item"
									src="images/flame-searching.png"
								/>
							</Carousel.Item>
						</Carousel>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
