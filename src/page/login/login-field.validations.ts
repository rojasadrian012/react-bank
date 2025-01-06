import {
  buildValidationFieldSuccessResult,
  builRequieredFieldValidationFailedResponse,
  FieldValidationResult,
  isStringValidInformed,
} from "@/common/validations";

export const validateUserField = (value: string): FieldValidationResult => {
  if (!isStringValidInformed(value)) {
    return builRequieredFieldValidationFailedResponse();
  }
  return buildValidationFieldSuccessResult();
};

export const validatePasswordField = (value: string) => {
  if (!isStringValidInformed(value))
    return builRequieredFieldValidationFailedResponse();
  return buildValidationFieldSuccessResult();
};
