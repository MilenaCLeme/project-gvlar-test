import React from 'react';
import {IoMdSearch} from 'react-icons/io';
import style from './Home.module.scss';
import img from '../../img/ImgHome.jpg';

function Home() {
	return (
		<>
			<div className={style.container_img}>
				<img className={style.container_img__img} src={img} />
				<div className={style.container_img__text}>
					<h1 className={style.container_img__text__title}>Aqui seus sonhos ganham um novo lar</h1>
					<p className={style.container_img__text__sub}>Seja para investir, morar ou trabalhar. Aqui você encontra!!!</p>
				</div>
				<form className={style.container_form}>
					<select className={style.container_form__select} name='typeHome' id='typeHome'>
						<option value='' hidden>Tipo de Imóvel</option>
						<option value='Apartamento'>Apartamento</option>
						<option value='Casa Térrea'>Casa Térrea</option>
						<option value='Sobrado'>Sobrado</option>
						<option value='Galpão'>Galpão</option>
						<option value='Terreno'>Terreno</option>
					</select>
					<label className={style.container_form__inputtext} htmlFor='search'>
						<IoMdSearch />
						<input type='text' name='search' id='search' placeholder='Digite bairro, cidade ou região'/>
					</label>
					<div className={style.container_form__inputradio}>
						<div className={style['radio-container']}>
							<label htmlFor='radio'>
								<input type='radio' id='radio' name='radio' />
								<div className={style['custom-radio']}>
									<span></span>
								</div>
								<span>Quero Alugar</span>
							</label>
						</div>
						<div className={style['radio-container']}>
							<label htmlFor='radio1'>
								<input type='radio' id='radio1' name='radio' />
								<div className={style['custom-radio']}>
									<span></span>
								</div>
								<span>Quero Comprar</span>
							</label>
						</div>
					</div>
					<button className={style.button_form}>Buscar</button>
				</form>
			</div>
		</>
	);
}

export default Home;
