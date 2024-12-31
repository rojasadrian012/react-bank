import React from "react";
import {
  FooterComponent,
  HeaderComponent,
  NavBarComponent,
} from "./components";
import classes from "./app-layout.module.css";
interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <NavBarComponent />
      <main className={classes.mainContainer}>{children}</main>
      <FooterComponent />
    </>
  );
};
