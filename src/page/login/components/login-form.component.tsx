import React from "react";
import {
  createEmptyCredencialsFormErrors,
  createEmptyCredentials,
  Credentials,
  CredentialsFormErrors,
} from "../credentials.vm";
import { validateForm } from "../login.validation";
import classes from "./login-form.component.module.css";

export interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [credentials, setCredentials] = React.useState<Credentials>(
    createEmptyCredentials()
  );

  const [errors, setErrors] = React.useState<CredentialsFormErrors>(
    createEmptyCredencialsFormErrors()
  );

  const handleFliendChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmint = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = validateForm(credentials);

    if (validationResult.succeeded) onLogin(credentials);
    else {
      setErrors(validationResult.errors);
    }
  };

  return (
    <form onSubmit={handleSubmint} className={classes.form}>
      <div>
        <input
          type="text"
          id="username"
          name="user"
          onChange={handleFliendChange}
          placeholder="Usuario"
          className={errors.user ? classes.inputError : ""}
        />
        {errors.user && <p className={classes.error}>{errors.user}</p>}
      </div>
      <div>
        <input
          type=" password"
          id="password"
          name="password"
          onChange={handleFliendChange}
          placeholder="Contraseña"
          className={errors.password ? classes.inputError : ""}
        />
        {errors.password && <p className={classes.error}>{errors.password}</p>}
      </div>
      <button className={classes.btnEnviar} type="submit">
        Acceder
      </button>
    </form>
  );
};
