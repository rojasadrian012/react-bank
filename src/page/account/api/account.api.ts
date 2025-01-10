import Axios from "axios";
import { Account, AccountApiModel } from "../account.vm";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;
export const saveAccount = (account: Account): Promise<Account> =>
  Axios.post<Account>(url, account).then(({ data }) => data);

export const getAccountList = (): Promise<AccountApiModel[]> =>
    Axios.get<AccountApiModel[]>(url).then(({ data }) => data);