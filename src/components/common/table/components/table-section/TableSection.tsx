import React, { FC, useState } from 'react';
import { Collapse } from '@blueprintjs/core';
import { renderEmptyData } from '../../../../../services';
import { TableRow } from '../table-row';
import { SectionContainer, SectionIcon, SectionTitle, SectionWrapper } from './TableSection.styled';

interface Props {
	sectionName: string;
	sectionRowsData: [];
}

export const TableSection: FC<Props> = ({ sectionName, sectionRowsData }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const isClickedToOpenSection = () => {
		setIsOpen(!isOpen);
	};

	return (
		<SectionWrapper key={sectionName}>
			<SectionContainer>
				<SectionIcon size={16} icon={isOpen ? 'caret-down' : 'caret-right'} />
				<SectionTitle onClick={isClickedToOpenSection}>{sectionName}</SectionTitle>
			</SectionContainer>
			<div>
				<Collapse isOpen={isOpen}>
					<div>
						{sectionRowsData.length > 0
							? sectionRowsData.map((rowData) => <TableRow key={rowData.name} isOpen={isOpen} rowData={rowData} />)
							: renderEmptyData()}
					</div>
				</Collapse>
			</div>
		</SectionWrapper>
	);
};
