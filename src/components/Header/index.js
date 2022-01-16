import React from 'react';
import { useNavigate } from 'react-router-dom';

// Logos
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Styles
import * as s from './Header.styles';

// Components
// import SearchBar from '../SearchBar';

function Header() {
	const navigate = useNavigate();
	return (
		<s.Wrapper>
			<s.Content>
				{/* <s.LogoImg src={RMDBLogo} alt='rmdb-logo' /> */}
				<h1
					style={{
						fontSize: '2.5rem',
						fontFamily: 'var(--font2)',
						color: 'white',
						userSelect: 'none',
						cursor: 'pointer',
					}}
					onClick={() => navigate('/')}
				>
					theMoviesCatalogue
				</h1>
				<s.Right>
					{/* <SearchBar /> */}
					<s.TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
				</s.Right>
			</s.Content>
		</s.Wrapper>
	);
}

export default Header;
