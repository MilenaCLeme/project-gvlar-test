import React from 'react';
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
			</div>
		</>
	);
}

export default Home;
