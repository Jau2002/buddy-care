import { Form, Formik } from 'formik';
import { ReactElement } from 'react';
import logIn from '../assets/img/1st-pLane-picture-curios-cat.jpg';
import Editable from '../components/Editable';
import authenticating from '../hooks/authenticating';
import type { Attributes } from '../utils/utils';
import validator from '../utils/validator';
import type { FormsAssociation, Type } from './components';

function Forms({ form, submit }: FormsAssociation): ReactElement {
	const { defaultInputs, handleSubmit } = authenticating();
	return (
		<section className='vh-100 form-section'>
			<div className='container py-5 h-100'>
				<div className='row d-flex justify-content-center align-items-center h-100'>
					<div className='col col-xl-10'>
						<div className='card form-section--div'>
							<div className='row g-0'>
								<div className='col-md-6 col-lg-5 d-none d-md-block'>
									<img
										src={logIn}
										alt='LogIn'
										className='img-fluid form-section--img'
									/>
								</div>
								<div className='col-md-6 col-lg-7 d-flex align-items-center'>
									<div className='card-body p-4 p-lg-5 text-black'>
										<div className='d-flex align-items-center mb-3 pb-1'>
											<i className='fas fa-cubes fa-2x me-3 form-section--i'></i>
											<span className='h1 fw-bold mb-0'>Logo</span>
										</div>
										<h5 className='fw-normal mb-3 pb-3 form-section--h5'>
											Sign into your account
										</h5>
										<Formik
											initialValues={defaultInputs}
											onSubmit={handleSubmit}
											validate={(values: Type): Type => validator(values)}
										>
											{(): ReactElement => (
												<Form>
													{form.map(
														({
															id,
															name,
															placeholder,
															type,
															display,
														}: Attributes): ReactElement => (
															<div
																className='form-outline mb-4'
																key={id}
															>
																<Editable
																	type={type}
																	placeholder={placeholder}
																	name={name}
																	display={display}
																/>
															</div>
														)
													)}
													<div className='pt-1 mb-4'>
														<button
															type='submit'
															className='btn btn-dark btn-lg btn-block'
														>
															{submit}
														</button>
													</div>
												</Form>
											)}
										</Formik>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Forms;
