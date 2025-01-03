import { AppLayout } from "@/layouts";
import { AccountVm, TransferVm } from "./transfer.vm";
import React from "react";
import { TransferFormComponent } from "./component";

const accountListMock: AccountVm[] = [
  { id: "1", alias: "Cuenta principal", iban: "ES91 2100 0418 4502 0005 1332" },
  { id: "2", alias: "Cuenta ahorro", iban: "ES91 2100 0418 4502 0005 1332" },
  { id: "3", alias: "Cuenta nómina", iban: "ES91 2100 0418 4502 0005 1332" },
];

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    setAccountList(accountListMock);
  }, []);

  const handleTransfer = (transferData: TransferVm) => {
    console.log(transferData);
  };

  return (
    <AppLayout>
      <h1>Transfer Page</h1>
      <TransferFormComponent
        accountList={accountList}
        onTransfer={handleTransfer}
      />
    </AppLayout>
  );
};
