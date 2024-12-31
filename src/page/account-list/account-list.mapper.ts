import { AccountItemVM } from "./account-item.vm";
import { AccountApiModel } from "./api";

export const mapAccountListFromApiToVm = (
    accountList: AccountApiModel[]
): AccountItemVM[] =>
    accountList.map((account) => ({
        id: account.id,
        iban: account.iban,
        type: account.type,
        name: account.name,
        balance: account.balance.toString(),
        lastTransaction: new Date(account.lastTransaction),
    }));



