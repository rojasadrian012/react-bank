import React from "react";
import { AppLayout } from "../../layouts/app/app-layout";
import { AccountItemVM } from "./account-item.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { getAccountsList } from "./api/account-data.api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { useNavigate } from "react-router-dom";
import { PageHeader } from "@/common/components/page-header/page-header";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountItemVM[]>([]);

  React.useEffect(() => {
    getAccountsList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  const navigate = useNavigate();
  const createAccount = ()=> navigate('/create-account')

  return (
    <AppLayout>
      <div className={classes.root}>
        <PageHeader>
          <h1>Mis Cuentas</h1>
          <button onClick={createAccount}>Agregar nueva cuenta</button>
        </PageHeader>
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
