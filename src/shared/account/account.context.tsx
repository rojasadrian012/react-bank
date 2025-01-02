import { AccountItemVM, createEmptyAccount } from "@/page/account-list/account-item.vm"
import React from "react"



interface Context {
    account: AccountItemVM
    setAccount: (account:AccountItemVM)=>void
}

const AccountContext = React.createContext<Context>({
    account: createEmptyAccount(),
    setAccount: ()=>{}
})

interface Props {
    children: React.ReactNode
}
export const AccountProvider : React.FC<Props> = ({children})=>{
    const [account, setAccount] = React.useState<AccountItemVM>(createEmptyAccount());
    
    return(
        <AccountContext.Provider
        value={{
            account,
            setAccount,
          }}
        >
            {children}
        </AccountContext.Provider>
    )
}

export const useAccountContext = () => React.useContext(AccountContext);
