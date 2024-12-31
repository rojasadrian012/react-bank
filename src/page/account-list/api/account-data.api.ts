import Axios from "axios";
import { AccountApiModel } from "./account-list.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`

export const getAccountsList = (): Promise<AccountApiModel[]> =>
    Axios.get<AccountApiModel[]>(url).then(({ data }) => data)
