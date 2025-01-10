export interface Account {
    type: string;
    name: string;
    iban?: string;
}

export interface AcccountError {
    type: string;
    name: string
}

export interface AccountApiModel {
    id: string;
    iban: string;
    type: string;
    name: string;
    balance: number;
    lastTransaction: string;
}

export const createEmptyAccount = (): Account => ({ type: '', name: '' })
export const createEmptyAccountError = (): AcccountError => ({ type: '', name: '' })