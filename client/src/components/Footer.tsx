import type { ReactElement } from 'react';

function Footer(): ReactElement {
	return (
		<div className='footer-div'>
			<div className='footer-div--div'>
				<a
					href='mailto:fabianperaltasfco@gmail.com'
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
						src='/img/linked-in.svg'
						alt='LinkedIn'
						loading='lazy'
						className='navbar-brand'
					/>
				</a>
				<a
					href='https://api.whatsapp.com/send/?phone=573004071981'
					target='_blank'
					rel='noreferrer'
					className='navbar bg-dark'
				>
					<img
						src='/img/whats-app.svg'
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
