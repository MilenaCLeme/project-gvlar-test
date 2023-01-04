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
				<Outlet />
			</div>
			<Footer />
		</>
	);
}

export default ClientPage;
