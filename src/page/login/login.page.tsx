import React from "react";
import { LoginFormComponent } from "./components";
import { Credentials } from "./credentials.vm";
import { isValidLogin } from "./api";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import classes from "./login.page.module.css";
import { useProfileContext } from "@/core/profile";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUserName } = useProfileContext();
  const handleSubmit = (credentials: Credentials) => {
    isValidLogin(credentials).then((isValid) => {
      if (isValid) {
        navigate(appRoutes.accountList);
        setUserName(credentials.user);
      } else alert("Credenciales incorrectas");
    });
  };

  return (
    <>
      <header className={classes.header}>
        <img
          className={classes.logo}
          src="assets/logo_header.svg"
          alt="logo del banco"
        />
      </header>
      <div className={classes.bgImg}></div>
      <div className={classes.box}>
        <h1>Acceso</h1>
        <LoginFormComponent onLogin={handleSubmit} />
        <h4 className={classes.inputFooter}>
          Está usted en un <strong>sitio seguro.</strong>
        </h4>
      </div>
    </>
  );
};
