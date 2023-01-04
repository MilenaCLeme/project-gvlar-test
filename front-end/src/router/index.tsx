import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ClientPage from '../page/ClientPage/ClientPage';
import {Routes, Route} from 'react-router-dom';

function Router() {
	return (
		<main className='container'>
			<Routes>
				<Route path='/' element={<ClientPage />} />
			</Routes>
		</main>
	);
}

export default Router;
