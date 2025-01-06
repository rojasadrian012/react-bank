import { FieldValidationResult } from "./validation.model";
import { REQUIRED_FIELD_MESSAGE } from "./validations.const";

export const buildValidationFieldErrorResult = (
  errorMessage: string
): FieldValidationResult => ({
  succeeded: false,
  errorMessage,
});

export const buildValidationFieldSuccessResult = (): FieldValidationResult => ({
  succeeded: true,
});

export const builRequieredFieldValidationFailedResponse = (): FieldValidationResult =>
  buildValidationFieldErrorResult(REQUIRED_FIELD_MESSAGE);