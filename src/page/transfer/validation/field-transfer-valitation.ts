import {
  isValueNotNullOrUndefined,
  isPositiveNumbre,
  isStringValidInformed,
  isValidIban,
  isDateAfterToday,
  isEmailWellFormed,
  IBAN_VALIDATION_MESSAGE,
  INVALID_AMOUNT_MESSAGE,
  INVALID_REAL_DATE_TRANSFER_MESSAGE,
  INVALIV_EMAIL_MESSAGE,
  FieldValidationResult,
  buildValidationFieldErrorResult,
  buildValidationFieldSuccessResult,
  builRequieredFieldValidationFailedResponse,
} from "@/common/validations";

export const validdIbanField = (iban: string): FieldValidationResult => {
  if (!isStringValidInformed(iban)) {
    return builRequieredFieldValidationFailedResponse();
  }

  if (!isValidIban(iban)) {
    return buildValidationFieldErrorResult(IBAN_VALIDATION_MESSAGE);
  }

  return buildValidationFieldSuccessResult();
};

export const validAccountIdField = (value: string): FieldValidationResult => {
  if (!isStringValidInformed(value)) {
    return builRequieredFieldValidationFailedResponse();
  }

  return buildValidationFieldSuccessResult();
};

export const validateNameField = (name: string): FieldValidationResult => {
  if (!isStringValidInformed(name)) {
    return builRequieredFieldValidationFailedResponse();
  }

  return buildValidationFieldSuccessResult();
};

export const validAmountField = (value: number): FieldValidationResult => {
  if (!isPositiveNumbre(value)) {
    return buildValidationFieldErrorResult(INVALID_AMOUNT_MESSAGE);
  }

  return buildValidationFieldSuccessResult();
};

export const validConceptField = (value: string): FieldValidationResult => {
  if (!isStringValidInformed(value)) {
    return builRequieredFieldValidationFailedResponse();
  }

  return buildValidationFieldSuccessResult();
};

export const validNotesField = (_: string): FieldValidationResult =>
  buildValidationFieldSuccessResult();

export const validReadDateTransferField = (
  value?: Date
): FieldValidationResult => {
  if (!isValueNotNullOrUndefined(value)) {
    return buildValidationFieldSuccessResult();
  }

  if (value && !isDateAfterToday(value)) {
    return buildValidationFieldErrorResult(INVALID_REAL_DATE_TRANSFER_MESSAGE);
  }

  return buildValidationFieldSuccessResult();
};

export const validEmailField = (email: string): FieldValidationResult => {
  if (email && !isEmailWellFormed(email))
    return buildValidationFieldErrorResult(INVALIV_EMAIL_MESSAGE);

  return buildValidationFieldSuccessResult();
};
