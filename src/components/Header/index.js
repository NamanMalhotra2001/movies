import React from 'react';
import { useNavigate } from 'react-router-dom';

// Logos
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Styles
import * as s from './Header.styles';

function Header() {
	const navigate = useNavigate();
	return (
		<s.Wrapper>
			<s.Content>
				<s.Logo onClick={() => navigate('/')}>
					theMoviesCatalogue
				</s.Logo>
				<s.Right>
					{/* <SearchBar /> */}
					<s.TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
				</s.Right>
			</s.Content>
		</s.Wrapper>
	);
}

export default Header;
