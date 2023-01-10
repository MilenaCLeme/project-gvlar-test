import React from 'react';
import GliderComponent from 'react-glider';
import 'glider-js/glider.min.css';
import Card from '../card/Card';
import './Carousel.css';

function Carousel() {
	const arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];
	return (
		<GliderComponent
			hasArrows
			hasDots={false}
			draggable
			slidesToScroll='auto'
			slidesToShow={1}
			itemWidth={192}
			exactWidth={true}
			scrollLock={true}
		>
			{
				arr.map(number => (
					<div key={number}>
						<Card />
					</div>
				))
			}
		</GliderComponent>
	);
}

export default Carousel;
