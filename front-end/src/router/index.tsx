import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ClientPage from '../page/ClientPage/ClientPage';
import {Routes, Route} from 'react-router-dom';
import Home from '../page/Home/Home';
import Contact from '../page/contact/Contact';

function Router() {
	return (
		<main className='container'>
			<Routes>
				<Route path='/' element={<ClientPage />} >
					<Route index element={<Home />} />
					<Route path='contato' element={<Contact />} />
				</Route>
			</Routes>
		</main>
	);
}

export default Router;
