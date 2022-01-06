import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import * as s from './BreadCrumb.styles';

const BreadCrumb = ({ movieTitle }) => (
	<s.Wrapper>
		<s.Content>
			<Link to='/' className='link'>
				<span>Home</span>
			</Link>
			<span>|</span>
			<span>{movieTitle}</span>
		</s.Content>
	</s.Wrapper>
);

export default BreadCrumb;
