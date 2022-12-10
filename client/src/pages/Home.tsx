import { ReactElement } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Urgencias from '../components/Urgencias/Urgencias';

const Home = (): ReactElement => {
	return (
		<div>
			<Header />
			Parce ando en home, mire lo que tengo
			<h2>Servicio DayCare</h2>
			<p>
				¿Te vas de viaje y no los puedes llevar? ¿Quizas necesitas una mano para
				llegar a la couta de paseos de Kaiser? En Servicio Daycare encontraras
				guarderias y paseadores dispuestos a ayudarte ¿Ya usaste Daycare?
				¡Dejanos un comentario!
			</p>
			<Urgencias />
			<Footer />
		</div>
	);
};

export default Home;
