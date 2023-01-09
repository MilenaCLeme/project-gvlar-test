import React from 'react';
import {IoMdSearch} from 'react-icons/io';
import style from './Home.module.scss';
import img from '../../img/ImgHome.jpg';
import imgMob from '../../img/ImgHomeMob.jpg';
import Carousel from '../../components/ carousel/Carousel';

function Home() {
	return (
		<>
			<div className={style.container_img}>
				<img id={style.img_desk} className={style.container_img__img} src={img} />
				<img id={style.img_mob} className={style.container_img__img} src={imgMob} />
				<div className={style.container_img__text}>
					<h1 className={style.container_img__text__title}>Aqui seus sonhos ganham um novo lar</h1>
					<p className={style.container_img__text__sub}>Seja para investir, morar ou trabalhar. Aqui você encontra!!!</p>
				</div>
				<form className={style.container_form}>
					<div className={style.container_form__border}>
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
					</div>
				</form>
			</div>
			<div className={style.container_info}>
				<div className={style.container_info__sub}>
					<h1>Aproveite a oportunidade e anuncie seu imóvel conosco </h1>
					<button className={style.container_info__sub__button}>Cadastre seu imóvel</button>
				</div>
			</div>
			<div className={style.container_carousel}>
				<h2 className={style.container_carousel__title}>Explore nossas oportunidades</h2>
				<div className={style.container_carousel__carousel}>
					<Carousel />
				</div>
			</div>
			<div>
				<div>
					<h2>Você sempre pode contar conosco para ajudá-lo</h2>
					<p>Veja alguns depoimentos sobre o nosso atendimento</p>
				</div>
				<div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
						<h4>Depoimento - Milena - compradora</h4>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
						<h4>Depoimento - Milena - compradora</h4>
					</div>
					<div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat</p>
						<h4>Depoimento - Milena - compradora</h4>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
