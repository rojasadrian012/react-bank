
import { isStringValidInformed, isValidIban } from "@/common/validations";
import { FieldValidationResult } from "../transfer.vm";

const REQUIRED_FIELD_MESSAGE = 'El campo no puede estar vacío';
const IBAN_VALIDATION_MESSAGE = 'El IBAN no está informado.'

const buildValidationFieldErrorResult = (errorMessage: string): FieldValidationResult => ({
    succeeded: false,
    errorMessage
})

const buildValidationFieldSuccessResult = (): FieldValidationResult => ({
    succeeded: true
})

export const validdIbanField = (iban: string): FieldValidationResult => {
    if (!isStringValidInformed(iban)) {
        return buildValidationFieldErrorResult(REQUIRED_FIELD_MESSAGE)
    }

    if (isValidIban(iban)) {
        return buildValidationFieldErrorResult(IBAN_VALIDATION_MESSAGE)
    }

    return buildValidationFieldSuccessResult()
}