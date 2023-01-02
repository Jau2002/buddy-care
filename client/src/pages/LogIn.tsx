import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import Forms from '../components/Forms';
import GoToHome from '../components/GoToHome';
import { logIn } from '../utils/form';

function LogIn(): ReactElement {
	return (
		<>
			<article className='vh-100 form-article'>
				<div className='container py-5 h-100'>
					<div className='row d-flex justify-content-center align-items-center h-100'>
						<div className='col col-xl-10'>
							<div className='card form-article--div'>
								<div className='row g-0'>
									<div className='col-md-6 col-lg-5 d-none d-md-block'>
										<img
											src='/img/vets.webp'
											alt='login form'
											className='img-fluid form-article--img border-1px'
											loading='lazy'
										/>
									</div>
									<div className='col-md-6 col-lg-7 d-flex align-items-center'>
										<div className='card-body p-4 p-lg-5 text-black'>
											<Forms
												form={logIn}
												submit='Iniciar sesión'
												title='Iniciar sesión en su cuenta'
											/>
											<Link
												className='small text-muted form-article--p'
												to='/signIn/user'
											>
												¿Se te olvidó tu contraseña?
											</Link>
											<p className='mb-5 pb-lg-2 form-article--link form-article--p'>
												¿No tienes una cuenta?
												<Link
													to='/signUp'
													className='form-article--link form-article--p'
												>
													{' '}
													Registrarse aquí
												</Link>
												<div className='d-grid gap-2 d-md-flex justify-content-md-end form-article--button'>
													<GoToHome />
												</div>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</>
	);
}

export default LogIn;
