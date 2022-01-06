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
