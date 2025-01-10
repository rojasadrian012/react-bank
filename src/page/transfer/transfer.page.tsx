import { AppLayout } from "@/layouts";
import { AccountVm, TransferVm } from "./transfer.vm";
import React from "react";
import { TransferFormComponent } from "./component";
import classes from "./transfer.page.module.css";
import { getAccountList, saveTransfer } from "./api";
import { mapAccountApiToVm, mapTransferVmToApi } from "./transfer.mapper";
import { useParams } from "react-router-dom";
import { PageHeader } from "@/common/components/page-header/page-header";

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const {id} = useParams<{id:string}>()

  React.useEffect(() => {
    getAccountList().then((accountListApi) => {
      const accounts = accountListApi.map((account) =>
        mapAccountApiToVm(account)
      );
      setAccountList(accounts);
    });
  }, []);

  const handleTransfer = (transferData: TransferVm) => {
    const transfer = mapTransferVmToApi(transferData);
    saveTransfer(transfer).then((result) => {
      if (result) alert("Tranferencias realizada con éxito.");
      else alert("Error al realizar la transferencia.");
    });
  };

  return (
    <AppLayout>
      <div className={classes.container}>
        <PageHeader>
          <h1>Transferencias Nacionales</h1>
        </PageHeader>
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTransfer}
          defaultAccountId={id}
        />
      </div>
    </AppLayout>
  );
};
