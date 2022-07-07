import React, { FC } from "react";
import { Tab } from "./Tab";
import { TabsStyled } from "./Tabs.styled";

interface TabsProps {
    tabs: [];
    onTabClicked: () => void;
    currentSelectedTab: string;
}

export const Tabs: FC<TabsProps> = ({ tabs, onTabClicked, currentSelectedTab }) => {
    const tabsList = tabs.map((tab, index) => (
        <Tab key={tab} label={tab} tab={tab} onTabSelected={onTabClicked} index={index} isSelected={currentSelectedTab === tab}/>
    ))

    return <TabsStyled>{tabsList}</TabsStyled>
}