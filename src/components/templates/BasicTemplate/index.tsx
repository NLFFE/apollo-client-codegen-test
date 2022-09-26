import { ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

export const BasicTemplate = ({ children }: Props) => {
  return <>{children}</>;
};
