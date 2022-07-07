import React, { FC } from 'react';
import { EndPointApi } from '../common';
import { Details, Divider, HeaderWrapper, Method, Path } from './Header.styled';

interface HeaderProps {
	method: string;
	path: string;
	api: string;
}

enum Text {
	TEXT_ALL_API = 'All APIs',
}

export const Header: FC<HeaderProps> = ({ method, api, path }) => {
	const BREADCRUMBS = [{ text: Text.TEXT_ALL_API }, { text: api }, { text: path }];

	return (
		<HeaderWrapper>
			<Details>
				<Method>{method.toUpperCase()}</Method>
				<Path>{path}</Path>
			</Details>
			<EndPointApi items={BREADCRUMBS} />
			<Divider />
		</HeaderWrapper>
	);
};
