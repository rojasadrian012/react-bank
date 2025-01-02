export interface AccountItemVM {
    id: string;
    iban: string;
    type: string;
    name: string;
    balance: string;
    lastTransaction: Date;
}

export const createEmptyAccount = ():AccountItemVM=> ( {
    id:'',
    iban:'',
    type:'',
    name:'',
    balance:'',
    lastTransaction: new Date(),
})
