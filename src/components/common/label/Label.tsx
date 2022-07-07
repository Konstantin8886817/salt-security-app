import React, { FC } from "react";
import { Wrapper } from "./Label.styled";

interface Props {
    value: string;
}

export const Label: FC<Props> = ({ value }) => {
    return <Wrapper>{value.toUpperCase()}</Wrapper>
}