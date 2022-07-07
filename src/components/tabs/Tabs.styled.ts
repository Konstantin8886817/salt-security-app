import styled from '@emotion/styled';

export const TabsStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	color: @light-gray;
	padding-left: 24px;
	height: 50px;
	box-shadow: 0 4px 2px -2px #d3d3d3;
`;

export const TabStyled = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	padding-top: 0;
	margin-right: 32px;
	cursor: pointer;
`;

export const TabLabel = styled.span`
	display: flex;
	height: 100%;
	align-items: center;
	position: relative;
	padding: 0 8px;
	transition: all 200ms ease-in-out 0ms;
	color: #616161;
	font-weight: bold;

	&:hover {
		color: #5c2096;
	}

	&:after {
		content: ' ';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		transition: transform 200ms ease-out;
		background-color: #5c2096;
		bottom: -2px;
		height: 3px;
		left: 0;
	}
`;

export const TabSelected = styled(TabLabel)`
	opacity: 1;
	color: #5c2096;
	font-weight: bold;

	&:after {
		transform: scaleX(1.1);
	}
`;
