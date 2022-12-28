import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Forms from '../components/Forms';
import { passwords } from '../utils/form';

function PasswordRecovery(): ReactElement {
	return (
		<article className='vh-100 form-article'>
			<div className='container py-5 h-100'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col col-xl-10'>
						<div className='card form-article--div'>
							<div className='row g-0'>
								<div className='col-md-6 col-lg-5 d-none d-md-block'>
									<img
										src='/img/perro_confundido.jpg'
										alt='login form'
										className='img-fluid form-article--img border-1px'
									/>
								</div>
								<div className='col-md-6 col-lg-7 d-flex align-items-center'>
									<div className='card-body p-4 p-lg-5 text-black'>
										<Forms
											form={passwords}
											submit='Cambiar contraseña'
											title='Verifica cambio de contraseña'
										/>
									</div>
								</div>
								<div className='d-grid gap-2 d-md-flex justify-content-md-end form-article--button'>
									<Link
										to='/'
										className='small text-muted'
									>
										<button className='btn btn-outline-dark'>
											Pagina principal
										</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

export default PasswordRecovery;
