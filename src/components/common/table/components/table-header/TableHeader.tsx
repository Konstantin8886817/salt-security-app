import React, { FC } from 'react';
import './table-header.less';
import { ColumnStyled, HeaderWrapper } from './TableHeader.styled';

export interface Props {
	columns: string[];
}

export const TableHeader: FC<Props> = ({ columns }) => {
	return (
		<HeaderWrapper>
			{columns.map((colName) => {
				return <ColumnStyled key={colName}>{colName.toUpperCase()}</ColumnStyled>;
			})}
		</HeaderWrapper>
	);
};
