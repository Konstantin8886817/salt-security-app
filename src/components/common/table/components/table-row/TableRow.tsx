import React, { FC } from "react";
import { columnsScheme } from "../../../../../services";
import { RowStyled, RowWrapper } from "./TableRow.styled";

interface Props {
    rowData: string[];
    isOpen: boolean;
}

export const TableRow:FC<Props> = ({ rowData }) => {
    return (
        <RowWrapper>
			{Object.keys(rowData).map((colData: any, colIndex) => {
				const handleChange = (value: string) => {
					rowData[colData] = value;
				};
				return (
					<RowStyled key={columnsScheme[colIndex].key}>
						{columnsScheme[colIndex].component
							? React.cloneElement(columnsScheme[colIndex].component, { value: rowData[colData], onChange: handleChange })
							: rowData[colData]}
					</RowStyled>
				);
			})}
		</RowWrapper>
    )
}