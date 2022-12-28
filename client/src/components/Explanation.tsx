import { ReactElement } from 'react';

function Explanation(): ReactElement {
	return (
		<>
			<div className='explanation-div'>
				<img
					className='explanation-div--img'
					src='/img/testi_foto1.jpg'
					alt='Perro y gato'
				/>
				<div>
					<p className='explanation-div--p'>
						BUDDY CARE Es una aplicación orientada a la afiliación de
						Veterinarias y Médicos Veterinarios con el fin de proporcionarle a
						los clientes suscritos diferentes servicios como el acceso a un
						exclusivo shop de artículos de veterinaria con inmejorables
						promociones
					</p>
				</div>
			</div>
			<div className='explanation-div'>
				<img
					className='explanation-div--img'
					src='/img/testi_foto2.jpg'
					alt='Perro corazón'
				/>
				<div>
					<p className='explanation-div--p'>
						Como cliente suscrito también tendrá acceso a un servicio de
						URGENCIAS , donde veterinarios del staff publicaran sus horarios de
						atención para solucionar está el acceso a un exclusivo shop de
						artículos de veterinaria con inmejorables promociones
					</p>
				</div>
			</div>
			<div className='explanation-div'>
				<img
					className='explanation-div--img'
					src='/img/testi_foto3.jpg'
					alt='Perro familia'
				/>
				<div>
					<p className='explanation-div--p'>
						Las Veterinarias afiliadas y el staff Médicos están habilitados para
						realizar campañas promocionales con todos los clientes suscritos,
						además podrán generar contenido dirigido
					</p>
				</div>
			</div>
		</>
	);
}

export default Explanation;
