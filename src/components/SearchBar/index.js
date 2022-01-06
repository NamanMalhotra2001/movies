import React, { useState, useEffect, useRef } from 'react';

// Styles
import * as s from './SearchBar.styles';

// Image
import searchIcon from '../../images/search-icon.svg';

const SearchBar = ({ setSearchTerm }) => {
	const [state, setState] = useState('');

	const initial = useRef(true);

	useEffect(() => {
		if (initial.current) {
			initial.current = false;
			return;
		}

		const timer = setTimeout(() => {
			setSearchTerm(state);
		}, 500);

		return () => clearTimeout(timer);
	}, [setSearchTerm, state]);

	return (
		<s.Wrapper>
			<s.Content>
				<img src={searchIcon} alt='search-icon'></img>
				<input
					type='text'
					placeholder='Search'
					onChange={(event) =>
						setState(event.currentTarget.value)
					}
					value={state}
				/>
			</s.Content>
		</s.Wrapper>
	);
};

export default SearchBar;
