export interface AccountApiModel {
    id: string,
    iban: string,
    type: string,
    name: string,
    balance: number,
    lastTransaction: Date 
}

export interface TransferApiModel {
    accountId: string,
    iban: string,
    name: string,
    amount: string,
    concept: string,
    notes: string,
    transferDate: string,
    realTransferDate: string,
}