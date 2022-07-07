import { Icon } from '@blueprintjs/core';
import styled from '@emotion/styled';

export const SectionWrapper = styled.div`
display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

export const SectionContainer = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 4px;
`;

export const SectionIcon = styled(Icon)`
background-color: @light-gray;
border-radius: 50%;
margin-right: 4px;

svg {
  fill: #A15EC0;
}
`;

export const SectionTitle = styled.div`
font-weight: bold;
`;