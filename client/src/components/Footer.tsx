import { ReactElement } from 'react';

function Footer(): ReactElement {
	return (
		<div className='footer-div'>
			<div className='footer-div--div'>
				<a
					href='fabianperaltasfco@gmail.com'
					target='_blank'
					rel='noreferrer'
					className='navbar bg-dark'
				>
					<img
						src='/img/envelope-at-fill.svg'
						alt='Email'
						loading='lazy'
						className='navbar-brand'
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/jaumesuarez/'
					target='_blank'
					rel='noreferrer'
					className='navbar bg-dark'
				>
					<img
						src='/img/linkedin.svg'
						alt='LinkedIn'
						loading='lazy'
						className='navbar-brand'
					/>
				</a>
				<a
					href='#'
					target='_blank'
					rel='noreferrer'
					className='navbar bg-dark'
				>
					<img
						src='/img/whatsapp.svg'
						alt='WhatsApp'
						loading='lazy'
						className='navbar-brand'
					/>
				</a>
			</div>

			<div>
				<br></br>
				<p className='footer-div--p'>
					(C) 2022 - Proyecto final soy Henry - Grupo 10
				</p>
			</div>
		</div>
	);
}

export default Footer;
