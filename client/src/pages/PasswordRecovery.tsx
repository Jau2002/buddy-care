import { ReactElement } from 'react';
import Forms from '../components/Forms';
import { passwords } from '../utils/form';
import { useNavigate } from 'react-router-dom';

function PasswordRecovery(): ReactElement {

	const navigate = useNavigate()

	const routeChange = () =>{ 
		let path = '/'; 
		 navigate(path);
	  }

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
									<button onClick={()=> routeChange()}>Home</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</article>
	);
}

export default PasswordRecovery;
