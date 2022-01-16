import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	z-index: 999;
	top: 0;
	right: 6rem;
	margin-top: 0.7rem;
	display: flex;
	align-items: center;
	/* height: 100px; */
	/* background: var(--darkGrey); */
	padding: 0 20px;

	@media screen and (max-width: 500px) {
		transform: scale(0.6);
		right: 2rem;
	}
`;

export const Content = styled.div`
	position: relative;
	max-width: var(--maxWidth);
	width: 20vw;
	height: 55px;
	background: var(--medGrey);
	margin: 0 auto;
	border-radius: 3rem;
	color: white;
	transition: 0.5s;

	@media screen and (max-width: 500px) {
	transition: 0.25s;
		width: 40vw;
	}

	:focus-within {
		border-radius: 1rem;
		width: 45vw;

		@media screen and (max-width: 500px) {
			width: 50vw;
		}
	}

	img {
		position: absolute;
		left: 15px;
		top: 14px;
		width: 30px;
	}

	input {
		font-size: var(--fontBig);
		position: absolute;
		left: 0;
		border: none;
		margin: 8px;
		padding: 0 0 0 60px;
		width: 95%;
		background: transparent;
		height: 40px;
		color: white;
		outline: none;
	}
`;
