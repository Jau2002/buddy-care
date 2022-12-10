import { ReactElement } from 'react';
import Header from '../Header/Header';
import Urgencias from '../Urgencias/Urgencias';
import Footer from '../Footer/Footer';

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
