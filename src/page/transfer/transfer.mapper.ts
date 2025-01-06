import { AccountApiModel, TransferApiModel } from "./api";
import { AccountVm, TransferVm } from "./transfer.vm";

export const mapAccountApiToVm = (account: AccountApiModel): AccountVm => {
  return {
    id: account.id,
    alias: account.name,
    iban: account.iban,
  };
};

export const mapTransferVmToApi = (transfer: TransferVm): TransferApiModel => {
  return {
    accountId: transfer.accountId,
    amount: transfer.amount,
    concept: transfer.concept,
    iban: transfer.iban,
    transferDate: new Date().toDateString(),
    realTransferDate: transfer.realDateTransfer?.toDateString() ?? "",
    name: transfer.name,
    notes: transfer.notes,
  };
};
