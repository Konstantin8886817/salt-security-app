import { Pre } from '@blueprintjs/core';
import { Checkbox, Label } from '../components';

export const columnsScheme: Array<{ key: string; label: string; component: JSX.Element }> = [
	{
		key: 'name',
		label: 'Name',
		component: <></>,
	},
	{
		key: 'pii',
		label: 'PII',
		component: <Checkbox label="PII" value onChange={() => {}} />,
	},
	{
		key: 'masking',
		label: 'MASKING',
		component: <Checkbox label="MASKED" value onChange={() => {}} />,
	},
	{
		key: 'type',
		label: 'TYPE',
		component: <Label value={''} />,
	},
];

export const renderEmptyData = () => {
	return <Pre>{'Data not exist'}</Pre>
}
