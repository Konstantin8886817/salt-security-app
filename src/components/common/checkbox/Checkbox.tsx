import React, { FC, useEffect, useState } from 'react';
import { Container } from './Checkbox.styled';

interface Props {
	label: string;
	value: boolean;
	onChange: (value: boolean) => void;
}

export const Checkbox: FC<Props> = ({ label, value, onChange }) => {
	const [isChecked, toggleIsChecked] = useState(value);

	useEffect(() => {
		toggleIsChecked(value);
	}, [value]);

	const handleOnChange = () => {
		onChange && onChange(!value);
		toggleIsChecked(!isChecked);
	};

	return (
		<Container color={`${isChecked ? 'white' : ''}`} onClick={handleOnChange}>
			{label}
		</Container>
	);
};
