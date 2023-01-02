import type { ReactElement } from 'react';
import Explanation from '../components/Explanation';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Home(): ReactElement {
	return (
		<>
			<header className='header'>
				<Header />
			</header>
			<main className='main'>
				<Explanation />
			</main>
			<footer className='footer'>
				<Footer />
			</footer>
		</>
	);
}

export default Home;
