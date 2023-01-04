import React from 'react';
import {Outlet} from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './ClientPage.module.scss';

function ClientPage() {
	return (
		<>
			<Header />
			<div className={style.container}>
				<main className={style.container_main}>
					<Outlet />
				</main>
			</div>
			<Footer />
		</>
	);
}

export default ClientPage;
