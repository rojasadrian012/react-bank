export interface AccountVm {
    id: string,
    iban: string,
    alias: string
}

export interface TransferVm {
    accountId: string,
    iban: string,
    name: string,
    amount: string,
    concept: string,
    notes: string,
    dateTransfer: string,
    realDateTransfer?: Date,
    email: string
}

export const createEmptyTransfer = (): TransferVm => ({
    accountId: '',
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    dateTransfer: '',
    realDateTransfer: undefined,
    email: ''
})

export interface TransferError {
    accountId: string,
    iban: string,
    name: string,
    amount: string,
    concept: string,
    notes: string,
    dateTransfer: string,
    realDateTransfer: string,
    email: string
}

export const createEmptyTransferError = (): TransferError => ({
    accountId: '',
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    dateTransfer: '',
    realDateTransfer: '',
    email: ''
})

export interface FieldValidationResult {
    succeeded: boolean,
    errorMessage?: string
}

export interface FormValidationResult {
    suceeded: boolean,
    errors: TransferError
}