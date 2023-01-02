import React from 'react';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsInstagram, BsLinkedin} from 'react-icons/bs';
import {FaUserAlt} from 'react-icons/fa';

function Header() {
	return (
		<header>
			<div>
				<div>
					<nav>
						<a>
							<FaFacebookSquare />
						</a>
						<a>
							<BsInstagram />
						</a>
						<a>
							<BsLinkedin />
						</a>
					</nav>
					<a>
						<FaUserAlt />
						<p>Entre ou cadastre-se</p>
					</a>
				</div>
			</div>
			<div>
				<div>
					<img />
				</div>
				<nav>
					<a>Home</a>
					<button>Imoveis</button>
					<a>Contato</a>
				</nav>
			</div>
		</header>
	);
}

export default Header;
