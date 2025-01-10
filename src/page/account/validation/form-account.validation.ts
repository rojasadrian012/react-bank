
import { Account, AcccountError } from '../account.vm';
import { FormValidationResult } from '../../../common/validations/validation.model';
import { validAliasField, validTypepField } from './field-account.validation';


export const validateForm = (form: Account): FormValidationResult<AcccountError> => {
    const fieldValitationResults = [
        validAliasField(form.name),
        validTypepField(form.type)
    ]

    return {
        succeeded: fieldValitationResults.every((f) => f.succeeded),
        errors: {
            name: fieldValitationResults[0].errorMessage ?? "",
            type: fieldValitationResults[1].errorMessage ?? "",
        }
    }
}