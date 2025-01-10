import { buildValidationFieldSuccessResult, builRequieredFieldValidationFailedResponse, FieldValidationResult, isStringValidInformed } from "@/common/validations";

export const validAliasField = (alias: string): FieldValidationResult => {
    if (!isStringValidInformed(alias)) {
        return builRequieredFieldValidationFailedResponse()
    }
    return buildValidationFieldSuccessResult()
};

export const validTypepField = (type: string): FieldValidationResult => {
    if (!isStringValidInformed(type)) {
        return builRequieredFieldValidationFailedResponse()
    }
    return buildValidationFieldSuccessResult()
};