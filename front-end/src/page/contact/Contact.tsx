import React from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {MdEmail} from 'react-icons/md';
import {BsWhatsapp} from 'react-icons/bs';
import {HiMapPin} from 'react-icons/hi2';
import PathPage from '../../components/pathpage/pathpage';
import style from './Contact.module.scss';

function Contact() {
	return (
		<>
			<PathPage />
			<form className={style.form_contact}>
				<input className={style.form_contact__input_text} type='text' placeholder='Nome'/>
				<input className={style.form_contact__input_text} type='text' placeholder='Telefone'/>
				<input className={style.form_contact__input_text} type='text' placeholder='E-mail'/>
				<textarea className={style.form_contact__inputarea} placeholder='Mensagem' />
				<label className={style.form_contact__label_check}>
					<input type='checkbox'/>
					concordo com os <a href='#'>termos de uso</a> e <a href='#'>política de privacidade</a>
				</label>
				<button className={style.form_contact__button_send}>
					<HiOutlineMail />
					Enviar
				</button>
				<p className={style.form_contact__info}>*Resposta em até 2 dias úteis</p>
			</form>
			<div>
				<div>
					<img />
					<p>A GVLAR IMÓVEIS presta serviços no ramo imobiliário, intermediando negociações de compra, venda e locação. Conta também com um setor de administração de imóveis e com departamento jurídico que acompanha todas as negociações efetuadas em nossa imobiliária para realizar tudo com a máxima segurança aos nossos clientes.</p>
				</div>
				<div>
					<div>
						<h2>Localização</h2>
						<a href='#'>
							<HiMapPin />
							<p> R. Cuiabá, 797 - Alto da Mooca, São Paulo - SP, 03183-001</p>
						</a>
					</div>
					<div>
						<h2>Contatos</h2>
						<div>
							<BsWhatsapp />
							<p>(11) 94002-0947</p>
						</div>
						<div>
							<MdEmail />
							<p>gvlar@gmail.com</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
