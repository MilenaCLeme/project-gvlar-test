import React from 'react';
import style from './pathpage.module.scss';

type Props = {
	word: string;
	phrase: undefined | string;
};

function PathPage({word, phrase}: Props) {
	return (
		<>
			<section className={style.container_page}>
				<a href='#'>Home</a>
				<p>{`> ${word}`}</p>
			</section>
			{
				phrase !== '' && (
					<h1 className={style.title_page}>{phrase}</h1>
				)
			}
		</>
	);
}

export default PathPage;
