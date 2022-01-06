import React from 'react';
import { Link } from 'react-router-dom';

// Logos
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Styles
import * as s from './Header.styles';

// Components
// import SearchBar from '../SearchBar';

const Header = () => (
	<s.Wrapper>
		<s.Content>
			<Link to='/'>
				<s.LogoImg src={RMDBLogo} alt='rmdb-logo' />
			</Link>
			<s.Right>
				{/* <SearchBar /> */}
				<s.TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
			</s.Right>
		</s.Content>
	</s.Wrapper>
);

export default Header;
