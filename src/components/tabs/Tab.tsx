import React, { FC, SyntheticEvent } from 'react';
import { TabLabel, TabSelected, TabStyled } from './Tabs.styled';

interface TabProps {
	label: string;
	tab: string;
	onTabSelected: (tab: string, index: number) => void;
	isSelected: boolean;
	index: number;
}

export const Tab: FC<TabProps> = ({ label, tab, onTabSelected, isSelected, index }) => {
	const handleTabClicked = (event: SyntheticEvent) => {
		event.stopPropagation();
		onTabSelected(tab, index);
	};

	const labelChanged = label.toLowerCase().replace(' ', '-');

	return <TabStyled onClick={handleTabClicked}>{isSelected ? <TabSelected>{label}</TabSelected> : <TabLabel>{label}</TabLabel>}</TabStyled>;
};
