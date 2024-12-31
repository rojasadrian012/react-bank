import { createEmptyCredencialsFormErrors, CredentialsFormErrors } from "./credentials.vm";

interface ValidationResult {
    succeeded: boolean;
    errors: CredentialsFormErrors
}

export const validateForm = (
    credentials: CredentialsFormErrors
): ValidationResult => {
    let stateValidation: ValidationResult = {
        succeeded: true,
        errors: createEmptyCredencialsFormErrors()
    }

    if (!credentials.user) {
        stateValidation.succeeded = false
        stateValidation.errors = {
            ...stateValidation.errors,
            user: "El usuario es requerido"
        }
    }

    if (!credentials.password) {
        stateValidation.succeeded = false
        stateValidation.errors = {
            ...stateValidation.errors,
            password: "La contraseña es requerida"
        }
    }
    return stateValidation
}