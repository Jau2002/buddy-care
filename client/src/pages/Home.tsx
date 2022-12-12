import { ReactElement } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Urgencias from '../components/Urgencias';

function Home(): ReactElement {
	return (
		<>
			<head className='head'>
				<Header />
			</head>
			<main className='main'>
				<Urgencias />
			</main>
			<footer className='footer'>
				<Footer />
			</footer>
		</>
	);
}

export default Home;
