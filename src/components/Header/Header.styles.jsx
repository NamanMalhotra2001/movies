import styled from 'styled-components';

export const Wrapper = styled.div`
	background: var(--darkGrey);
	padding: 0 20px;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 5rem;
	margin: 0 auto;
`;

export const Logo = styled.h1`
	font-size: 2.5rem;
	font-family: var(--font2);
	color: white;
	user-select: none;
	cursor: pointer;

	@media screen and (max-width: 500px) {
		font-size: 1.2rem;
	}
`;

export const LogoImg = styled.img`
	width: 250px;

	@media screen and (max-width: 500px) {
		width: 150px;
	}
`;

export const Right = styled.div`
	display: flex;
	align-items: center;
`;

export const TMDBLogoImg = styled.img`
	width: 80px;

	@media screen and (max-width: 500px) {
		width: 40px;
	}
`;
