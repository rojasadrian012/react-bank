import { PageHeader } from "@/common/components/page-header/page-header";
import { AppLayout } from "@/layouts";
import React from "react";
import classes from "./account.page.module.css";
import {
  AcccountError,
  Account,
  createEmptyAccount,
  createEmptyAccountError,
} from "./account.vm";
import { validateForm } from "./validation/form-account.validation";
import { getAccountList } from "../transfer/api";
import { saveAccount } from "./api/account.api";

const accounts: Account[] = [
  {
    type: "1",
    name: "Cuenta Corriente",
  },
  {
    type: "2",
    name: "Cuenta Ahorro",
  },
  {
    type: "3",
    name: "Cuenta Nómina",
  },
];

export const AccountPage: React.FC = () => {
  const [account, setAccount] = React.useState<Account>(createEmptyAccount());
  const [errors, setErros] = React.useState<AcccountError>(
    createEmptyAccountError()
  );

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validateFormResult = validateForm(account);
    setErros({ ...validateFormResult.errors });
    if (validateFormResult.succeeded) {
      getAccountList().then((result) => {
        if (result.find((a) => a.name === account.name)) {
          alert("La cuenta ya existe");
          return;
        }
        saveAccount(account).then((result) => {
          alert("Cuenta creada. Iban: " + result.iban);
          return;
        });
      });
    }
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <PageHeader>
          <h1>Cuenta Bancaria</h1>
        </PageHeader>
        <form onSubmit={handleSubmit} className={classes.formContainer}>
          <div>
            <label>Tipo de Cuenta</label>
            <select
              name="type"
              onChange={handleFieldChange}
              value={account.type}
              className={classes.small}>
              <option value="">Selecione una cuenta</option>
              {accounts.map((account) => (
                <option key={account.type} value={account.type}>
                  {account.name}
                </option>
              ))}
            </select>
            <p className={classes.error}>{errors.type}</p>
          </div>
          <div>
            <label>Alias</label>
            <input
              name="name"
              onChange={handleFieldChange}
              className={classes.small}
            />
            <p className={classes.error}>{errors.name}</p>
          </div>
          <button className={classes.button} type="submit">
            GUARDAR
          </button>
        </form>
      </div>
    </AppLayout>
  );
};
