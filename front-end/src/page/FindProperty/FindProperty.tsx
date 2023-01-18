import React, {useState} from 'react';
import PathPage from '../../components/pathpage/pathpage';
import {IoMdSearch} from 'react-icons/io';
import style from './FindProperty.module.scss';
import classNames from 'classnames';

function FindProperty() {
	const [allFilters, setAllFilters] = useState<boolean>(false);
	const [nameButton, setNameButton] = useState<string>('alugar');

	return (
		<>
			<PathPage word='Encontre um Imóvel' phrase='' />
			<form className={style.container_form}>
				<div>
					<section>
						<button type='button' onClick={() => {
							setNameButton('alugar');
						}} className={classNames({[style.container_form__buttons]: true, [style.container_form__buttons_open]: nameButton === 'alugar'})}>Alugar</button>
						<button onClick={() => {
							setNameButton('comprar');
						}} type='button' className={classNames({[style.container_form__buttons]: true, [style.container_form__buttons_open]: nameButton === 'comprar'})}>Comprar</button>
					</section>
					<div className={style.container_form__size}>
						<div className={style.container_form__container_input}>
							<select className={style.container_form__container_input_select} name='typeHome' id='typeHome'>
								<option value='' hidden>Tipo de Imóvel</option>
								<option value='Apartamento'>Apartamento</option>
								<option value='Casa Térrea'>Casa Térrea</option>
								<option value='Sobrado'>Sobrado</option>
								<option value='Galpão'>Galpão</option>
								<option value='Terreno'>Terreno</option>
							</select>
							<label className={style.container_form__container_input_text} htmlFor='search'>
								<IoMdSearch />
								<input type='text' name='search' id='search' placeholder='Digite bairro, cidade ou região'/>
							</label>
						</div>
						{
							allFilters && (
								<>
									<label className={style.container_form__value} htmlFor='value'>
										<input type='text' placeholder='Valor'/>
									</label>
									<div className={style.container_form__about_home}>
										<div className={style.container_form__about_home_type}>
											<legend>Banheiro:</legend>
											<label htmlFor='one'>
												<input type='checkbox' name='numberBathRoom' value='1' />
												1
											</label>
											<label htmlFor='two'>
												<input type='checkbox' name='numberBathRoom' value='2' />
												2
											</label>
											<label htmlFor='three'>
												<input type='checkbox' name='numberBathRoom' value='3' />
												3
											</label>
											<label htmlFor='four'>
												<input type='checkbox' name='numberBathRoom' value='4' />
												4+
											</label>
										</div>
										<div className={style.container_form__about_home_type}>
											<legend>Quarto:</legend>
											<label htmlFor='one'>
												<input type='checkbox' name='numberBedroom' value='1' />
												1
											</label>
											<label htmlFor='two'>
												<input type='checkbox' name='numberBedroom' value='2' />
												2
											</label>
											<label htmlFor='three'>
												<input type='checkbox' name='numberBedroom' value='3' />
												3
											</label>
											<label htmlFor='four'>
												<input type='checkbox' name='numberBedroom' value='4' />
												4+
											</label>
										</div>
										<div className={style.container_form__about_home_type}>
											<legend>Vaga:</legend>
											<label htmlFor='zero'>
												<input type='checkbox' name='numberBedroom' value='0' />
												0
											</label>
											<label htmlFor='one'>
												<input type='checkbox' name='numberBedroom' value='1' />
												1
											</label>
											<label htmlFor='two'>
												<input type='checkbox' name='numberBedroom' value='2' />
												2
											</label>
											<label htmlFor='three'>
												<input type='checkbox' name='numberBedroom' value='3' />
												3+
											</label>
										</div>
									</div>
									<label className={style.container_form__value} htmlFor='footage'>
										<input type='text' placeholder='Metragem'/>
									</label>
								</>
							)
						}
						<div>
							<button className={style.container_form__button_all_filters} type='button' onClick={() => {
								setAllFilters(!allFilters);
							}}>{allFilters ? 'Ocultar Filtros' : 'Mais Filtros'}</button>
						</div>
						<div className={style.container_form__button_filtrs}>
							<button>Filtar</button>
						</div>
					</div>
				</div>
			</form>
			<div className={style.container_order}>
				<select name='order' id='order'>
					<option value=''>Ordenar</option>
				</select>
			</div>
		</>
	);
}

export default FindProperty;
