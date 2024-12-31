import React from "react";
import { AppLayout } from "../../layouts/app/app-layout";
import { AccountItemVM } from "./account-item.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { getAccountsList } from "./api/account-data.api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountItemVM[]>([]);

  React.useEffect(() => {
    getAccountsList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis Cuentas</h1>
          <button>Agregar nueva cuenta</button>
        </div>
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
