import React, { FC } from 'react';
import { TableHeader, TableSection } from './components';
import { TableSections, TableWrapper } from './Table.styled';

interface Props {
	columns: [];
	sections: [];
	sectionLabels: string;
}

export const Table: FC<Props> = ({ columns, sections, sectionLabels }) => {
	return (
		<TableWrapper>
			<TableHeader columns={columns} />
			<TableSections>
				{Object.keys(sections).map((sectionName: any) => (
					<TableSection key={sectionName} sectionName={sectionLabels[sectionName]} sectionRowsData={sections[sectionName]} />
				))}
			</TableSections>
		</TableWrapper>
	);
};
