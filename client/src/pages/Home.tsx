import { ReactElement } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import Urgencias from '../components/Urgencias/Urgencias';

const Home = (): ReactElement => {
	return (
		<>
			<Header />
			Parce ando en home, mire lo que tengo
			<Urgencias />
			<Footer />
		</>
	);
};

export default Home;
