import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsInstagram, BsLinkedin, BsWhatsapp} from 'react-icons/bs';
import {HiMapPin} from 'react-icons/hi2';
import {MdEmail} from 'react-icons/md';
import logo from '../../img/Logo.png';
import style from './Footer.module.scss';

function Footer() {
	return (
		<footer className={style.footer_desk}>
			<div className={style.footer_desk__size}>
				<div className={style.information}>
					<div className={style.logo}>
						<img className={style.logo__img} src={logo} alt='logo gvlar imoveis creci: 37.691-J' />
					</div>
					<div className={style.localization_hours}>
						<div className={style.localization}>
							<HiMapPin size='16px'/>
							<p className={style.localization__text}>R. Cuiabá, 797 - Alto da Mooca, São Paulo - SP</p>
						</div>
						<div className={style.hours}>
							<h3 className={style.hours__title}>Horário de funcionamento</h3>
							<p className={style.hours__text}>Horário de Segunda a Sexta</p>
							<p className={style.hours__text}>09:00hrs as 18:00hrs</p>
						</div>
					</div>
				</div>
				<div className={style.information_contact}>
					<h3 className={style.information_contact__title}>Nosso Contato</h3>
					<div className={style.contact}>
						<BsWhatsapp />
						<p className={style.contact__text}>(11) 94002-0947</p>
					</div>
					<div className={style.contact}>
						<MdEmail />
						<p className={style.contact__text}>gvlar@gmail.com</p>
					</div>
					<a className={style.information_contact__link} href='#'>Outras formas de contato</a>
				</div>
				<div className={style.media}>
					<h3 className={style.media__title}>Siga-nos</h3>
					<nav className={style.media__nav}>
						<a href='#'>
							<FaFacebookSquare size='24px' />
						</a>
						<a href='#'>
							<BsInstagram size='24px' />
						</a>
						<a href='#'>
							<BsLinkedin size='24px' />
						</a>
					</nav>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
