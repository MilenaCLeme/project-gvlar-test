import React from 'react';
import style from './Card.module.scss';

function Card() {
	return (
		<div className={style.card}>
			<div className={style.card__info}>
				<p>Locação e Venda</p>
			</div>
			<img className={style.card__img} src='https://fotos.vivadecora.com.br/decoracao-aquilesnicol-178160-proportional-height_cover_medium.jpg' />
			<div className={style.card__about}>
				<h1 className={style.card__about__type}>Casa</h1>
				<h2 className={style.card__about__address}>Parque na Mooca</h2>
				<p className={style.card__about__region}>São Paulo - SP</p>
				<p className={style.card__about__value}>R$1.000.000,00</p>
			</div>
		</div>
	);
}

export default Card;
