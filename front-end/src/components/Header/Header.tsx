import React, {useState} from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FaUserAlt} from 'react-icons/fa';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md';
import {HiUserCircle} from 'react-icons/hi';
import style from './Header.module.scss';
import logo from '../../img/Logo.png';
import MenuMob from './MenuMob/MenuMob';

function Header() {
	const [selectIsOpen, setSelectIsOpen] = useState<boolean>(false);

	const toggleSelect = () => {
		setSelectIsOpen(!selectIsOpen);
	};

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
							<div className={style.nav_info}>
								<div onMouseEnter={toggleSelect} className={style.button_page}>
									Imoveis
									<MdOutlineKeyboardArrowDown />
								</div>
								{
									selectIsOpen && (
										<div onMouseLeave={toggleSelect} className={style.nav_info__sub}>
											<a href='#'>Encontre um Imóvel</a>
											<a href='#'>Cadastre seu Imóvel</a>
										</div>
									)
								}
							</div>
							<a href='#'>Contato</a>
						</nav>
					</div>
				</div>
			</header>
			<header className={style.header_mob}>
				<MenuMob />
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
