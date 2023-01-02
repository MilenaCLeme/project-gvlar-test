import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FaUserAlt} from 'react-icons/fa';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import {FiMenu} from 'react-icons/fi';
import {HiUserCircle} from 'react-icons/hi';
import style from './Header.module.scss';
import logo from '../../img/Logo.png';

function Header() {
	return (
		<>
			<header className={style.header_desk}>
				<div className={style.information}>
					<div className={style.information__size}>
						<nav className={style.nav_media}>
							<a href='#'>
								<FaFacebookSquare />
							</a>
							<a href='#'>
								<BsInstagram />
							</a>
							<a href='#'>
								<BsLinkedin />
							</a>
						</nav>
						<a href='#' className={style.page_user}>
							<FaUserAlt />
							<p className={style.page_user__text}>Entre ou cadastre-se</p>
						</a>
					</div>
				</div>
				<div className={style.logo_and_nav}>
					<div className={style.logo_and_nav__size}>
						<img className={style.logo} src={logo} alt='logo gvlar imoveis creci: 37.691-J' />
						<nav className={style.nav_page}>
							<a href='#'>Home</a>
							<button className={style.button_page}>
								Imoveis
								<MdOutlineKeyboardArrowDown />
							</button>
							<a href='#'>Contato</a>
						</nav>
					</div>
				</div>
			</header>
			<header className={style.header_mob}>
				<button className={style.button_menu}>
					<FiMenu size='36px'/>
				</button>
				<img className={style.logo} src={logo} alt='logo gvlar imoveis creci: 37.691-J'/>
				<a className={style.link_user} href='#'>
					<HiUserCircle size='36px'/>
					Entre
				</a>
			</header>
		</>
	);
}

export default Header;
