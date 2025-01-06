import { FormValidationResult } from "@/common/validations";
import { TransferError, TransferVm } from "../transfer.vm";
import {
  validAccountIdField,
  validateNameField,
  validConceptField,
  validdIbanField,
  validEmailField,
  validNotesField,
  validReadDateTransferField,
} from "./field-transfer-valitation";

export const validateForm = (form: TransferVm): FormValidationResult<TransferError> => {
  const fieldValidationsResults = [
    validAccountIdField(form.accountId),
    validdIbanField(form.iban),
    validateNameField(form.name),
    validAccountIdField(form.amount),
    validConceptField(form.concept),
    validNotesField(form.notes),
    validReadDateTransferField(form.realDateTransfer),
    validEmailField(form.email),
  ];

  return {
    succeeded: fieldValidationsResults.every((f) => f.succeeded),
    errors: {
      accountId: fieldValidationsResults[0].errorMessage ?? "",
      iban: fieldValidationsResults[1].errorMessage ?? "",
      name: fieldValidationsResults[2].errorMessage ?? "",
      amount: fieldValidationsResults[3].errorMessage ?? "",
      concept: fieldValidationsResults[4].errorMessage ?? "",
      notes: fieldValidationsResults[5].errorMessage ?? "",
      realDateTransfer: fieldValidationsResults[6].errorMessage ?? "",
      email: fieldValidationsResults[7].errorMessage ?? "",
      dateTransfer: "",
    },
  };
};
