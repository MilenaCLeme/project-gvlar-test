import React, {useState} from 'react';
import ReactModal from 'react-modal';
import {FiMenu} from 'react-icons/fi';
import {AiOutlineClose} from 'react-icons/ai';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import style from './MenuMob.module.scss';
import classNames from 'classnames';

ReactModal.setAppElement('#root');

function MenuMob() {
	const [modalIsOpen, setIsOpen] = useState<boolean>(false);

	const toggleModal = () => {
		setIsOpen(!modalIsOpen);
	};

	return (
		<>
			<button onClick={toggleModal} className={style.button_menu}>
				<FiMenu size='36px'/>
			</button>
			<ReactModal
				overlayClassName='overlay-modal'
				isOpen={modalIsOpen}
				onRequestClose={toggleModal}
				closeTimeoutMS={250}
				className={style.modal}
				contentLabel='Menu'
			>
				<div className={classNames({[style.openMenu]: modalIsOpen, [style.closeMenu]: !modalIsOpen})}>
					<header className={style.header_menu}>
						<h1 className={style.header_menu__text}>Menu</h1>
						<button className={style.header_menu__button} onClick={toggleModal}><AiOutlineClose size='24px' /></button>
					</header>
					<nav className={style.nav_menu}>
						<a className={style.nav_menu__link} href='#'>Home</a>
						<div className={style.nav_menu__select}>
							<h3 className={style.nav_menu__select__text}>
								Imoveis
								<MdOutlineKeyboardArrowDown />
							</h3>
							<a className={style.nav_menu__link} href='#'>Encontre um Imóvel</a>
							<a className={style.nav_menu__link} href='#'>Cadastre seu Imóvel</a>
						</div>
						<a className={style.nav_menu__link} href='#'>Contato</a>
					</nav>
				</div>
			</ReactModal>
		</>
	);
}

export default MenuMob;
