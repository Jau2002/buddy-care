import { ReactElement } from 'react';

function Testimonio(): ReactElement {
	return (
		<div>
			<div>
				<div className='contenedortestimonio'>
					<img
						className='imagentestimonio'
						src='img/testi_foto1.jpg'
					/>

					<div className='contenedortextotestimonio'>
						<p className='textotestimonio'>
							BUDDY CARE Es una aplicación orientada a la afiliación de
							Veterinarias y Médicos Veterinarios con el fin de proporcionarle a
							los clientes suscriptos diferentes servicios como el acceso a un
							exclusivo shop de artículos de veterinaria con inmejorables
							promociones
						</p>
					</div>
				</div>

				<div className='contenedortestimonio'>
					<img
						className='imagentestimonio'
						src='img/testi_foto2.jpg'
					/>

					<div className='contenedortextotestimonio'>
						<p className='textotestimonio'>
							Como cliente suscripto también tendrá acceso a un servicio de
							URGENCIAS , donde veterinarios del staff publicaran sus horarios
							de atención para solucionar está el acceso a un exclusivo shop de
							artículos de veterinaria con inmejorables promociones
						</p>
					</div>
				</div>

				<div className='contenedortestimonio'>
					<img
						className='imagentestimonio'
						src='img/testi_foto3.jpg'
					/>

					<div className='contenedortextotestimonio'>
						<p className='textotestimonio'>
							Las Veterinarias afiliadas y el staff Médicos etán habilitados
							para realizar campañas promocionales con todos los clientes
							suscriptos, además podrán generar contenido dirigido
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Testimonio;
