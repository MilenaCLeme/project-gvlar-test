import React from 'react';
import style from './pathpage.module.scss';

function PathPage() {
	return (
		<>
			<section className={style.container_page}>
				<a href='#'>Home</a>
				<p>{'> Contato'}</p>
			</section>
			<h1 className={style.title_page}>Fale Conosco</h1>
		</>
	);
}

export default PathPage;
