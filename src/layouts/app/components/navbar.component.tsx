import { appRoutes, routePrefixes } from "@/core/router";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";

export const NavBarComponent: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <nav className={classes.navbar}>
      <ul className={classes.list}>
        <li
          className={
            pathname.startsWith(routePrefixes.accountList)
              ? classes.selected
              : ""
          }>
          <Link to={appRoutes.accountList}>Mis Cuentas</Link>
        </li>
        <li
          className={
            pathname.startsWith(routePrefixes.transfer) ? classes.selected : ""
          }>
          <Link to={appRoutes.transfer}>Transferencias</Link>
        </li>
      </ul>
    </nav>
  );
};
