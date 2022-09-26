import { ReactNode } from "react";
import styled from "styled-components";

interface TabbarItemModel {
  readonly text: string | ReactNode;
  readonly onClick?: () => void;
}

interface Porps {
  readonly tabbarItems: TabbarItemModel[];
}

export const NavigationBar = ({ tabbarItems }: Porps) => {
  const handleClick = (item: TabbarItemModel) => {
    item.onClick && item.onClick();
  };

  return (
    <TabbarLayout>
      {tabbarItems.map((item, index) => {
        const { text } = item;
        return (
          <TabbarItem key={index} onClick={() => handleClick(item)}>
            {text}
          </TabbarItem>
        );
      })}
    </TabbarLayout>
  );
};

const TabbarLayout = styled.div``;

const TabbarItem = styled.div``;
