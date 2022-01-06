import styled from 'styled-components';

export const Wrapper = styled.div`
	background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0) 49%,
			rgba(0, 0, 0, 0.65) 100%
		),
		url(${({ image }) => image}), var(--darkGrey);
	background-size: 100%, cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 35rem;
	position: relative;
	animation: animateHeroImage 0.6s;

	@keyframes animateHeroImage {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Content = styled.div`
	padding: 20px;
	max-width: var(--maxWidth);
	margin: 0 auto;
`;

export const Text = styled.div`
	z-index: 100;
	max-width: 700px;
	position: absolute;
	bottom: 40px;
	margin-right: 20px;
	min-height: 100px;
	color: var(--white);
	padding: 1rem;
	border-radius: 1rem;
	user-select: none;
	background-color: rgb(0, 0, 0, 0.1);
	transition: 0.5s;

	:hover {
		background-color: rgb(0, 0, 0, 0.8);
	}

	h1 {
		font-size: var(--fontSuperBig);

		@media screen and (max-width: 720px) {
			font-size: var(--fontBig);
		}
	}

	p {
		font-size: var(--fontBig);

		@media screen and (max-width: 720px) {
			font-size: var(--fontSmall);
		}
	}

	@media screen and (max-width: 720px) {
		max-width: 100%;
	}
`;
