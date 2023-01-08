import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import CardPets from '../components/CardPets';
import DetailPet from '../components/DetailPet';
import Footer from '../components/Footer';
import Header from '../components/Header';
import useMedicalPets from '../hooks/useMedicalPets';

function Pets(): ReactElement {
	const { allUserPets, pathname, id_pet, petForUser } = useMedicalPets();
	return (
		<>
			{pathname === '/pets' ? (
				<>
					<header className='header'>
						<Header />
					</header>
					<main>
						{allUserPets.length ? (
							pathname === '/pets' ? (
								<Link to={`/pet/${id_pet?.id}`}>
									<CardPets allUserPets={allUserPets} />
								</Link>
							) : (
								<DetailPet petForUser={petForUser} />
							)
						) : (
							<Link to='/pet'>
								<div>
									<h2>Agrega tus mascotas</h2>
									<h3>+</h3>
								</div>
							</Link>
						)}
					</main>
					<footer className='footer'>
						<Footer />
					</footer>
				</>
			) : allUserPets.length ? (
				pathname === '/pets' ? (
					<Link to={`/pet/${id_pet?.id}`}>
						<CardPets allUserPets={allUserPets} />
					</Link>
				) : (
					<DetailPet petForUser={petForUser} />
				)
			) : (
				<Link to='/pet'>
					<div>
						<h2>Agrega tus mascotas</h2>
						<h3>+</h3>
					</div>
				</Link>
			)}
		</>
	);
}

export default Pets;
