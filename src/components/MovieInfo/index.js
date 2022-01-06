import React from 'react';
import PropTypes from 'prop-types';

// Components
import Thumb from '../Thumb';

// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

// Image
import NoImage from '../../images/no_image.jpg';

// Styles
import * as s from './MovieInfo.styles';

const MovieInfo = ({ movie }) => (
	<s.Wrapper backdrop={movie.backdrop_path}>
		<s.Content>
			<Thumb
				image={
					movie.poster_path
						? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
						: NoImage
				}
				clickable={false}
			/>
			<s.Text>
				<h1>{movie.title}</h1>
				<h3>PLOT</h3>
				<p>{movie.overview}</p>

				<div className='rating-directors'>
					<div>
						<h3>RATING</h3>
						<div className='score'>{movie.vote_average}</div>
					</div>
					<div className='director'>
						<h3>
							DIRECTOR{movie.directors.length > 1 ? 'S' : ''}
						</h3>
						{movie.directors.map((director) => (
							<p key={director.credit_id}>{director.name}</p>
						))}
					</div>
				</div>
			</s.Text>
		</s.Content>
	</s.Wrapper>
);

MovieInfo.propTypes = {
	movie: PropTypes.object,
};

export default MovieInfo;
