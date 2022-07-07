import React, { FC } from 'react';
import { Container, IconStyled, SecondText, Text, Wrapper } from './EndPointApi.styled';

interface Props {
	items: Array<{text: string}>;
}

enum IconType {
	CHEVRON_RIGHT = 'chevron-right',
}

export const EndPointApi: FC<Props> = ({ items }) => {
	return (
		<Wrapper>
			{items.map(({ text }, index) => {
				const handleLastIndex = index !== items.length - 1;
				return (
					<Container key={text}>
						<Text>
							{handleLastIndex ? <></> : <SecondText>{text}</SecondText>}
							{text}
						</Text>
						{handleLastIndex && <IconStyled icon={IconType.CHEVRON_RIGHT} />}
					</Container>
				);
			})}
		</Wrapper>
	);
};
