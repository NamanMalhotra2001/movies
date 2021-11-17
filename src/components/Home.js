import React, { useState, useEffect } from 'react';

// API
import API from '../API';

// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';

// Components
import HeroImage from './HeroImage';
import Grid from './Grid';

// Hook
import { useHomeFetch } from '../Hooks/useHomeFetch';

// Image
import NoImage from '../images/no_image.jpg';
import react from 'react';

const Home = () => {
	const { state, loading, error } = useHomeFetch();
	console.log(state);

	return (
		<React.Fragment>
			{state.results[0] ? (
				<HeroImage
					image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
					title={state.results[0].original_title}
					text={state.results[0].overview}
				/>
			) : null}
			<Grid header='Popular Movies'>
				{state.results.map((movie) => (
					<div key={movie.id}>{movie.title}</div>
				))}
			</Grid>
		</React.Fragment>
	);
};

export default Home;
