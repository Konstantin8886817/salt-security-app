import React, { FC, useEffect, useState } from 'react';
import { Container } from './Checkbox.styled';

interface Props {
	label: string;
	value: boolean;
	onChange: (value: boolean) => void;
}

export const Checkbox: FC<Props> = ({ label, value, onChange }) => {
	const [isChecked, setIsChecked] = useState(value);

	useEffect(() => {
		setIsChecked(value);
	}, [value]);

	const handleOnChange = () => {
		onChange && onChange(!value);
		setIsChecked(!isChecked);
	};

	return (
		<Container color={`${isChecked ? 'white' : ''}`} onClick={handleOnChange}>
			{label}
		</Container>
	);
};
