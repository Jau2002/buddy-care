import { ReactElement } from 'react';

function Footer(): ReactElement {
	return (
		<div className='footer-div'>
		  
			<div className='footer-div--div'>
				<div>
					<img
						src='/img/face_tb.png'
						width='60'
						height='60'
					/>
				</div>
				<div>
					<img
						src='/img/instagram_white.png'
						width='60'
						height='60'
					/>
				</div>
				<div>
					<img
						src='/img/email_tb.png'
						width='60'
						height='60'
					/>
				</div>
				<div>
					<img
						src='/img/wap_tb.png'
						width='60'
						height='60'
					/>
				</div>
				<div>
					<img
						src='/img/telegram_tg.png'
						width='60'
						height='60'
					/>
				</div>
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
